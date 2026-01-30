const timerBlock = document.querySelector('.timer__time');
const deadline = '28 february 2026';

let interval;

const updateClock = () => {
    // Get current date and time
    // const date = new Date();


    // For debugging: log the current timestamp
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    // Calculate hours, minutes, seconds remaining
    const hours = Math.floor(timeRemaining / 60 / 60);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);
   
    const fHours = hours < 10 ? `0` + hours : hours;
    const fMinutes = minutes < 10 ? `0` + minutes : minutes;
    const fSeconds = seconds < 10 ? `0` + seconds : seconds;

    // Display time in the format "HH : MM : SS"
    timerBlock.textContent = `${fHours} : ${fMinutes} : ${fSeconds}`;

    if (timeRemaining <= 0) {
        clearInterval(interval);
        timerBlock.textContent = `00 : 00 : 00`;
    }
}

updateClock();
// Update the clock every second
interval = setInterval(updateClock, 500);