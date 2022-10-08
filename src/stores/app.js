import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      titleInfo: {
        title: "How I built my first project with vue",
        fontSize: "14",
        color: "#031c24",
        fontFamily: "inherit",
      },
    };
  },
  actions: {},
});
