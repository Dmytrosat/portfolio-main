// Select the modal button
const modalButton = document.querySelector('.more');

// Select the modal itself
const modal = document.querySelector('.modal');

// Select the overlay inside the modal
const overlay = modal.querySelector('.overlay');

// Select the close button inside the modal
const closeButton = modal.querySelector('.modal__close');

// Add click event listener to the modal button
modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Add click event listener to the overlay to close the modal
overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Add click event listener to the close button to close the modal
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});