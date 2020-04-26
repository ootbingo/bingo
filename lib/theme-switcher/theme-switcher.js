"use strict";

const button = document.querySelector("#theme-switcher");
const bingoPage = document.querySelector("#bingoPage");

const maybeSettings = localStorage.getItem('theme');
const settings = maybeSettings ? JSON.parse(maybeSettings) : {
    modern: false,
};

const updateHtml = () => {
    button.textContent = settings.modern ? "Classic Theme" : "Modern Theme";
    if (settings.modern) {
        bingoPage.classList.add("modern");
    } else {
        bingoPage.classList.remove("modern");
    }
};

const toggle = () => {
    settings.modern = !settings.modern;
    localStorage.setItem('theme', JSON.stringify(settings));
    updateHtml();
};

updateHtml();
button.addEventListener('click', toggle);
