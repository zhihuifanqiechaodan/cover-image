<template>
  <div class="header-wrapper">
    <div class="left">
      <router-link to="/">
        <div class="logo-wrapper">
          <SvgIcon name="logo" size="40px" color="#347DFE" />
          <div class="logo-title">CoverImage</div>
          <div class="logo-tips">cover-image,免费快速生成封面图</div>
        </div>
      </router-link>
    </div>
    <div class="right">
      <div class="right-item">
        <RouterLink to="/faq">
          <SvgIcon name="help" size="12px" color="#347DFE" />
          <span>如何使用</span>
        </RouterLink>
      </div>
      <div class="right-item">
        <a
          href="https://github.com/zhihuifanqiechaodan/cover-image"
          target="_blank"
        >
          <SvgIcon name="start" size="12px" />
          <span>在Github上点赞</span>
        </a>
      </div>
      <div class="right-item">
        <RouterLink v-if="route.path !== '/editor'" to="/editor">
          <el-button type="primary">前往编辑</el-button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss">
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 210;
  padding: 10px 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(178 191 233 / 20%);

  .left {
    .logo-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      .logo-title {
        padding-left: 10px;
        font-size: 18px;
        font-weight: bold;
      }

      .logo-tips {
        position: absolute;
        bottom: -10px;
        left: 50px;
        font-size: 12px;
        white-space: nowrap;
        color: #888;
      }
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;

    .right-item {
      display: flex;
      align-items: center;
      margin-left: 20px;
      &:hover {
        font-weight: bold;
      }

      .svg-icon {
        margin-right: 5px;
      }
    }
  }
}
</style>
