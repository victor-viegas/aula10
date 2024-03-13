const menuButton1 = document.getElementById('menu-button-1');
const menuButton2 = document.getElementById('menu-button-2');


function toggleMenu(event) {
    const menu = document.getElementById('container-nav');
    menu.classList.toggle('active');
}

menuButton1.addEventListener('click', toggleMenu);
menuButton2.addEventListener('click', toggleMenu);

const $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dragVelocity: 5,
    duration: 5,
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            },
        },
    ],
});