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
const handleIconRef = ref(null) // 【追加】handle-icon のテンプレート参照
const showIframe = ref(true)

// --- 環境（ポインター）に応じて初期高さを条件分岐 ---
// 💡 typeof window !== 'undefined' の判定により、SSR（ビルド）時もエラーになりません
const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
const currentHeight = ref(isTouchDevice ? props.height : 500)

let observer
let startY = 0
let startHeight = 0

// --- iframe側からのメッセージ受信ハンドラー ---
// 💡 解除できるように名前付き関数として定義します
const handleMessage = (event) => {
  if (event.data && event.data.type === 'resize-iframe') {
    if (event.data.id === props.id) {
      // 💡 querySelector を使わず、Vue の ref から安全に高さを取得します
      const handle_icon_height = handleIconRef.value ? handleIconRef.value.offsetHeight : 0
      currentHeight.value = event.data.height + handle_icon_height
    }
  }
}

onMounted(() => {
  // 💡 windowへのイベント登録は、必ずブラウザ環境が確定する onMounted 内で行います
  window.addEventListener('message', handleMessage)

  // サイズ変更を監視
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        showIframe.value = true
      } else {
        if (showIframe.value === true && iframeRef.value) {
          iframeRef.value.src = `${props.src}?timestamp=${new Date().getTime()}`
        }
        showIframe.value = false
      }
    },
    {
      threshold: 0
    }
  )

  if (containerRef.value) {
    observer.observe(containerRef.value)
  }
})

// --- ここからリサイズ処理 ---
const startResize = (event) => {
  if (!isTouchDevice) return

  if (event.touches && event.touches.length > 0) {
    startY = event.touches[0].clientY
  } else {
    startY = event.clientY
  }
  
  startHeight = currentHeight.value

  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'none'

  window.addEventListener('mousemove', onResizing)
  window.addEventListener('mouseup', stopResize)
  window.addEventListener('touchmove', onResizing, { passive: false })
  window.addEventListener('touchend', stopResize)
}

const onResizing = (event) => {
  let currentY = 0
  if (event.touches && event.touches.length > 0) {
    currentY = event.touches[0].clientY
  } else {
    currentY = event.clientY
  }

  const deltaY = currentY - startY
  const newHeight = startHeight + deltaY
  currentHeight.value = Math.max(300, Math.min(1200, newHeight))
}

const stopResize = () => {
  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'auto'

  window.removeEventListener('mousemove', onResizing)
  window.removeEventListener('mouseup', stopResize)
  window.removeEventListener('touchmove', onResizing)
  window.removeEventListener('touchend', stopResize)
}

onUnmounted(() => {
  // 💡 ページ移動時にメッセージイベントを綺麗にクリーンアップ（メモリリーク防止）
  if (typeof window !== 'undefined') {
    window.removeEventListener('message', handleMessage)
  }
  
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
    <iframe 
      :id="id"
      :src="src" 
      class="responsive-iframe" 
      :style="{ height: currentHeight + 'px' }"
      ref="iframeRef">
    </iframe>

    <div 
      v-if="isTouchDevice"
      class="resize-handle" 
      @mousedown="startResize" 
      @touchstart="startResize"
    >
      <!-- 💡 ここに ref="handleIconRef" を追加して、querySelectorを撲滅 -->
      <span ref="handleIconRef" class="handle-icon">＝</span>
    </div>
  </div>
</template>