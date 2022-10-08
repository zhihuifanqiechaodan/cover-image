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
    };
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
  },
});
