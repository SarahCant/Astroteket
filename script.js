/* --- Gør alle billeder non-draggable --- */

// Vælger alle billeder
var billeder = document.querySelectorAll('img');

// Få ovenstpende til at gå igen for alle img elementer og sæt draggable = false
billeder.forEach(function(img) {
    img.draggable = false;
});


//SCENE 1
const sc1Txt = [
    //scene1.1
    //"Når vi kigger op på en skyfri nattehimmel,",
    "kan vi se et par tusinde stjerner.",
    //scene1.2
    "Men i virkeligheden findes der mange milliarder.",
    "De er lavet i enorme gaståger,",
    "og tager mange millioner år om at udvikle sig.",
    //scene1.3
    "Hjælp mig med at følge opskriften og se,",
    "hvordan stjerner bliver skabt og udvikler sig!"
];

const sc11 = document.querySelector(".scene1_1");
const sc12 = document.querySelector(".scene1_2");
const sc13 = document.querySelector(".scene1_3");

function sc1TxtSkift() {
    const plads = document.getElementById("txt1");
    let visTxt = 0;

    const interval = setInterval(() => {
        plads.textContent = sc1Txt[visTxt];
        visTxt++;

        if (visTxt === 2) {
            sc11.style.display = "none";
            sc12.style.display = "grid";
            sc13.style.display = "none";
        }

        if (visTxt === 5) {
            sc11.style.display = "none";
            sc12.style.display = "none";
            sc13.style.display = "grid";
        }

        if (visTxt >= sc1Txt.length) {
            clearInterval(interval);
        }

    }, 3000);
}

sc1TxtSkift();

//SCENE 2
const sc2Txt = [
    //scene2.1
    //"Når du har fundet ingredienserne,",
    "kommer de i kolben.",
    //scene2.2
    "Her er det, du skal finde:",
    "Gas - især brint og helium",
    "Grundstoffer, såsom jern og kulstof",
    "En smule salt",
    //scene2.3
    "Kan du se ingredienserne?",
    "Prøv at tryk på dem, vi skal bruge.",
];

const sc21 = document.querySelector(".scene2_1");
const sc22 = document.querySelector(".scene2_2");
const sc23 = document.querySelector(".scene2_3");

function sc2TxtSkift() {
    const plads = document.getElementById("txt2");
    let visTxt = 0;

    const interval = setInterval(() => {
        plads.textContent = sc2Txt[visTxt];
        visTxt++;

        if (visTxt === 2) {
            sc21.style.display = "none";
            sc22.style.display = "grid";
            sc23.style.display = "none";
        }

        if (visTxt === 6) {
            sc21.style.display = "none";
            sc22.style.display = "none";
            sc23.style.display = "grid";
        }

        if (visTxt >= sc2Txt.length) {
            clearInterval(interval);
        }

    }, 2500);
}

sc2TxtSkift();


//SCENE 3
const sc3Txt = [
    //scene2.4
    //"Godt klaret!",
    "Du har fundet alle stjernernes ingredienser.",
    //scene3.1
    "Blandingen skal over i en skål.",
    "Skålen er rigtig stor og har en diameter på",
    "28 millioner milliarder meter.",
    //scene3.2
    "Så skal vi røre det hele godt sammen.",
    //scene3.3
    "Blandingen har brug for at stå et koldt sted.",
    "Helst så koldt som muligt. -263℃ er helt perfekt!",
    //scene3.4
    "Nu lader vi stjerne-blandingen hvile",
    "imellem 100.000 og 10 millioner år.",
    //scene3.5
    "Så er stjernerne klar",
    "og vi har nu en åben stjernehob!",
    "Stjerne har forskellig størrelse, vægt ",
    "og temperatur."
];

const sc24 = document.querySelector(".scene2_4");
const sc31 = document.querySelector(".scene3_1");
const sc32 = document.querySelector(".scene3_2");
const sc33 = document.querySelector(".scene3_3");
const sc34 = document.querySelector(".scene3_4");
const sc35 = document.querySelector(".scene3_5");

