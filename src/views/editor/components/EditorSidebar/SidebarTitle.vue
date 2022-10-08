<template>
  <div class="editor-title">
    <div class="title">标题</div>
    <el-input
      v-model="title"
      :rows="2"
      type="textarea"
      placeholder="Please input"
    />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();

const title = computed({
  get: () => appStore.titleInfo.title,
  set: (value) => {},
});
console.log(appStore);
</script>

<style lang="scss"></style>
