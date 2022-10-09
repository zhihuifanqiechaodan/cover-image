<template>
  <div class="title-wrapper">
    <div class="title">标题设置</div>
    <div class="edit-item">
      <div class="edit-label">标题</div>
      <el-input
        v-model="title"
        :rows="2"
        type="textarea"
        placeholder="Please input"
        :autosize="{
          minRows: 2,
          maxRows: 6,
        }"
        class="edit-value"
      />
    </div>
    <div class="edit-item">
      <div class="edit-label">字体</div>
      <el-select v-model="fontFamily" class="edit-value">
        <el-option
          v-for="item in appStore.fontFamilyOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div class="edit-item">
      <div class="edit-label">字号</div>
      <el-input
        v-model="fontSize"
        type="number"
        :min="12"
        :step="1"
        class="edit-value"
      >
        <template #append>px</template>
      </el-input>
    </div>
    <div class="edit-item">
      <div class="edit-label">粗细</div>
      <el-select v-model="fontWeight" class="edit-value">
        <el-option
          v-for="item in appStore.fontWeightOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div class="edit-item">
      <div class="edit-label">颜色</div>
      <div class="edit-value">
        <el-color-picker
          @active-change="handleColorActiveChange"
          v-model="color"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();
const title = computed({
  get: () => appStore.titleInfo.title,
  set: (value) => {
    appStore.changeTitleInfo({ key: "title", value });
  },
});
const fontSize = computed({
  get: () => appStore.titleInfo.fontSize,
  set: (value) => {
    appStore.changeTitleInfo({ key: "fontSize", value });
  },
});
const color = computed({
  get: () => appStore.titleInfo.color,
  set: (value) => {
    appStore.changeTitleInfo({ key: "color", value });
  },
});
const fontFamily = computed({
  get: () => appStore.titleInfo.fontFamily,
  set: (value) => {
    appStore.changeTitleInfo({ key: "fontFamily", value });
  },
});
const fontWeight = computed({
  get: () => appStore.titleInfo.fontWeight,
  set: (value) => {
    appStore.changeTitleInfo({ key: "fontWeight", value });
  },
});

const handleColorActiveChange = (value) => {
  appStore.changeTitleInfo({ key: "color", value });
};
</script>

<style lang="scss">
.title-wrapper {
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
