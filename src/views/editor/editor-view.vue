<template>
  <div class="app-container">
    <EditorHeader />
    <div class="main-wrapper">
      <EditorSidebar />
      <EditorView />
    </div>
  </div>
</template>

<script setup>
import { EditorHeader, EditorSidebar, EditorView } from "./components/index";
</script>

<style lang="scss"></style>
