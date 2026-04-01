import { locations } from '../locations.js'; // El ../ es clave para salir de la carpeta styles

function renderLocations(items) {
    const container = document.querySelector("#locations-grid");
    if (!container) return; // Seguridad
    
    container.innerHTML = ""; 

    items.forEach(place => {
        const card = document.createElement("section");
        card.className = "location-card";
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            <h3>${place.name}</h3>
            <p><strong>City:</strong> ${place.city}</p>
            <p>${place.description}</p>
            <span class="rating">Rating: ${place.rating} ⭐</span>
        `;
        container.appendChild(card);
    });
}

function setupFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const type = btn.dataset.type;
            if (type === "all") {
                renderLocations(locations);
            } else {
                const filtered = locations.filter(loc => loc.type === type);
                renderLocations(filtered);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderLocations(locations);
    setupFilters();
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});