//funktion til klik på ingredienserne

function fundetIngrediens() {

    //variabel til antal fundne ingredienser
    let antalFundet = 0;

    //find og definer ingredienserne
    const grundstof = document.getElementById("knap_grundstof");
    const gas = document.getElementById("knap_gas");
    const salt = document.getElementById("knap_salt");
    
    //tilføj eventlisteners til klik og tilhørende effekt + display none, så man kan trykke på elementerne i tilfældig rækkefølge
    grundstof.addEventListener("click", function() {
        grundstof.style.transform = "scale(4) translate(60%, -100%)";
        grundstof.style.opacity = "0";
        setTimeout(() => {
            grundstof.style.display = "none";
        }, 1500);
        antalFundet++;
        alleIngredienserFundet();
    });
    
    gas.addEventListener("click", function() {
        gas.style.transform = "scale(4) translate(0, -20%)";
        gas.style.opacity = "0";
        setTimeout(() => {
            gas.style.display = "none";
        }, 1500);
        antalFundet++;
        alleIngredienserFundet();
    });
    
    salt.addEventListener("click", function() {
        salt.style.transform = "scale(6) translate(-70%, -20%)";
        salt.style.opacity = "0";
        setTimeout(() => {
            salt.style.display = "none";
        }, 1500);
        antalFundet++;
        alleIngredienserFundet();
    });

    function alleIngredienserFundet() {
        if (antalFundet === 3) {
            setTimeout(() => {
                window.location.href = "scene3.html";
            }, 1600);
        }
    }
}

//kald funktionen
fundetIngrediens();