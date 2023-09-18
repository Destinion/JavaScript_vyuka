//promenne v JavaScriptu
//
//deklarace proměnných
var cislo = 5;
var text = "Ahoj";
var cislo2 = 5.5;
var logicka = true;
var pole = [1, 2, 3, 4, 5];
var objekt = {jmeno: "Petr", prijmeni: "Novák", vek: 25};
//
//výpis do konzole
console.log(cislo);
console.log(text);
console.log(cislo2);
console.log(logicka);
console.log(pole);
console.log(objekt);
//
//výpis do HTML
document.getElementById("prvni").innerHTML = "Výpis do HTML";

// var vs let vs const
// var - slouží k uložení dat do proměnné (nutné pro starší browsery)
// let - slouží k uložení dat do proměnné (pokud se bude proměnná měnit)
// const - slouží k uložení dat do proměnné (generální užití)

// deklarace proměnné

//const - konstanta
//Nemůže se měnit
//nemůže být přepsána
//nemůže být přiřazena jiná hodnota

const hodnota = 5;
//let - proměnná
//Může se měnit
//může být přepsána
//může být přiřazena jiná hodnota
let text = "Ahoj";