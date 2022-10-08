<template>
  <div class="default-theme" :style="appStore.themeStyleObject">
    <ViewTitle />
    <ViewAuthor />
  </div>
</template>

<script setup>
import { ViewTitle, ViewAuthor } from "./index";
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();
</script>

<style lang="scss">
.default-theme {
  padding: 20px;
}
</style>
