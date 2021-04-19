import { atom } from "recoil";

export const loadingProgressState = atom<number>({
  key: "loadingProgress",
  default: 0,
});

export const showLoadingScreenState = atom<boolean>({
  key: "showLoadingScreen",
  default: true,
});
