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
        // 画面内に入った
        showIframe.value = true
      } else {
        // 画面外に出た
        if(showIframe.value == true){
          // ロード済の場合、再ロードする
          iframeRef.value.src = `${src}?timestamp=${new Date().getTime()}`
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
    <iframe :src=src style="width:100%;height:500px;" ref="iframeRef"></iframe>
  </div>
</template>