function sc3TxtSkift() {
    const plads = document.getElementById("txt3");
    let visTxt = 0;

    const interval = setInterval(() => {
        plads.textContent = sc3Txt[visTxt];
        visTxt++;

        if (visTxt === 2) {
            sc24.style.display = "none";
            sc31.style.display = "grid";
            sc32.style.display = "none";
            sc33.style.display = "none";
            sc34.style.display = "none";
            sc35.style.display = "none";
        }

        if (visTxt === 5) {
            sc24.style.display = "none";
            sc31.style.display = "none";
            sc32.style.display = "grid";
            sc33.style.display = "none";
            sc34.style.display = "none";
            sc35.style.display = "none";
        }

        if (visTxt === 6) {
            sc24.style.display = "none";
            sc31.style.display = "none";
            sc32.style.display = "none";
            sc33.style.display = "grid";
            sc34.style.display = "none";
            sc35.style.display = "none";
        }

        if (visTxt === 8) {
            sc24.style.display = "none";
            sc31.style.display = "none";
            sc32.style.display = "none";
            sc33.style.display = "none";
            sc34.style.display = "grid";
            sc35.style.display = "none";
        }

        if (visTxt === 10) {
            sc24.style.display = "none";
            sc31.style.display = "none";
            sc32.style.display = "none";
            sc33.style.display = "none";
            sc34.style.display = "none";
            sc35.style.display = "grid";
        }

        if (visTxt >= sc3Txt.length) {
            clearInterval(interval);
        }

    }, 3000);
}

sc3TxtSkift();

//SCENE 4
const sc4Txt = [
    //scene4.1
    //"Der kan nu ske to forskellige ting;",
    "Planetarisk tåge eller Supernova.", //tekst-alternativ: fremtiden for den varme røde stjerne eller fremtiden for den endnu varmere, blå stjerne...
    //scene4.2
    "Vælg den, du helst vil se." //tekst-alternativ: Vælg en stjerne, og se hvad der sker.
];

const sc41 = document.querySelector(".scene4_1");
const sc42 = document.querySelector(".scene4_2");

function sc4TxtSkift() {
    const plads = document.getElementById("txt4");
    let visTxt = 0;

    const interval = setInterval(() => {
        plads.textContent = sc4Txt[visTxt];
        visTxt++;

        if (visTxt === 2) {
            sc41.style.display = "none";
            sc42.style.display = "grid";
        }

        if (visTxt >= sc4Txt.length) {
            clearInterval(interval);
        }

    }, 3000);
}

sc4TxtSkift();

//SCENE 5A - tekst-array
const sc5aTxt = [
    //scene5a.1
    //"Stjerneblandingen har bedst af at stå i",
    "nogle milliarder år mere.",
    //scene5a.2
    "Til sidst vil de små, lette stjerner også begynde",
    "at udvikle sig.",
    "De skyder deres overflade væk,",
    "så der til sidst kun er deres kerner tilbage.",
    "Det er nu en Hvid Dværg."
];

const sc51 = document.querySelector(".scene5_1");
const sc5a2 = document.querySelector(".scene5a_2");

function sc4TxtSkift() {
    const plads = document.getElementById("txt4");
    let visTxt = 0;

    const interval = setInterval(() => {
        plads.textContent = sc4Txt[visTxt];
        visTxt++;

        if (visTxt === 2) {
            sc41.style.display = "none";
            sc42.style.display = "grid";
        }

        if (visTxt >= sc4Txt.length) {
            clearInterval(interval);
        }

    }, 3000);
}

sc4TxtSkift();

//SCENE 5B - tekst-array
const sc5bTxt = [
    //scene5b.1
    "Stjerneblandingen har bedst af at stå i",
    "1 til 30 millioner år mere.",
    //scene5b.2
    "Hov!",
    "En af de tungeste stjerner er blevet enorm!", 
    "Når det sker, kan de finde på at…",
    "…EKSPLODERE!",
    "Sådan en eksplosion kaldes en supernova,", 
    "og den kan efterlade et sort hul.", 
    "Pas på med at komme for tæt på, for",
    "se sorte hullers tyngdekraft er så stærk, at",
    "de opsluger alt omkring til sig - selv lys!"
];

// document.getElementById("txt5b").innerHTML = sc5bTxt;