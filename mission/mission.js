const themeSelector = document.querySelector('#theme-selector');
const body = document.querySelector('body');
const logo = document.querySelector('img');

function changeTheme() {
    // (light or dark)
    const currentTheme = themeSelector.value;

    if (currentTheme === 'dark') {
        
        body.classList.add('dark');
        // change logo
        logo.setAttribute('src', 'byui-logo_white.png'); 
    } else {
        
        body.classList.remove('dark');
        // change logo 
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');
    }
}

themeSelector.addEventListener('change', changeTheme);