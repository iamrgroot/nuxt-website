export default defineI18nConfig(() => ({
  locale: "en",
  numberFormats: {
    en: {
      distance: {
        style: "unit",
        unit: "kilometer",
        unitDisplay: "short",
        maximumFractionDigits: 0,
      },
    },
  },
}));
