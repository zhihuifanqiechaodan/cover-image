<template>
  <div class="title-wrapper">
    <div class="title">插图设置</div>
    <div class="edit-item">
      <div class="edit-label">模式</div>
      <el-select v-model="fit" class="edit-value">
        <el-option
          v-for="item in fitOptions"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
    <div class="edit-item">
      <div class="edit-label">自定义图片</div>
      <el-upload
        ref="refUpload"
        action="#"
        :on-change="handleChange"
        :on-exceed="handleExceed"
        :limit="1"
        :auto-upload="false"
        list-type="picture"
        class="edit-value"
      >
        <template #trigger>
          <el-button type="primary">选择图片</el-button>
        </template>
        <template #file="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        </template>
      </el-upload>
    </div>
    <div class="edit-item">
      <div class="edit-label">水印图片</div>
      <el-upload
        ref="refUpload"
        action="#"
        :on-change="handleWatermarkingChange"
        :on-exceed="handleWatermarkingExceed"
        :limit="1"
        :auto-upload="false"
        list-type="picture"
        class="edit-value"
      >
        <template #trigger>
          <el-button type="primary">选择图片</el-button>
        </template>
        <template #file="{ file }">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        </template>
      </el-upload>
    </div>
    <div class="edit-item">
      <div class="edit-label">网络图片</div>
      <el-input
        v-model="networkImageUrl"
        placeholder="Please input"
        class="edit-value"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed, reactive, toRefs } from "vue";
import { genFileId } from "element-plus";
const appStore = useAppStore();

const state = reactive({
  fitOptions: ["fill", "contain", "cover", "none", "scale-down"],
  refUpload: null,
});

const { fitOptions, refUpload } = toRefs(state);

const fit = computed({
  get: () => appStore.imageInfo.fit,
  set: (value) => appStore.changeImageInfo({ key: "fit", value }),
});

const networkImageUrl = computed({
  get: () => appStore.imageInfo.networkImageUrl,
  set: (value) => {
    appStore.changeImageInfo({ key: "networkImageUrl", value });
  },
});

const handleChange = (uploadFile) => {
  appStore.changeImageInfo({ key: "src", value: uploadFile.url });
};
const handleWatermarkingChange = (uploadFile) => {
  appStore.changeImageInfo({ key: "watermarkingUrl", value: uploadFile.url });
};

const handleExceed = (files) => {
  refUpload.value.clearFiles();
  const file = files[0];
  file.uid = genFileId();
  refUpload.value.handleStart(file);
};
const handleWatermarkingExceed = (files) => {
  refUpload.value.clearFiles();
  const file = files[0];
  file.uid = genFileId();
  refUpload.value.handleStart(file);
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
