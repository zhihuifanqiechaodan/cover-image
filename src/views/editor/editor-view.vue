<template>
  <div class="app-container">
    <EditorHeader />
    <el-row class="main-wrapper">
      <el-col :span="6">
        <el-scrollbar height="calc(100vh - 50px)">
          <EditorSidebar />
        </el-scrollbar>
      </el-col>
      <el-col :span="18">
        <el-scrollbar height="calc(100vh - 50px)">
          <div class="main">
            <EditorView />
          </div>
        </el-scrollbar>
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
