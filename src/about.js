// src/about.js
import "./style.css";
import { renderHeader, renderFooter } from "./layout";

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.getElementById("header");
  const footerEl = document.getElementById("footer");

  if (headerEl) headerEl.innerHTML = renderHeader("about"); // активна "Про нас"
  if (footerEl) footerEl.innerHTML = renderFooter();
});
