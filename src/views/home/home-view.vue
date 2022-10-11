<template>
  <div class="app-container">
    <div class="home-wrapper">
      <div class="banner">
        <h1 class="title">Cover Image</h1>
        <p>基于 Vue 3，快速为你的博客创建封面图片</p>
      </div>
      <div class="jumbotron">
        <span class="iconfont icon-linux"></span>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="title">封面图比你想象的更重要!</div>
          <div class="introduce-wrapper">
            <div class="introduce-item">
              <div class="wenzhang-wrapper">
                <svgIcon name="wenzhang" size="64px" color="#ffffff" />
              </div>
              <div class="introduce">
                每天发布大约700万篇博客文章。随着新时代博客工具的兴起，它会上升的更多。
              </div>
            </div>
            <div class="introduce-item">
              <div class="tisheng-wrapper">
                <svgIcon name="tisheng" size="64px" color="#ffffff" />
              </div>
              <div class="introduce">
                与随机库存图片相比，好的封面图片可以带来更高的转化率。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <h2>简单、快速且易于使用</h2>
        <p>您可以专注于写博客文章，而不必担心博客封面去哪里寻找。</p>
        <RouterLink to="/editor">
          <el-button type="primary">免费！立即尝试</el-button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: center;
  background-color: #f9fafb;
  padding-top: 55px;
  .home-wrapper {
    padding: 40px;

    .banner {
      text-align: center;
      .title {
        font-size: 34px;
        line-height: 48px;
      }

      > p {
        color: #606266;
        font-size: 18px;
      }
    }

    .content {
      margin-top: 100px;
      .content-item {
        .title {
          font-size: 32px;
          font-weight: 500;
        }

        .introduce-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .introduce-item {
            display: flex;
            align-items: center;
            padding: 40px;

            .wenzhang-wrapper,
            .tisheng-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 96px;
              height: 96px;
              border-radius: 50%;
            }
            .wenzhang-wrapper {
              background-color: #d8b4fe;
            }

            .tisheng-wrapper {
              background-color: #87eeab;
            }

            .introduce {
              flex: 1;
              margin-left: 20px;
              font-size: 24px;
              font-weight: 500;
            }
          }
        }
      }
    }

    .footer {
      h2 {
        font-size: 32px;
      }

      p {
        padding: 20px 0;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
}
</style>
