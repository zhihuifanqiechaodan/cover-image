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
      <div class="edit-label">宽度</div>
      <el-input
        v-model="layoutWidth"
        placeholder="Please input"
        class="edit-value"
      >
        <template #append>px</template>
      </el-input>
    </div>
    <div class="edit-item">
      <div class="edit-label">高度</div>
      <el-input
        v-model="layoutHeight"
        placeholder="Please input"
        class="edit-value"
      >
        <template #append>px</template>
      </el-input>
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
  appStore.changeBackgroundColor({ value });
};

const layoutWidth = computed({
  get: () => appStore.layoutWidth,
  set: (value) => {
    appStore.changeSetting({ key: "layoutWidth", value });
  },
});

const layoutHeight = computed({
  get: () => appStore.layoutHeight,
  set: (value) => {
    appStore.changeSetting({ key: "layoutHeight", value });
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
      margin-left: 20px;
    }
  }
}
</style>
