// 1. Definición del Objeto Character
const character = {
    name: "Eldrin the Mage",
    class: "Wizard",
    level: 1,
    health: 100,
    image: "https://byui-cit.github.io/learning-modules/modules/wdd131/javascript-object/images/character.png",

    // Método para recibir daño
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died!`);
            }
        }
    },

    // Método para subir de nivel
    levelUp: function() {
        this.level += 1;
    }
};

// 2. Función para actualizar el DOM (la pantalla)
function updateUI() {
    document.getElementById("charName").textContent = character.name;
    document.getElementById("charClass").textContent = character.class;
    document.getElementById("charLevel").textContent = character.level;
    document.getElementById("charHealth").textContent = character.health;
    document.getElementById("charImage").src = character.image;
}

// 3. Event Listeners para los botones
document.getElementById("btnAttack").addEventListener("click", () => {
    character.attacked();
    updateUI();
});

document.getElementById("btnLevel").addEventListener("click", () => {
    character.levelUp();
    updateUI();
});

// Inicializar la tarjeta al cargar
updateUI();