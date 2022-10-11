<template>
  <div class="author-wrapper">
    <div class="title">
      <span>图标设置</span>
      <span class="iconfont" :class="[icon]"></span>
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
            <span class="iconfont" :class="[item]"></span>
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

    .iconfont {
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

  .iconfont {
    font-size: 24px;
  }
}
</style>
