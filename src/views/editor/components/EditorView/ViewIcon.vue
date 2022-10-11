<template>
  <div class="view-icon">
    <SvgIcon :name="appStore.icon" :size="props.size" />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();

const props = defineProps(["size"]);
</script>
