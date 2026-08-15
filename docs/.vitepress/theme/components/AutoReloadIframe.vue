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

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // 画面内に入った
        showIframe.value = true
      } else {
        // 画面外に出た
        if(showIframe.value == true){
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

onUnmounted(() => {
  observer?.disconnect()
})
</script>



<template>
  <div loading="lazy"
    ref="containerRef"
  >
    <iframe :src=src class="responsive-iframe" ref="iframeRef"></iframe>
  </div>
</template>

<style scoped>
.responsive-iframe {
  width: 100%;
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