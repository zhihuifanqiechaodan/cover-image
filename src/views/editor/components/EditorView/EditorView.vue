<template>
  <div class="editor-view">
    <component :is="theme" />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";
import themeEnum from "./index";

const appStore = useAppStore();
const theme = computed(() => themeEnum[appStore.theme]);
</script>
