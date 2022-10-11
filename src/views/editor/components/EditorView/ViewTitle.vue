<template>
  <div :style="titleStyleObject" class="view-title">
    {{ appStore.titleInfo.title }}
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();
const titleStyleObject = computed(() => {
  return {
    color: appStore.titleInfo.color,
    fontSize: appStore.titleInfo.fontSize + "px",
    fontFamily: appStore.titleInfo.fontFamily,
    fontWeight: appStore.titleInfo.fontWeight,
  };
});
</script>

<style lang="scss"></style>
