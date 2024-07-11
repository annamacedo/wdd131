document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu'); 
    const navigation = document.querySelector('.navigation'); 

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open'); 
        hamButton.classList.toggle('open'); 
    });

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

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Porto Alegre Brazil",
            location: "Porto Alegre, Rio Grande do Sul, Brazil",
            dedicated: "2000, December, 17",
            area: 10500,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/4e35ef2858432da81d11185b5e6dece42f7b1105/full/320%2C/0/default?download=true"
        },
        {
            templeName: "Curitiba Brazil",
            location: "Curitiba, Paraná, Brazil",
            dedicated: "2008, June, 1",
            area: 6907,
            imageUrl: "https://churchofjesuschrist.org/imgs/a7c8bd60cd537dc422fe17f0e269651b3c9a4091/full/320%2C/0/default?download=true"
        },
        {
            templeName: "Campinas Brazil",
            location: "Campinas, São Paulo, Brazil",
            dedicated: "2002, May, 17",
            area: 13924,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/8540649d4237393e9b6ae327ab4aac3992f62bd9/full/320%2C/0/default?download=true"
        }
    ];

    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        const name = document.createElement('h3');
        name.textContent = temple.templeName;

        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;

        const dedication = document.createElement('p');
        dedication.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);

        return card;
    }

    function displayTemples(filteredTemples) {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = createTempleCard(temple);
            gallery.appendChild(card);
        });
    }

    function filterTemples(filter) {
        let filteredTemples = temples;
        switch(filter) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'home':
            default:
                filteredTemples = temples;
                break;
        }
        displayTemples(filteredTemples);
    }

    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            filterTemples(filter);
        });
    });

    // Initial display
    filterTemples('home');
});
