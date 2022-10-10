<template>
  <div class="app-container">
    <el-row>
      <el-col :span="6">
        <el-scrollbar height="calc(100vh - 76px)">
          <EditorSidebar />
        </el-scrollbar>
      </el-col>
      <el-col :span="18">
        <el-scrollbar class="main">
          <EditorView />
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { EditorSidebar, EditorView } from "./components/index";
</script>

<style lang="scss">
.app-container {
  .main {
    min-height: calc(100vh - 76px);
    padding: 40px;
    background-color: #edf0f0;
  }
}
</style>
