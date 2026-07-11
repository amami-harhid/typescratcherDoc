<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { src } = defineProps({
  src: String
})

const containerRef = ref(null)
const iframeRef = ref(null)
const showIframe = ref(true)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // 画面内に入ったら iframe を再生成
        showIframe.value = true
        iframeRef.value.src = `${src}?timestamp=${new Date().getTime()}`
      } else {
        // 画面外に出たら iframe を破棄
        showIframe.value = false
      }
    },
    {
      threshold: 0
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
    <iframe :src=src style="width:100%;height:500px;" ref="iframeRef"></iframe>
  </div>
</template>