// Select the accordeon container
const accordeon = document.querySelector('.feature-list');

// Select all accordeon buttons
const accordeonButtons = accordeon.querySelectorAll('.feature__link');

// Add click event listener to each accordeon button
accordeonButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        accordeonButtons.forEach((button) => {
            button.classList.remove('feature__link_active');
            button.nextElementSibling.classList.add('hidden');
        });

        btn.classList.toggle('feature__link_active');
        btn.nextElementSibling.classList.toggle('hidden');
    })
});