let korisnikPobjede = 0;
let računaloPobjede = 0;
let neriješeno = 0;

//funkcija vraća odabir računala
function getComputerChoice() {
    const choices = ["kamen", "škare", "papir"];
    const randomBroj = Math.floor(Math.random() * 3);
    return choices[randomBroj];
}

//funkcija koja prima korisnikov odabir
function getHumanChoice() {
    let korisnikUnos = prompt("Upišite želite li: Kamen, Škare ili Papir");
    korisnikUnos = korisnikUnos.toLowerCase();

    if (korisnikUnos === "kamen" || korisnikUnos === "škare" || korisnikUnos === "papir") {
        return korisnikUnos;
    } else {
        return getHumanChoice();
    }
}

//funkcija koja izvrsava igru
function playRound(unosRačunala, korisnikovUnos) {
    let rezultat;
    if (unosRačunala === korisnikovUnos) {
        neriješeno++;
        rezultat = "Neriješeno";
    } else if ((unosRačunala === "škare" && korisnikovUnos === "papir") ||
               (unosRačunala === "papir" && korisnikovUnos === "kamen") ||
               (unosRačunala === "kamen" && korisnikovUnos === "škare")) {
        računaloPobjede++;
        rezultat = "Računalo pobjeđuje";
    } else {
        korisnikPobjede++;
        rezultat = "Korisnik pobjeđuje";
    }
    console.log(`Računalo: ${unosRačunala} vs. Korisnik: ${korisnikovUnos} - ${rezultat}`);
}

//petlja koja vrti sve 5x
for (let i = 0; i < 5; i++) {
    let unosRačunala = getComputerChoice();
    let korisnikovUnos = getHumanChoice();
    playRound(unosRačunala, korisnikovUnos);
}

console.log(`Korisnik ima ${korisnikPobjede} pobjeda, Računalo ima ${računaloPobjede} pobjeda, Neriješeno je ${neriješeno} puta`);

if (korisnikPobjede > računaloPobjede) {
    console.log("Korisnik je ukupni pobjednik!");
} else if (računaloPobjede > korisnikPobjede) {
    console.log("Računalo je ukupni pobjednik!");
} else {
    console.log("Nema ukupnog pobjednika, neriješeno je.");
}
