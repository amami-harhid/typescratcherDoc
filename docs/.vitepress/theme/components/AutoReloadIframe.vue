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
  }
})

const containerRef = ref(null)
const iframeRef = ref(null)
const showIframe = ref(true)

// 現在のiframeの高さを管理する変数（初期値はpropsから取得）
const currentHeight = ref(props.height)

let observer
let startY = 0
let startHeight = 0

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // 画面内に入った
        showIframe.value = true
      } else {
        // 画面外に出た
        if(showIframe.value == true && iframeRef.value){
          // ロード済の場合、再ロードする
          iframeRef.value.src = `${props.src}?timestamp=${new Date().getTime()}`
        }
        showIframe.value = false
      }
    },
    {
      threshold: 0  // 完全に隠れたときに発動
    }
  )

  observer.observe(containerRef.value)
})

// --- ここからリサイズ処理 ---
const startResize = (event) => {
  // マウスとタッチ両方の座標に対応
  startY = event.touches ? event.touches.clientY : event.clientY
  startHeight = currentHeight.value

  // ドラッグ中にiframe内にイベントが吸い込まれるのを防ぐ
  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'none'

  // グローバルイベントの登録
  window.addEventListener('mousemove', onResizing)
  window.addEventListener('mouseup', stopResize)
  window.addEventListener('touchmove', onResizing, { passive: false })
  window.addEventListener('touchend', stopResize)
}
const onResizing = (event) => {
  const currentY = event.touches ? event.touches.clientY : event.clientY
  const deltaY = currentY - startY
  
  // 新しい高さを計算(最小500px〜最大1000pxに制限。環境に合わせて変更してください)
  const newHeight = startHeight + deltaY
  currentHeight.value = Math.max(500, Math.min(1000, newHeight))
}
const stopResize = () => {
  if (iframeRef.value) iframeRef.value.style.pointerEvents = 'auto'

  window.removeEventListener('mousemove', onResizing)
  window.removeEventListener('mouseup', stopResize)
  window.removeEventListener('touchmove', onResizing)
  window.removeEventListener('touchend', stopResize)
}
// --- ここまでリサイズ処理 ---

onUnmounted(() => {
  observer?.disconnect()
  stopResize() // 念のためクリーンアップを実行
})
</script>

<template>
  <div loading="lazy"
    ref="containerRef"
    class="iframe-container"
  >
    <!-- style属性で動的に高さをバインド -->
    <iframe 
      :src=src 
      class="responsive-iframe" 
      :style="{ height: currentHeight + 'px' }"
      ref="iframeRef">
    </iframe>

    <!-- 高さ調整用のハンドルバー -->
    <div 
      class="resize-handle" 
      @mousedown="startResize" 
      @touchstart="startResize"
    >
      <span class="handle-icon">＝</span>
    </div>
  </div>
</template>

<style scoped>
/* 全体のコンテナ構造 */
.iframe-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
}
.responsive-iframe {
  width: 100%;
  border: none;
}
/* つまみ（ハンドル）のスタイリング */
.resize-handle {
  width: 100%;
  height: 32px; /* スマホでタップしやすい高さ */
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ns-resize; /* 上下矢印のカーソル */
  user-select: none;
  touch-action: none; /* スマホでの画面スクロール（ブレ）を防止 */
  border: 1px solid #ddd;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.handle-icon {
  color: #888;
  font-size: 14px;
  font-weight: bold;
}

/* 1. 基本（タッチパネル・スマホ・タブレットなど）の高さ */
@media (pointer: coarse) {
  .responsive-iframe {
    height: v-bind("props.height + 'px'"); /* タッチパネル時の希望の高さ */
  }
}

/* 2. それ以外（マウス操作のPCなど）の高さ */
@media (pointer: fine) {
  .responsive-iframe {
    height: 500px; /* PCなどマウス操作時の高さ */
  }
}

/* 3. 万が一どちらも検知できない環境用のフォールバック */
@media (pointer: none) {
  .responsive-iframe {
    height: 500px;
  }
}
</style>