<template>
  <div class="app-container">
    <EditorHeader />
    <el-row class="main-wrapper">
      <el-col :span="6"> <EditorSidebar /> </el-col>
      <el-col :span="18" class="main">
        <EditorView />
        <el-button>下载</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { EditorHeader, EditorSidebar, EditorView } from "./components/index";
</script>

<style lang="scss">
.app-container {
  .main-wrapper {
    height: calc(100vh - 50px);
    .main {
      padding: 40px;
      background-color: #edf0f0;
    }
  }
}
</style>
