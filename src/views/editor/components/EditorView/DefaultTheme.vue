<template>
  <div class="default-theme">
    <div class="left">
      <ViewTitle class="view-title" />
      <ViewAuthor />
    </div>
    <div class="right">
      <ViewImage />
    </div>
  </div>
</template>

<script setup>
import { ViewTitle, ViewAuthor, ViewImage } from "./index";
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
    padding: 40px;
    .view-title {
      margin-top: 40px;
    }
  }
}
</style>
