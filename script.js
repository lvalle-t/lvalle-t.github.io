function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });