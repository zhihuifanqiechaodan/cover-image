import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      fontFamilyOptions: [
        "'Inter'",
        "auto",
        "cursive",
        "emoji",
        "fangsong",
        "fantasy",
        "inherit",
        "initial",
        "math",
        "monospace",
        "none",
        "revert",
        "sans-serif",
        "serif",
        "system-ui",
        "ui-monospace",
        "ui-rounded",
        "ui-sans-serif",
        "ui-serif",
        "unset",
        "-webkit-body",
      ],
      fontWeightOptions: [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        "bold",
        "bolder",
        "inherit",
        "initial",
        "lighter",
        "normal",
        "revert",
        "unset",
      ],
      titleInfo: {
        title: "如何使用Vue构建我的第一个项目",
        fontSize: "36",
        color: "#031c24",
        fontFamily: "inherit",
        fontWeight: 500,
      },
      authorInfo: {
        title: "只会番茄炒蛋",
        fontSize: "20",
        color: "#031c24",
        fontFamily: "inherit",
        fontWeight: 500,
      },
      backgroundColor: "#ffffff",
      layoutWidth: 800,
      layoutWidthRatio: 2,
      layoutHeightRatio: 1,
      imageInfo: {
        fit: "none",
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        networkImageUrl: "",
      },
      theme: "ModernTheme",
      themeList: [
        {
          label: "默认",
          value: "DefaultTheme",
        },
        {
          label: "现代",
          value: "ModernTheme",
        },
      ],
    };
  },
  getters: {
    themeStyleObject() {
      return {
        width: this.layoutWidth + "px",
        height:
          (this.layoutWidth / this.layoutWidthRatio) * this.layoutHeightRatio +
          "px",
        backgroundColor: this.backgroundColor,
      };
    },
  },
  actions: {
    // 变更标题详情
    changeTitleInfo({ key, value }) {
      this.titleInfo[key] = value;
    },
    // 变更作者详情
    changeAuthorInfo({ key, value }) {
      this.authorInfo[key] = value;
    },
    // 变更插图详情
    changeImageInfo({ key, value }) {
      this.imageInfo[key] = value;
    },
    // 数据变更
    changeSetting({ key, value }) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        this[key] = value;
      }
    },
  },
});
