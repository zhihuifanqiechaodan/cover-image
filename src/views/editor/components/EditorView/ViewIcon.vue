<template>
  <div class="view-icon">
    <span
      class="iconfont"
      :class="[appStore.icon]"
      :style="{ fontSize: props.size }"
    ></span>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();

const props = defineProps(["size"]);
</script>
