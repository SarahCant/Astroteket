//Nedtælling i scene6
let countdown = 30;

function updateCountdown() {
    document.getElementById("countdown").innerText = countdown;
    
    //når nedtælling er lig 0 skiftes der til startsiden
    if (countdown === 0) {
        clearInterval(timer);
        window.location.href = "index.html";
    } else {
        //countdown går ned med én
        countdown--;
    }
}

//variabel, der kører funktionen hvert sekund
let timer = setInterval(updateCountdown, 1000);