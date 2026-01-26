
function updateTimer() {
    // Target date: Sept 15th, 2026
    const targetDate = new Date("September 15, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const timerElement = document.getElementById("timer");

    if (distance < 0) {
        timerElement.innerHTML = "<h2>SYSTEMS ONLINE - EVENT STARTED</h2>";
        return;
    }

    // Calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id="days", etc.
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Update the count down by 1 second
setInterval(updateTimer, 1000);

updateTimer();
