<template>
  <div :style="titleStyleObject" class="view-author">
    {{ appStore.authorInfo.title }}
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();
const titleStyleObject = computed(() => {
  return {
    color: appStore.authorInfo.color,
    fontSize: appStore.authorInfo.fontSize + "px",
    fontFamily: appStore.authorInfo.fontFamily,
    fontWeight: appStore.authorInfo.fontWeight,
  };
});
</script>
