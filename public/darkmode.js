const localStorageColorScheme = localStorage.getItem("vueuse-color-scheme");
const windowColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const colorScheme =
  !localStorageColorScheme || localStorageColorScheme === "auto"
    ? windowColorScheme
    : localStorageColorScheme;

document.documentElement.setAttribute("theme", colorScheme);

if (colorScheme === "dark") {
  document.documentElement.classList.add("dark");
}
