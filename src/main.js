// src/main.js
import "./style.css";
import { renderHeader } from "./header";
import { renderFooter } from "./footer";

// формуємо відсутні елементи сторінки (header + footer)
const headerContainer = document.getElementById("header");
const footerContainer = document.getElementById("footer");

if (headerContainer) {
  headerContainer.innerHTML = renderHeader("home"); // активна "Головна"
}

if (footerContainer) {
  footerContainer.innerHTML = renderFooter();
}

// Лічильник — твій код
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});
