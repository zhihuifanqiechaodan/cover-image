<template>
  <div class="author-wrapper">
    <div class="title">主题设置</div>
    <div class="edit-item">
      <div class="edit-label">主题</div>
      <el-select v-model="theme" class="edit-value">
        <el-option
          v-for="item in appStore.themeList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();

const theme = computed({
  get: () => appStore.theme,
  set: (value) => {
    appStore.changeSetting({ key: "theme", value });
  },
});
</script>

<style lang="scss">
.author-wrapper {
  .title {
    font-size: 18px;
    font-weight: 500;
  }
  .edit-item {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .edit-value {
      flex: 1;
      display: flex;
      margin-left: 20px;
    }
  }
}
</style>
