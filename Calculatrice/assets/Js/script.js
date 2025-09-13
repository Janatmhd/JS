const resultat = document.getElementById('resultat');

function afficher(touche){
    if(resultat.innerHTML == '0'){
        resultat.innerHTML = touche;
    }else if(resultat.innerHTML == '.'){
        resultat.innerHTML = '0.'+touche;
    }else{
        resultat.innerHTML += touche;
    }
}

function effacer(){
    resultat.innerHTML = '0';
}

function pourcentage(){
    resultat.innerHTML = resultat.innerHTML / 100;
}

function resoudre(){
    try{
        let egal = eval(resultat.innerHTML);
        resultat.innerHTML = egal;
    }catch{
        resultat.innerHTML = 'ERREUR';
    }
}

//Gerer les cas d'erreur sur le pourcentage
//faire en sorte qu'on puisse manipuler la calculatrice avec les touches du clavier

document.addEventListener('keydown', function(event) { // Gérer les touches du clavier
    const touche = event.key; // Récupérer la touche pressée
    if (!isNaN(touche) || touche === '.') { // Si c'est un chiffre ou un point
        afficher(touche);
    } else if (touche === 'Enter') { // Si c'est la touche Entrée
        resoudre();
    } else if (touche === 'Escape') { // Si c'est la touche Échap
        effacer();
    } else if (touche === '%') { // Si c'est la touche pourcentage
        pourcentage();
    } else if (['+', '-', '*', '/'].includes(touche)) { // Si c'est une opération
        afficher(touche);
    }
});
// Gérer les touches du clavier pour les opérations 
document.querySelectorAll('.touche').forEach(touche => { // Sélectionner toutes les touches
    touche.addEventListener('click', function() { // Ajouter un écouteur d'événement pour chaque touche
        // Récupérer la valeur de la touche cliquée
        const valeur = this.getAttribute('data-valeur'); // Utiliser l'attribut data-valeur pour obtenir la valeur de la touche
        if (valeur === 'C') { // Si la touche est C (pour effacer)
            effacer();
        } else if (valeur === '=') { // Si la touche est égal
            resoudre();
        } else if (valeur === '%') { // Si la touche est pourcentage
            pourcentage();
        } else {
            afficher(valeur);
        }
    });
});

//Gerer les cas d'erreur sur le pourcentage
function gererErreurPourcentage() {
    if (resultat.innerHTML.includes('%')) {
        try {
            let valeur = parseFloat(resultat.innerHTML.replace('%', ''));
            if (isNaN(valeur)) {
                resultat.innerHTML = 'ERREUR';
            } else {
                resultat.innerHTML = valeur / 100;
            }
        } catch {
            resultat.innerHTML = 'ERREUR';
        }
    }
}

// Gérer les touches du clavier pour les chiffres et le point
document.querySelectorAll('.chiffre').forEach(chiffre => { // Sélectionner toutes les touches de chiffres
    chiffre.addEventListener('click', function() { // Ajouter un écouteur d'événement pour chaque touche de chiffre
        afficher(this.textContent); // Afficher la valeur de la touche cliquée
    });
});
// Gérer le bouton pourcentage
document.getElementById('pourcentage').addEventListener('click', pourcentage);
// Gérer le bouton égal
document.getElementById('egal').addEventListener('click', resoudre);
// Gérer le bouton effacer
document.getElementById('effacer').addEventListener('click', effacer);
