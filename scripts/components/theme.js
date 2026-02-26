const html = document.documentElement;
let storedTheme = localStorage.getItem("theme");
const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

html.setAttribute("theme", storedTheme || preferedTheme);
document.addEventListener("DOMContentLoaded", load);

function load() {
    document.querySelectorAll('button[data-toggle-theme]').forEach((e) => {
        e.addEventListener("click", processEffect);
    })
}

function processEffect() {
    storedTheme = localStorage.getItem("theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", storedTheme);
    html.setAttribute("theme", storedTheme);
    html.setAttribute("theme-transition", "true");

    setTimeout(() => { html.removeAttribute("theme-transition") }, 500);
}