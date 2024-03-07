const menuButton = document.getElementById("menu-button");
function toggleMenu(event) {
    const menu = document.getElementsByClassName("container-nav");
    menu.idList.toggle('active');
    const active = menu.idList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

menuButton.addEventListener('click', toggleMenu);