<template>
  <div class="view-image">
    <div class="background">
      <el-image :src="imageSrc" :fit="appStore.imageInfo.fit" />
    </div>

    <div v-if="watermarkingUrl" class="watermarking">
      <el-image :src="watermarkingUrl" :fit="appStore.imageInfo.fit" />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";
const appStore = useAppStore();

const imageSrc = computed(() => {
  if (/^(https?:|mailto:|tel:)/.test(appStore.imageInfo.networkImageUrl)) {
    return appStore.imageInfo.networkImageUrl;
  }
  return appStore.imageInfo.src;
});
const watermarkingUrl = computed(() => appStore.imageInfo.watermarkingUrl);
</script>

<style lang="scss">
.view-image {
  position: relative;
  font-size: 0;
  background-color: #fff;

  .el-image {
    width: 100%;
    background-color: #fff;
  }

  .background {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 200px;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .watermarking {
    // position: absolute;
    // left: 0;
    // top: 0;
    // width: 100%;
    // height: 100%;
    text-align: center;
  }
}
</style>
