// src/header.js
export function renderHeader(activePage) {
  const homeClass = `hover:underline ${activePage === "home" ? "font-bold" : ""}`;
  const aboutClass = `hover:underline ${activePage === "about" ? "font-bold" : ""}`;

  return `
    <nav class="bg-blue-600 text-white p-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Vite + Tailwind v4</h1>
        <div class="flex gap-4">
          <a href="index.html" class="${homeClass}">Головна</a>
          <a href="about.html" class="${aboutClass}">Про нас</a>
        </div>
      </div>
    </nav>
  `;
}
