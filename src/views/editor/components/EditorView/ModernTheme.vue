<template>
  <div class="modern-theme">
    <div class="left">
      <div class="view-icon-wrapper">
        <ViewIcon size="72px" />
      </div>
    </div>
    <div class="right-wrapper">
      <div class="right">
        <ViewTitle />
        <ViewAuthor />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ViewTitle, ViewAuthor, ViewIcon } from "./index";
</script>

<style lang="scss">
.modern-theme {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    flex: 0 0 35%;

    .view-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 128px;
      height: 128px;
      margin: 0 auto;
      border-radius: 50%;
      background-color: #ffffff;
    }
  }

  .right {
    flex: 0 0 65%;
  }

  .right-wrapper {
    height: 100%;
    padding: 20px;
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding: 40px;
      background-color: #ffffff;
      border-radius: 20px;
      box-sizing: border-box;

      .view-author {
        padding-top: 20px;
      }
    }
  }
}
</style>
