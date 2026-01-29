// Select the burger menu element
const burger = document.querySelector('.humburger-menu');

// Select the menu element
const menu = document.querySelector('.menu');

// Select all menu link items
const menuLinks = menu.querySelectorAll('.menu-list__item');


// Add click event listener to the burger menu
burger.addEventListener('click', () => {
    menu.classList.add('menu-active');
});

// Add click event listener to each menu link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    });
});

// Optional: Add click event listener to close the menu when clicking outside
document.addEventListener('click', (event) => {
    if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
        menu.classList.remove('menu-active');
    }
});