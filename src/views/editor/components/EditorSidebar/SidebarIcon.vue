<template>
  <div class="author-wrapper">
    <div class="title">
      <span>图标设置</span>
      <SvgIcon :name="icon" size="24px" />
    </div>
    <div class="edit-item">
      <div class="edit-label">图标</div>
      <el-select v-model="icon" filterable class="edit-value">
        <el-option
          v-for="item in appStore.iconList"
          :key="item"
          :label="item"
          :value="item"
        >
          <div class="custom-icon-wrapper">
            <span>{{ item }}</span>
            <SvgIcon :name="item" size="24px" />
          </div>
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/stores/app.js";
import { computed } from "vue";

const appStore = useAppStore();

const icon = computed({
  get: () => appStore.icon,
  set: (value) => {
    appStore.changeSetting({ key: "icon", value });
  },
});
</script>

<style lang="scss">
.author-wrapper {
  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;

    .svg-icon {
      margin-left: 5px;
    }
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

.custom-icon-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
