let korisnikPobjede = 0;
let računaloPobjede = 0; 
let nerjeseno = 0;

//funkcija za slučajni odabir od strane računala
function getComputerChoice(){
 
    const choices = ["kamen", "škare", "papir"];
    const randomBroj = Math.floor(Math.random() * 3);
    return choices[randomBroj];
}

let unosRačunala = getComputerChoice();
document.write(`Odabir računala je: ${unosRačunala.charAt(0).toUpperCase() + unosRačunala.slice(1)}` + "<br>");

//funkcija za odabir od strane osobe
function getHumanChoice() {

    let korisnikUnos = prompt("Upišite želite li: Kamen, Škare ili Papir");
    korisnikUnos = korisnikUnos.toLowerCase();
    
    if (korisnikUnos === "kamen" || korisnikUnos === "škare" || korisnikUnos === "papir") {
        document.write("Korisnikov unos je: " + korisnikUnos.charAt(0).toUpperCase() + korisnikUnos.slice(1) + "<br>");
        return korisnikUnos;
    } else {
        return getHumanChoice();
    }
}

let korisnikovUnos = getHumanChoice();

//funkcija koja izvršava igru
function playRound(unosRačunala, korisnikovUnos) {
  
    if (unosRačunala === korisnikovUnos) {
        window.alert("Nerješeno je.");
    } 
    else if ((unosRačunala === "škare" && korisnikovUnos === "papir") ||
               (unosRačunala === "papir" && korisnikovUnos === "kamen") ||
               (unosRačunala === "kamen" && korisnikovUnos === "škare")) {
        window.alert("Računalo pobjeđuje.");
    } 
    else {
        window.alert("Korisnik pobjeđuje.");
    }
}

playRound(unosRačunala, korisnikovUnos);
