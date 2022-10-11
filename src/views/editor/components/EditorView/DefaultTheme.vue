<template>
  <div class="default-theme">
    <div class="left">
      <ViewTitle />
      <div class="icon-author-wrapper">
        <ViewIcon :size="appStore.authorInfo.fontSize + 'px'" />
        <ViewAuthor />
      </div>
    </div>
    <div class="right">
      <ViewImage />
    </div>
  </div>
</template>

<script setup>
import { ViewTitle, ViewAuthor, ViewImage, ViewIcon } from "./index";
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();
</script>

<style lang="scss">
.default-theme {
  display: flex;
  align-items: center;
  padding: 20px;

  .left,
  .right {
    flex: 0 0 50%;
  }

  .left {
    padding: 0 40px;
    .icon-author-wrapper {
      display: flex;
      margin-top: 40px;
    }
  }
}
</style>
