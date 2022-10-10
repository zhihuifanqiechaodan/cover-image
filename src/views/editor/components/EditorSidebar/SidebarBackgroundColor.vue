<template>
  <div class="background-color-wrapper">
    <div class="title">背景设置</div>
    <div class="edit-item">
      <div class="edit-label">颜色</div>
      <div class="edit-value">
        <el-color-picker
          @active-change="handleColorActiveChange"
          v-model="backgroundColor"
        />
      </div>
    </div>
    <div class="edit-item">
      <div class="edit-label">宽比</div>
      <div class="edit-value">
        <el-input-number
          v-model="layoutWidthRatio"
          :min="1"
          controls-position="right"
        />
      </div>
    </div>
    <el-divider> {{ layoutWidthRatio }} / {{ layoutHeightRatio }} </el-divider>
    <div class="edit-item">
      <div class="edit-label">高比</div>
      <div class="edit-value">
        <el-input-number
          v-model="layoutHeightRatio"
          :min="1"
          controls-position="right"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();
const backgroundColor = computed({
  get: () => appStore.backgroundColor,
  set: (value) => {
    appStore.changeSetting({ key: "backgroundColor", value });
  },
});
const handleColorActiveChange = (value) => {
  appStore.changeSetting({ key: "backgroundColor", value });
};

const layoutWidthRatio = computed({
  get: () => appStore.layoutWidthRatio,
  set: (value) => {
    appStore.changeSetting({
      key: "layoutWidthRatio",
      value: value ? value : 1,
    });
  },
});

const layoutHeightRatio = computed({
  get: () => appStore.layoutHeightRatio,
  set: (value) => {
    appStore.changeSetting({
      key: "layoutHeightRatio",
      value: value ? value : 1,
    });
  },
});
</script>

<style lang="scss">
.background-color-wrapper {
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

      .el-input-number {
        flex: 1;
      }
    }
  }
}
</style>
