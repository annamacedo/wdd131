document.addEventListener('DOMContentLoaded', () => {
    const temp = 25;
    const windSpeed = 15;

    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
        } else {
            return 'N/A';
        }
    }

    document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed);

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
