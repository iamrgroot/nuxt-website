import { useFavicon } from "@vueuse/core";
import { emojiToSvg } from "../utils/svgEmoji";

export const useDynamicFavicons = () => {
  const iconMap = {
    0: "👋",
    10: "😄",
    300: "🤔",
    900: "💩",
  };

  for (const [time, favicon] of Object.entries(iconMap)) {
    setTimeout(() => {
      useFavicon(emojiToSvg(favicon));
    }, Number(time) * 1000);
  }
};
