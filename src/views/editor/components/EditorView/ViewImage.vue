<template>
  <div class="view-image">
    <el-image :src="imageSrc" :fit="appStore.imageInfo.fit" />
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
</script>

<style lang="scss">
.view-image {
  font-size: 0;
}
</style>
