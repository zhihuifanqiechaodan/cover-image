<template>
  <div class="editor-sidebar">
    <SidebarTitle />
    <el-divider />
    <SiderbarAuthor />
    <el-divider />
  </div>
</template>

<script setup>
import { SidebarTitle, SiderbarAuthor } from "./index";
</script>

<style lang="scss">
.editor-sidebar {
  padding: 20px;
}
</style>
