/* --- Gør alle billeder non-draggable --- */

// Vælger alle billeder
var billeder = document.querySelectorAll('img');

// Få ovenstpende til at gå igen for alle img elementer og sæt draggable = false
billeder.forEach(function(img) {
    img.draggable = false;
});


//SCENE 1 - tekst-array
const sc1Txt = [
    //scene1.1
    "Når vi kigger op på en skyfri nattehimmel,",
    "kan vi se et par tusinde stjerner.",
    //scene1.2
    "Men i virkeligheden findes der mange milliarder.",
    "De er lavet i enorme gaståger,",
    "og tager mange millioner år om at udvikle sig.",
    //scene1.3
    "Hjælp mig med at følge opskriften og se,",
    "hvordan stjerner bliver skabt og udvikler sig!"
];

//SCENE 2 - tekst-array
const sc2Txt = [
    //scene2.1
    "Når du har fundet ingredienserne,",
    "kommer de i kolben.",
    //scene2.2
    "Her er det, du skal finde:",
    "Gas - især brint og helium",
    "Grundstoffer, såsom jern og kulstof",
    "En smule salt",
    //scene2.3
    "Kan du se ingredienserne?",
    "Prøv at tryk på dem, vi skal bruge.",
    //scene2.4
    "Godt klaret!",
    "Du har fundet alle stjernernes ingredienser.",
];

//SCENE 3 - tekst-array
const sc3Txt = [
    //scene3.1
    "Blandingen skal over i en skål.",
    "Skålen er rigtig stor og har en diameter på...",
    "...28 millioner milliarder meter.",
    //scene3.2
    "Så skal vi røre det hele godt sammen.",
    //scene3.3
    "Blandingen har brug for at stå et koldt sted.",
    "Helst så koldt som muligt. -263℃ er helt perfekt!",
    //scene3.4
    "Nu lader vi stjerne-blandingen hvile i ",
    "mellem 100.000 og 10 millioner år.",
    //scene3.5
    "Så er stjernerne klar",
    "og vi har nu en åben stjernehob!",
    "Stjerne har forskellig størrelse, vægt ",
    "og temperatur."
];

//SCENE 4 - tekst-array
const sc4Txt = [
    //scene4.1
    "Der kan nu ske to forskellige ting;",
    "Planetarisk tåge eller Supernova.", //tekst-alternativ: fremtiden for den varme røde stjerne eller fremtiden for den endnu varmere, blå stjerne...
    //scene4.2
    "Vælg den, du helst vil se." //tekst-alternativ: Vælg en stjerne, og se hvad der sker.
];

//SCENE 5A - tekst-array
const sc5aTxt = [
    //scene5a.1
    "Stjerneblandingen har bedst af at stå i",
    "nogle milliarder år mere.",
    //scene5a.2
    "Til sidst vil de små, lette stjerner også begynde",
    "at udvikle sig.",
    "De skyder deres overflade væk,",
    "så der til sidst kun er deres kerner tilbage.",
    "Det er nu en Hvid Dværg."
];

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