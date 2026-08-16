<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    default: 500
  },
  id: {
    type: String,
    default: "test"
  }
})

const containerRef = ref(null)
const iframeRef = ref(null)
const showIframe = ref(true)

// --- 環境（ポインター）に応じて初期高さを条件分岐 ---
// window が存在しない環境（SSRなど）を考慮し、安全に判定します
const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const currentHeight = ref(isTouchDevice ? props.height : 500)

let observer
let startY = 0
let startHeight = 0

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showIframe.value = true
      } else {
        if(showIframe.value == true && iframeRef.value){
          iframeRef.value.src = `${props.src}?timestamp=${new Date().getTime()}`
        }
        showIframe.value = false
      }
    },
    {
      threshold: 0
    }
  )

  observer.observe(containerRef.value)
})

// --- ここからリサイズ処理 ---
const startResize = (event) => {
  // 【追加】タッチデバイスではない場合はリサイズ処理を即座に終了する
  if (!isTouchDevice) return

  // 【重要】スマホ（タッチ）の場合は touches[0] から座標を取得、マウスならそのまま clientY
  if (event.touches && event.touches.length > 0) {
    startY = event.touches[0].clientY
  } else {
    startY = event.clientY
  }
  
  startHeight = currentHeight.value

  // ドラッグ中にiframe内にイベントが吸い込まれて動作が止まるのを完全に防ぐ
  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'none'

  // グローバルイベントの登録
  window.addEventListener('mousemove', onResizing)
  window.addEventListener('mouseup', stopResize)
  window.addEventListener('touchmove', onResizing, { passive: false })
  window.addEventListener('touchend', stopResize)
}

const onResizing = (event) => {
  // 移動中も touches[0] から正しく座標を取得する
  let currentY = 0
  if (event.touches && event.touches.length > 0) {
    currentY = event.touches[0].clientY
  } else {
    currentY = event.clientY
  }

  const deltaY = currentY - startY
  
  // 新しい高さを計算（可動範囲を最小300px〜最大1200pxに広げています）
  const newHeight = startHeight + deltaY
  currentHeight.value = Math.max(300, Math.min(1200, newHeight))
}

const stopResize = () => {
  // iframeのポインターイベントを元に戻す
  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'auto'

  // イベントリスナーの解除
  window.removeEventListener('mousemove', onResizing)
  window.removeEventListener('mouseup', stopResize)
  window.removeEventListener('touchmove', onResizing)
  window.removeEventListener('touchend', stopResize)
}
// --- ここまでリサイズ処理 ---

// --- ここから iframe側からのメッセージ受信
window.addEventListener('message', function(event) {
  // データが存在し、かつ指定したタイプのアクションであるか確認
  if (event.data && event.data.type === 'resize-iframe') {
    if( event.data.id == props.id ) {
      const iframeElement = document.querySelector('#'+props.id)
      const handle_icon = document.querySelector('.handle-icon');
      currentHeight.value = event.data.height + handle_icon.offsetHeight
    }
  }
});


onUnmounted(() => {
  observer?.disconnect()
  stopResize()
})
</script>

<template>
  <div 
    loading="lazy"
    ref="containerRef"
    class="iframe-container"
  >
    <!-- style属性で動的に高さをバインド -->
    <iframe 
      :id="id"
      :src="src" 
      class="responsive-iframe" 
      :style="{ height: currentHeight + 'px' }"
      ref="iframeRef">
    </iframe>

    <!-- 【修正】v-if="isTouchDevice" を追加し、タッチデバイスのみ表示・動作するように制御 -->
    <div 
      v-if="isTouchDevice"
      class="resize-handle" 
      @mousedown="startResize" 
      @touchstart="startResize"
    >
      <span class="handle-icon">＝</span>
    </div>
  </div>
</template>