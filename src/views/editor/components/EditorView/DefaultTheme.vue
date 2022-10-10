<template>
  <div class="default-theme">
    <div class="left">
      <ViewTitle />
      <ViewAuthor class="view-author" />
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
    padding: 0 40px;
    .view-author {
      margin-top: 40px;
    }
  }
}
</style>
