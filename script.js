/* --- Gør alle billeder non-draggable --- */

// Vælger alle billeder
let billeder = document.querySelectorAll('img');

// Få ovenstående til at gå igen for alle img elementer og sæt draggable = false
billeder.forEach(function(img) {
    img.draggable = false;
});


//----------------SCENE 1-------------------

//array med scenens tilhørende tekst
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

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc1TxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt1");

    //stop funktionen hvis "txt1" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene1_1");
    const sc2 = document.querySelector(".scene1_2");
    const sc3 = document.querySelector(".scene1_3");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc1Txt[visTxt];
        visTxt++;

        //skift til scene1.2
        if (visTxt === 2) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
            sc3.style.display = "none";
        }

        //skift til scene1.3
        if (visTxt === 5) {
            sc1.style.display = "none";
            sc2.style.display = "none";
            sc3.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc1Txt.length) {
            clearInterval(interval);
        }

    }, 3000); //skift tekststykke hvert 3. sekund
}

//start funktionen ved page load
sc1TxtSkift();


//----------------SCENE 2-------------------

//array med scenens tilhørende tekst
const sc2Txt = [
    //scene2.1
    //"Når du har fundet ingredienserne,",
    "kommer de i kolben.",
    //scene2.2
    "Her er det, du skal finde:",
    "Gas - især brint og helium,",
    "Grundstoffer, såsom jern og kulstof",
    "Og en smule salt",
    //scene2.3
    "Kan du se ingredienserne?",
    "Prøv at trykke på dem, vi skal bruge.",
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc2TxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt2");

    //stop funktionen hvis "txt2" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene2_1");
    const sc2 = document.querySelector(".scene2_2");
    const sc3 = document.querySelector(".scene2_3");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc2Txt[visTxt];
        visTxt++;

        //skift til scene2.2
        if (visTxt === 2) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
            sc3.style.display = "none";
        }

        //skift til scene2.3
        if (visTxt === 6) {
            sc1.style.display = "none";
            sc2.style.display = "none";
            sc3.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc2Txt.length) {
            clearInterval(interval);
        }

    }, 2500); //skift tekststykke hvert 2,5. sekund
}

//start funktionen ved page load
sc2TxtSkift();

//----------------SCENE 3-------------------

//array med scenens tilhørende tekst
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
    "Stjernerne har forskellig størrelse,",
    "vægt og temperatur."
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc3TxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt3");

    //stop funktionen hvis "txt3" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc0 = document.querySelector(".scene2_4"); //afrunding på scene2
    const sc1 = document.querySelector(".scene3_1");
    const sc2 = document.querySelector(".scene3_2");
    const sc3 = document.querySelector(".scene3_3");
    const sc4 = document.querySelector(".scene3_4");
    const sc5 = document.querySelector(".scene3_5");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc3Txt[visTxt];
        visTxt++;

        //skift til scene3.1
        if (visTxt === 2) {
            sc0.style.display = "none";
            sc1.style.display = "grid";
            sc2.style.display = "none";
            sc3.style.display = "none";
            sc4.style.display = "none";
            sc5.style.display = "none";
        }

        //skift til scene3.2
        if (visTxt === 5) {
            sc0.style.display = "none";
            sc1.style.display = "none";
            sc2.style.display = "grid";
            sc3.style.display = "none";
            sc4.style.display = "none";
            sc5.style.display = "none";
        }

        //skift til scene3.3
        if (visTxt === 6) {
            sc0.style.display = "none";
            sc1.style.display = "none";
            sc2.style.display = "none";
            sc3.style.display = "grid";
            sc4.style.display = "none";
            sc5.style.display = "none";
        }

        //skift til scene3.4
        if (visTxt === 8) {
            sc0.style.display = "none";
            sc1.style.display = "none";
            sc2.style.display = "none";
            sc3.style.display = "none";
            sc4.style.display = "grid";
            sc5.style.display = "none";
        }

        //skift til scene3.5
        if (visTxt === 10) {
            sc0.style.display = "none";
            sc1.style.display = "none";
            sc2.style.display = "none";
            sc3.style.display = "none";
            sc4.style.display = "none";
            sc5.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc3Txt.length) {
            clearInterval(interval);
        }

    }, 3000); //skift tekststykke hvert 3. sekund
}

//start funktionen ved page load
sc3TxtSkift();

//----------------SCENE 4-------------------

