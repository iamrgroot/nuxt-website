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
  messages: {
    en: {
      buttons: {
        submit: "Submit",
        reset: "Reset",
        back: "Back",
      },
      spotify: {
        clientId: "Spotify Client ID",
        currentToken: "Current token",
      },
    },
  },
}));
