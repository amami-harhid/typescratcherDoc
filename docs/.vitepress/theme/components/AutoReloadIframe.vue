<template>
  <div class="iframe-container">
    <iframe 
      :src="src" 
      class="responsive-iframe"
      :class="{ 'allow-tablet-square': (isTouchDevice && expandVertical && !virticalPad), 'allow-tablet-vpad': isTouchDevice && virticalPad }"
      border="0"
    ></iframe>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  // パラメータ(A): 縦方向拡大を許可するフラグ
  expandVertical: {
    type: Boolean,
    default: false
  },
  virticalPad: {
    type: Boolean,
    default: false
  }
})

const isTouchDevice = ref(false)
onMounted(() => {
  // 💡 デバイスの判定や、判定に伴うデータの書き換えは「すべて onMounted の中」で行います
  isTouchDevice.value = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches
})
</script>

<style scoped>
.iframe-container {
  width: 100%;
}

.responsive-iframe {
  width: 100%;
  border: none;
  
  /* デフォルトはすべて 16:9 */
  aspect-ratio: 16 / 12;
}

/* 
  タブレット端末の画面幅（768px〜1024px）
  かつ、expandVertical が true の場合（クラスが付与されている時）のみ適用
*/
@media (min-width: 360px) and (max-width: 767px) {
  .responsive-iframe.allow-tablet-square {
    aspect-ratio: 0.65;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .responsive-iframe.allow-tablet-square {
    aspect-ratio: 0.85;
  }
}

</style>