// Datos de ejemplo basados en el video
const hikes = [
    {
        name: "Bechler Falls",
        stub: "bechler_falls",
        description: "A beautiful hike to a series of waterfalls in Yellowstone.",
        tags: ["Falls", "Yellowstone", "Beautiful"],
        difficulty: 1
    },
    {
        name: "Henry's Lake",
        stub: "henrys_lake",
        description: "An easy walk around the scenic Henry's Lake.",
        tags: ["Lake", "Easy", "Fishing"],
        difficulty: 2
    },
    {
        name: "Dunanda Falls",
        stub: "dunanda_falls",
        description: "Backcountry hike leading to a massive waterfall and hot springs.",
        tags: ["Falls", "Backcountry", "Hot Springs"],
        difficulty: 4
    }
    // ... otros datos del objeto hikes
];

// 1. Target de elementos del DOM
const hikeContainer = document.querySelector("#hike-container");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#search");

// 2. Funciones de Template (Manejo de estrellas/botas y etiquetas)
function tagTemplate(tags) {
    return tags.map(tag => `<button class="tag">${tag}</button>`).join("");
}

function difficultyTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Difficulty: ${rating} out of 5">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-boot">🥾</span>`; // Bota llena
        } else {
            html += `<span aria-hidden="true" class="icon-boot-empty">👣</span>`; // Bota vacía
        }
    }
    html += `</span>`;
    return html;
}

function hikeTemplate(hike) {
    return `
        <section class="hike-card">
            <img src="images/${hike.stub}.jpg" alt="${hike.name}">
            <div class="hike-info">
                <h2>${hike.name}</h2>
                <div class="tags">${tagTemplate(hike.tags)}</div>
                ${difficultyTemplate(hike.difficulty)}
                <p>${hike.description}</p>
            </div>
        </section>
    `;
}

// 3. Función para renderizar en el HTML
function renderHikes(hikeList) {
    hikeContainer.innerHTML = ""; // Limpiar antes de mostrar resultados
    const htmlStrings = hikeList.map(hike => hikeTemplate(hike));
    hikeContainer.innerHTML = htmlStrings.join("");
}

// 4. Lógica de búsqueda, filtrado y ordenación
function compareHikes(a, b) {
    // Ordenar de menor a mayor dificultad
    return a.difficulty - b.difficulty;
}

function searchHandler() {
    const query = searchInput.value.toLowerCase();
    
    // Filtrar por nombre, descripción o etiquetas (Polimorfismo en acción)
    const filteredHikes = hikes.filter(hike => {
        return (
            hike.name.toLowerCase().includes(query) ||
            hike.description.toLowerCase().includes(query) ||
            hike.tags.find(tag => tag.toLowerCase().includes(query))
        );
    });

    // Ordenar los resultados filtrados
    const sortedHikes = filteredHikes.sort(compareHikes);

    renderHikes(sortedHikes);
}

// 5. Inicialización
function init() {
    // Mostrar una caminata aleatoria al cargar, tal como indica el video
    const randomNum = Math.floor(Math.random() * hikes.length);
    renderHikes([hikes[randomNum]]);
}

// Event Listeners
searchButton.addEventListener("click", searchHandler);

// Ejecutar inicio
init();