//array med scenens tilhørende tekst
const sc4Txt = [
    //scene4.1
    //"Der kan nu ske to forskellige ting;",
    "Planetarisk tåge eller Supernova.", //tekst-alternativ: fremtiden for den varme røde stjerne eller fremtiden for den endnu varmere, blå stjerne...
    //scene4.2
    "Vælg den, du helst vil se." //tekst-alternativ: Vælg en stjerne, og se hvad der sker.
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc4TxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt4");

    //stop funktionen hvis "txt4" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene4_1");
    const sc2 = document.querySelector(".scene4_2");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc4Txt[visTxt];
        visTxt++;

        //skift til scene4.2
        if (visTxt === 2) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
        }

        if (visTxt >= sc4Txt.length) {
            clearInterval(interval);
        }

    }, 3000); //skift tekststykke hvert 3. sekund
}

//start funktionen ved page load
sc4TxtSkift();

//----------------SCENE 5A-------------------

//array med scenens tilhørende tekst
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

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc5aTxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt5a");

    //stop funktionen hvis "txt5a" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene5_1");
    const sc2 = document.querySelector(".scene5a_2");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc5aTxt[visTxt];
        visTxt++;

        //skift til scene5a.2
        if (visTxt === 2) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc5aTxt.length) {
            clearInterval(interval);
        }

    }, 2500); //skift tekststykke hvert 2,5. sekund
}

//start funktionen ved page load
sc5aTxtSkift();

//----------------SCENE 5B-------------------

//array med scenens tilhørende tekst
const sc5bTxt = [
    //scene5b.1
    //"Stjerneblandingen har bedst af at stå i",
    "1 til 30 millioner år mere.",
    //scene5b.2
    "Hov!",
    "En af de tungeste stjerner er blevet enorm!", 
    "Når det sker, kan de finde på at…",
    "…EKSPLODERE!",
    "Sådan en eksplosion kaldes en supernova,", 
    "og den kan efterlade et sort hul.", 
    "Pas på med at komme for tæt på,",
    "for sorte hullers tyngdekraft er så stærk,",
    "at de opsluger alt omkring sig - selv lys!"
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc5bTxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt5b");

    //stop funktionen hvis "txt5b" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene5_1");
    const sc2 = document.querySelector(".scene5b_2");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc5bTxt[visTxt];
        visTxt++;

        //skift til scene5b.2
        if (visTxt === 2) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc5bTxt.length) {
            clearInterval(interval);
        }

    }, 2500); //skift tekststykke hvert 2,5. sekund
}

//start funktionen ved page load
sc5bTxtSkift();

//----------------SCENE 6A-------------------

//array med scenens tilhørende tekst
const sc6aTxt = [
    //scene6a.1
    //"Nu ved vi en masse om stjerner!",
    //scene6a.2
    "Tryk på Supernova for at lære mere."
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc6aTxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt6a");

    //stop funktionen hvis "txt6a" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene6_1");
    const sc2 = document.querySelector(".scene6a_2");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc6aTxt[visTxt];
        visTxt++;

        //skift til scene6a.2
        if (visTxt === 1) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc6aTxt.length) {
            clearInterval(interval);
        }

    }, 2500); //skift tekststykke hvert 2,5. sekund
}

//start funktionen ved page load
sc6aTxtSkift();

//----------------SCENE 6B-------------------

//array med scenens tilhørende tekst
const sc6bTxt = [
    //scene6a.1
    //"Nu ved vi en masse om stjerner!",
    //scene6a.2
    "Tryk på Planetarisk tåge for at lære mere."
];

//funktion til at skifte teksten efter et antal sekunder samt tilhørende billede
function sc6bTxtSkift() {

    //vælg html-element hvor teksten skal vises
    const plads = document.getElementById("txt6b");

    //stop funktionen hvis "txt6b" ikke kan findes
    if (!plads) return;

    //find og definer scenens underscener
    const sc1 = document.querySelector(".scene6_1");
    const sc2 = document.querySelector(".scene6b_2");

    //sæt den viste tekst (skrevet i html) som udgangspunktet "0"
    let visTxt = 0;

    //angiv tidsintervallet, hvor teksten skifter - samt hvornår tekstens tilhørende billeder vises og skjules
    const interval = setInterval(() => {
        plads.textContent = sc6bTxt[visTxt];
        visTxt++;

        //skift til scene6b.2
        if (visTxt === 1) {
            sc1.style.display = "none";
            sc2.style.display = "grid";
        }

        //nulstil intervallet, når tekst-arrayets sidste element vises
        if (visTxt >= sc6bTxt.length) {
            clearInterval(interval);
        }

    }, 2500); //skift tekststykke hvert 2,5. sekund
}

//start funktionen ved page load
sc6bTxtSkift();