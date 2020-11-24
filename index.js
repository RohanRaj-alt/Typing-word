var name = prompt("Enter your name:");
alert("Do you want to start");

const startingmiute = 15;
let time = startingmiute*60;

const coundownEl = document.getElementById('countdown');

setInterval(updateCountdown,1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 15 ? '0'+ seconds : seconds;

    coundownEl.innerHTML = `${name}, you have  "${minutes}:${seconds}" time left.`;
    time--;
}