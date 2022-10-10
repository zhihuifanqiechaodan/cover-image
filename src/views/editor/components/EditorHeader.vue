<template>
  <div class="editor-header">
    <div class="left">
      <RouterLink to="/">
        <div class="title">coverImage</div>
      </RouterLink>
    </div>
    <div class="right">
      <div class="right-item">如何使用</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid #dcdfe6;
  box-sizing: border-box;
  font-weight: 500;

  .left {
    .title {
      font-size: 24px;
    }
  }
}
</style>
