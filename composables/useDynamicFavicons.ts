import { useFavicon } from "@vueuse/core";

export const useDynamicFavicons = () => {
  const iconMap = {
    0: "noto:waving-hand",
    10: "noto:grinning-face-with-smiling-eyes",
    300: "noto:thinking-face",
    900: "noto:pile-of-poo",
  };

  for (const [time, favicon] of Object.entries(iconMap)) {
    setTimeout(() => {
      useFavicon(`/favicons/${favicon}.svg`);
    }, Number(time) * 1000);
  }
};
