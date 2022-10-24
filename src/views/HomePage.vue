<script setup lang="ts">
import pcElectricChart from '@/data/pc_electric_chart.json'

const iframeRef = ref()
const onLoad = () => {
  const viewer = iframeRef.value.contentWindow
  viewer.init('LE35kztLLmyzanlcCAta')
  viewer.setScene({
    sdkDebug: true,
    sceneId: 'IVQWDA9QTykXW5GbKDDe'
  })
  viewer.focus()
  // contentViewer.value = getViewer(viewer)
  // window.addEventListener('message', handleViewerMessage, false)
  // for wsad 功能
  window.addEventListener('keydown', e => {
    viewer.focus()
    // 傳送到 3d viewer
    viewer.dispatchEvent(new KeyboardEvent('keydown', { key: e.key }))
  })
}

const isOpen = ref<boolean>(true)
const isClose = () => {
  isOpen.value = !isOpen.value
}

const lottieRef = ref()
onUnmounted(() => {
  if (!isOpen) {
    lottieRef.value.destroy()
  }
})

</script>

<template>
  <div
    class="p-[12px] absolute z-[2] left-1/2 -translate-x-1/2 bottom-[30px] bg-white md:w-[480px] md:h-[270px] lg:w-[640px] lg:h-[360px] aspect-video"
  >
    <button
      class="bg-blue-400 px-3 py-2 rounded-full"
      @click="isClose"
    >
      關閉
    </button>
    <div
      v-if="isOpen"
      class="flex justify-center items-center"
    >
      <Vue3Lottie
        ref="lottieRef"
        class="w-[183px] h-[127px]"
        :animation-data="pcElectricChart"
        style="margin: 0;"
      />
    </div>
  </div>
  <img
    id="img"
    src="logo.png"
    alt=""
  >
  <iframe
    id="iframe"
    ref="iframeRef"
    class="block fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[1]"
    frameBorder="0"
    src="3dviewer/index.html"
    @load="onLoad"
  />
</template>
