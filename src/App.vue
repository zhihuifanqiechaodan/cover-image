<template>
  <Header />
  <div class="main-wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  padding-top: 76px;
  height: calc(100vh - 76px);
}
</style>
