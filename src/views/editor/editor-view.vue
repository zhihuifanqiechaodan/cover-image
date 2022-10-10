<template>
  <div class="app-container">
    <Header />
    <el-row class="main-wrapper">
      <el-col :span="6">
        <el-scrollbar height="calc(100vh - 76px)">
          <EditorSidebar />
        </el-scrollbar>
      </el-col>
      <el-col :span="18">
        <el-scrollbar height="calc(100vh - 76px)">
          <div class="main">
            <EditorView />
          </div>
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
  .main-wrapper {
    padding-top: 76px;
    height: calc(100vh - 76px);
    .main {
      padding: 40px;
      background-color: #edf0f0;
    }
  }
}
</style>
