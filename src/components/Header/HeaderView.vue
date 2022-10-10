<template>
  <div class="header-wrapper">
    <router-link to="/">
      <div class="logo-wrapper">
        <SvgIcon name="logo" size="40px" color="#347DFE" />
        <div class="logo-title">CoverImage</div>
        <div class="logo-tips">cover-image,免费快速生成封面图</div>
      </div>
    </router-link>
  </div>
</template>

<script setup></script>

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
  height: 76px;
  background: #fff;
  box-shadow: 0 2px 6px rgb(178 191 233 / 20%);

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
</style>
