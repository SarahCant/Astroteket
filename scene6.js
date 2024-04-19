//Nedtælling i scene6
let countdown = 30;

function updateCountdown() {
    document.getElementById("countdown").innerText = countdown;
    
    if (countdown === 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    } else {
        countdown--;
    }
}

let timer = setInterval(updateCountdown, 1000);