<template>
  <div class="view-image">
    <el-image
      style="width: 100%; height: 100%"
      :src="imageSrc"
      :fit="appStore.imageInfo.fit"
    />
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

<style lang="scss"></style>
