const menuButton1 = document.getElementById('menu-button-1');
const menuButton2 = document.getElementById('menu-button-2');


function toggleMenu(event) {
    const menu = document.getElementById('container-nav');
    menu.classList.toggle('active');
}

menuButton1.addEventListener('click', toggleMenu);
menuButton2.addEventListener('click', toggleMenu);