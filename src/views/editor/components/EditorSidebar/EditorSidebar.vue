<template>
  <div class="editor-sidebar">
    <SidebarTheme />
    <el-divider />
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
  SidebarTheme,
} from "./index";
</script>

<style lang="scss">
.editor-sidebar {
  padding: 20px;
}
</style>
