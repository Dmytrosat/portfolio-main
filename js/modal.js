// Select all buttons with class "more"
const moreButtons = document.querySelectorAll('.more');

// Select the modal itself
const modal = document.querySelector('.modal');

// Select the overlay inside the modal
const overlay = modal.querySelector('.overlay');

// Select the close button inside the modal
const closeButton = modal.querySelector('.modal__close');

// Add click event listener to all "more" buttons
moreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        modal.classList.remove('hidden');
    });
});

// Add click event listener to the overlay to close the modal
overlay.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Add click event listener to the close button to close the modal
closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal when Escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
    }
});