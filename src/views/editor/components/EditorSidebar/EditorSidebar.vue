<template>
  <div class="editor-sidebar">
    <SidebarBackgroundColor />
    <el-divider />
    <SidebarTitle />
    <el-divider />
    <SiderbarAuthor />
    <el-divider />
    <SidebarImage />
    <el-divider />
  </div>
</template>

<script setup>
import {
  SidebarTitle,
  SiderbarAuthor,
  SidebarBackgroundColor,
  SidebarImage,
} from "./index";
</script>

<style lang="scss">
.editor-sidebar {
  padding: 20px;
}
</style>
