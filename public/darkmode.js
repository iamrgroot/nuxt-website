const colorScheme =
  localStorage.getItem("vueuse-color-scheme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

document.documentElement.setAttribute("theme", colorScheme);

if (colorScheme === "dark") {
  document.documentElement.classList.add("dark");
}
