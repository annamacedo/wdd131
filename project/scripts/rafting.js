document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    const authorSpan = document.getElementById('author');
    const locationSpan = document.getElementById('location');
    const lastModifiedSpan = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearSpan.textContent = currentYear;
    authorSpan.textContent = '🌍 Anna Paula Macedo da Rosa 🌍';
    locationSpan.textContent = 'Rio Grande do Sul, Brazil';
    lastModifiedSpan.textContent = lastModified;
});