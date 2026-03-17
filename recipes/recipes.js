import recipes from './recipes.mjs'; // Asegúrate de que el array de recetas esté en este archivo

const recipeContainer = document.querySelector('#recipe-container');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

// Función para obtener un número aleatorio
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Generar el HTML de los tags
function tagsTemplate(tags) {
    return tags.map(tag => `<span>${tag}</span>`).join("");
}

// Generar el HTML del rating (estrellas)
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

// Plantilla principal de la receta
function recipeTemplate(recipe) {
    return `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <div class="tags">${tagsTemplate(recipe.tags)}</div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </article>
    `;
}

// Renderizar las recetas en la página
function renderRecipes(recipeList) {
    recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");
}

// Lógica de búsqueda y filtrado
function searchHandler(e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });

    // Ordenar alfabéticamente por nombre
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    renderRecipes(sorted);
}

// Inicialización
function init() {
    // Al cargar, mostrar una receta aleatoria
    const randomRecipe = recipes[getRandomNumber(recipes.length)];
    renderRecipes([randomRecipe]);
}

searchForm.addEventListener('submit', searchHandler);
init();