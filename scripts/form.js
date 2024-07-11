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

const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        'avg-rating': 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        'avg-rating': 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        'avg-rating': 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        'avg-rating': 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        'avg-rating': 5.0
    }
];

function incrementReviewCounter() {
    
    if (typeof(Storage) !== "undefined") {
        var count = localStorage.getItem("reviewCount");
        if (!count) {
            count = 0;
        } else {
            count = parseInt(count); 
        }
    
        count++;
        localStorage.setItem("reviewCount", count);
    } else {
        console.log("localStorage is not supported by this browser.");
    }
}

window.onload = function() {
    incrementReviewCounter();
};
