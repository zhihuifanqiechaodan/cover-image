<template>
  <div class="app-container">
    <EditorHeader />
    <el-row class="main-wrapper">
      <el-col :span="6"> <EditorSidebar /> </el-col>
      <el-col :span="18"><EditorView /></el-col>
    </el-row>
  </div>
</template>

<script setup>
import { EditorHeader, EditorSidebar, EditorView } from "./components/index";
</script>

<style lang="scss"></style>
