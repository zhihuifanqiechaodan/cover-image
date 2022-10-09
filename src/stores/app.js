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
        title: "How I built my first project with vue",
        fontSize: "40",
        color: "#031c24",
        fontFamily: "inherit",
        fontWeight: 500,
      },
      authorInfo: {
        title: "zhihuifanqiechaodan",
        fontSize: "20",
        color: "#031c24",
        fontFamily: "inherit",
        fontWeight: 500,
      },
      theme: "DefaultTheme",
      backgroundColor: "#ffffff",
      layoutWidth: 800,
      layoutWidthRatio: 2,
      layoutHeightRatio: 1,
      imageInfo: {
        fit: "none",
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        networkImageUrl: "",
      },
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
    // 数据变更
    changeSetting({ key, value }) {
      if (Object.prototype.hasOwnProperty.call(this, key)) {
        this[key] = value;
      }
    },
    // 变更插图详情
    changeImageInfo({ key, value }) {
      this.imageInfo[key] = value;
    },
  },
});
