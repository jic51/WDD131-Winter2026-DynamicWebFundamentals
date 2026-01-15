// Seleccionamos los elementos necesarios
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

// Escuchamos el evento 'change'
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    // Obtenemos el valor actual del selector (light o dark)
    let current = selectElem.value;

    if (current == 'dark') {
        // Añadimos la clase 'dark' al cuerpo del documento
        document.body.classList.add('dark');
        
        // Cambiamos el logo por la versión blanca (asegúrate de que el nombre del archivo sea correcto)
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png'); 
    } else {
        // Quitamos la clase 'dark' para volver al modo claro
        document.body.classList.remove('dark');
        
        // Restauramos el logo original
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
    }
}