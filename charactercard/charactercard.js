
const character = {
    name: "Eldrin the Mage",
    class: "Wizard",
    level: 1,
    health: 100,
    image: "snortleblat.webp",

    
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20;
            if (this.health <= 0) {
                this.health = 0;
                alert(`${this.name} has died!`);
            }
        }
    },

    
    levelUp: function() {
        this.level += 1;
    }
};


function updateUI() {
    document.getElementById("charName").textContent = character.name;
    document.getElementById("charClass").textContent = character.class;
    document.getElementById("charLevel").textContent = character.level;
    document.getElementById("charHealth").textContent = character.health;
    document.getElementById("charImage").src = character.image;
}


document.getElementById("btnAttack").addEventListener("click", () => {
    character.attacked();
    updateUI();
});

document.getElementById("btnLevel").addEventListener("click", () => {
    character.levelUp();
    updateUI();
});


updateUI();