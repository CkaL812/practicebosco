// src/layout.js

export function renderHeader(activePage) {
  return `
    <nav class="bg-blue-600 text-white p-4">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">Vite + Tailwind</h1>
        <div class="flex gap-4">
          <a href="index.html"
             class="hover:underline ${activePage === 'home' ? 'font-bold underline' : ''}">
             Головна
          </a>
          <a href="about.html"
             class="hover:underline ${activePage === 'about' ? 'font-bold underline' : ''}">
             Про нас
          </a>
        </div>
      </div>
    </nav>
  `;
}

export function renderFooter() {
  return `
    <footer class="bg-gray-800 text-white text-center p-6 mt-auto">
      <p>© 2025 Навчальний проєкт</p>
    </footer>
  `;
}
