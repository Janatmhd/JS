//____________________________page cdd___________________________
const euro = document.getElementById("euro"); //selectionne l'element avec l'id euro
const dollar = document.getElementById("dollar"); //selectionne l'element avec l'id dollar
const yen = document.getElementById("yen"); //selectionne l'element avec l'id yen
const livreSterling = document.getElementById("livreSterling"); //selectionne l'element avec l'id livreSterling
console.log(euro); //affiche l'element avec l'id euro
console.log(dollar); //affiche l'element avec l'id dollar
console.log(yen); //affiche l'element avec l'id yen
console.log(livreSterling); //affiche l'element avec l'id livreSterling
let euroversdollar = 1.14; //taux de change euro vers dollar
let dollarverseuro = 0.88; //taux de change dollar vers euros
let euroversyen = 129.85; //taux de change euro vers yen
let yenverseuro = 0.0077; //taux de change yen vers euro
let euroverslivreSterling = 0.85; //taux de change euro vers livre sterling
let livreSterlingverseuro = 1.18; //taux de change livre sterling vers euro
let dollarversyen = 113.50; //taux de change dollar vers yen
let yenversdollar = 0.0088; //taux de change yen vers dollar
let dollarverslivreSterling = 0.75; //taux de change dollar vers livre sterling
let livreSterlingverdollar = 1.33; //taux de change livre sterling vers dollar
let yenverslivreSterling = 0.0066; //taux de change yen vers livre sterling
let livreSterlingversyen = 151.20; //taux de change livre sterling vers yen

//  <h1>BIENVENUE SUR MON CONVERTISSEUR</h1> <br><br>
//     <div id="convertisseur">
//     <input type="text" id="montant" placeholder="Montant" pattern="[0-9]*" inputmode="decimal" />
//     <select id="de">
//         <option value="EUR" id="euro">Euro</option>
//         <option value="USD" id="dollar">Dollar</option>
//         <option value="GBP" id="livreSterling">Livre sterling</option>
//         <option value="JPY" id="yen">Yen</option>
//     </select>
//     <button id="convertisseur2"><span><=></span></button>
//     <input type="text" id="montant" placeholder="Montant" pattern="[0-9]*" inputmode="decimal" />
//         <select id="vers">
//         <option value="EUR" id="euro">Euro</option>
//         <option value="USD" id="dollar">Dollar</option>
//         <option value="GBP" id="livreSterling">Livre sterling</option>
//         <option value="JPY" id="yen">Yen</option>
//     </select>
//     </div>
//     <button id="convertir">Convertir</button>
//fonction pour convertir l'euro en dollar
function euroToDollar(montant) {
    return montant * euroversdollar;
}
//fonction pour convertir le dollar en euro
function dollarToEuro(montant) {
    return montant * dollarverseuro;
}
//fonction pour convertir l'euro en yen
function euroToYen(montant) {
    return montant * euroversyen;
}
//fonction pour convertir le yen en euro
function yenToEuro(montant) {
    return montant * yenverseuro;
}
//fonction pour convertir l'euro en livre sterling
function euroToLivreSterling(montant) {
    return montant * euroverslivreSterling;
}
//fonction pour convertir la livre sterling en euro
function livreSterlingToEuro(montant) {
    return montant * livreSterlingverseuro;
}
//fonction pour convertir le dollar en yen
function dollarToYen(montant) {
    return montant * dollarversyen;
}
//fonction pour convertir le yen en dollar
function yenToDollar(montant) {
    return montant * yenversdollar;
}
//fonction pour convertir le dollar en livre sterling
function dollarToLivreSterling(montant) {
    return montant * dollarverslivreSterling;
}
//fonction pour convertir la livre sterling en dollar
function livreSterlingToDollar(montant) {
    return montant * livreSterlingverdollar;
}
//fonction pour convertir le yen en livre sterling
function yenToLivreSterling(montant) {
    return montant * yenverslivreSterling;
}
//fonction pour convertir la livre sterling en yen
function livreSterlingToYen(montant) {
    return montant * livreSterlingversyen;
}
//fonction pour convertir le montant en fonction de la devise de départ et de la devise d'arrivée
function convertir(montant, de, vers) {
    if (de === "EUR" && vers === "USD") { // Si la devise de départ est l'euro et la devise d'arrivée est le dollar 
        return euroToDollar(montant); // on convertit l'euro en dollar
    } else if (de === "USD" && vers === "EUR") {
        return dollarToEuro(montant);
    } else if (de === "EUR" && vers === "JPY") {
        return euroToYen(montant);
    } else if (de === "JPY" && vers === "EUR") {
        return yenToEuro(montant);
    } else if (de === "EUR" && vers === "GBP") {
        return euroToLivreSterling(montant);
    } else if (de === "GBP" && vers === "EUR") {
        return livreSterlingToEuro(montant);
    } else if (de === "USD" && vers === "JPY") {
        return dollarToYen(montant);
    } else if (de === "JPY" && vers === "USD") {
        return yenToDollar(montant);
    } else if (de === "USD" && vers === "GBP") {
        return dollarToLivreSterling(montant);
    } else if (de === "GBP" && vers === "USD") {
        return livreSterlingToDollar(montant);
    } else if (de === "JPY" && vers === "GBP") {
        return yenToLivreSterling(montant);
    } else if (de === "GBP" && vers === "JPY") {
        return livreSterlingToYen(montant);
    }
}

//fonction pour afficher le résultat de la conversion avec le bouton convertir
function afficherResultat() {
    const montant = parseFloat(document.getElementById("montant").value); //récupère le montant à convertir
    const de = document.getElementById("de").value; //récupère la devise de départ
    const vers = document.getElementById("vers").value; //récupère la devise d'arrivée

    if (isNaN(montant) || montant <= 0) { //vérifie si le montant est un nombre et s'il est supérieur à 0
        alert("Veuillez entrer un montant valide."); //affiche une alerte si le montant n'est pas valide
        return; //sort de la fonction si le montant n'est pas valide
    }

    const resultat = convertir(montant, de, vers); //convertit le montant en fonction des devises
    alert(`Le montant converti est : ${resultat.toFixed(2)} ${vers}`); //affiche le résultat de la conversion avec deux décimales
}

// Ajoute un écouteur d'événement pour le bouton de conversion
document.getElementById("convertir").addEventListener("click", afficherResultat);

// Ajoute un écouteur d'événement pour le bouton de conversion avec la flèche
document.getElementById("convertisseur2").addEventListener("click", function() {
    const deSelect = document.getElementById("de");
    const versSelect = document.getElementById("vers");
    
    // Échange les valeurs des sélecteurs
    const temp = deSelect.value;
    deSelect.value = versSelect.value;
    versSelect.value = temp;

}); 
