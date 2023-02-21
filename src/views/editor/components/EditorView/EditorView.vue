<template>
  <div class="download">
    <el-button @click="handleDownload" type="primary">下载</el-button>
  </div>
  <div
    ref="refEditorView"
    :style="appStore.themeStyleObject"
    class="editor-view"
  >
    <component :is="theme" class="theme-wrapper" />
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed, reactive, toRefs } from "vue";
import themeEnum from "./index";
import useDomToImage from "@/hooks/useDomTouseImage.js";

const domToImage = useDomToImage();

const state = reactive({
  refEditorView: null,
});

const { refEditorView } = toRefs(state);

const appStore = useAppStore();
const theme = computed(() => themeEnum[appStore.theme]);

const handleDownload = () => {
  domToImage.domToImageDownload(refEditorView.value);
};
</script>

<style lang="scss" scoped>
.download {
  margin-top: 40px;
}
.theme-wrapper {
  width: 100%;
  height: 100%;
}
</style>
