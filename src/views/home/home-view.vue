<template>
  <div class="app-container">
    <div class="home-wrapper">
      <div class="banner">
        <h1 class="title">Cover Image</h1>
        <p>基于 Vue 3，快速为你的博客创建封面图片</p>
      </div>
      <div class="jumbotron">
        <div class="introduce-image-wrapper">
          <el-image
            src="https://oss.fabrique.cn/f5ec3ba1-b646-4b5c-ba0f-66ce748d8f7b.jpg"
          />
        </div>
        <div class="introduce-image-wrapper">
          <el-image
            src="https://oss.fabrique.cn/8d2f84b3-6bda-4ec0-8811-52ed230b1a10.jpg"
          />
        </div>
      </div>
      <div class="content">
        <div class="content-item">
          <h2 class="title">封面图比你想象的更重要!</h2>
          <div class="introduce-wrapper">
            <div class="introduce-item">
              <div class="wenzhang-wrapper">
                <svgIcon name="wenzhang" size="24px" color="#ffffff" />
              </div>
              <div class="introduce">
                每天发布大约700万篇博客文章。随着新时代博客工具的兴起，它会上升的更多。
              </div>
            </div>
            <div class="introduce-item">
              <div class="tisheng-wrapper">
                <svgIcon name="tisheng" size="24px" color="#ffffff" />
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

    .jumbotron {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 80vw;
      margin: 0 auto;
      margin-top: 55px;

      .introduce-image-wrapper {
        padding: 20px;
        margin-right: 20px;
        border-radius: 10px;
        box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
          0px 8px 20px rgba(0, 0, 0, 0.08);
        &:last-child {
          margin-right: 0;
        }
      }
    }

    .content {
      margin-top: 55px;
      text-align: center;
      .content-item {
        .title {
          font-size: 34px;
        }

        .introduce-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 220px;

          .introduce-item {
            display: flex;
            align-items: center;
            padding: 40px;

            .wenzhang-wrapper,
            .tisheng-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 48px;
              height: 48px;
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
              font-weight: 500;
            }
          }
        }
      }
    }

    .footer {
      margin: 55px 0;
      text-align: center;
      h2 {
        font-size: 34px;
      }

      p {
        padding: 20px 0;
        font-weight: 500;
      }
    }
  }
}
</style>
