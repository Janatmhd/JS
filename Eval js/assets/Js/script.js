/*---------------------------------header----------------------------------*/
// const header = document.querySelector('header');
// // console.log(header);
// window.addEventListener('scroll', ()=>{
//     (window.scrollY > 80) ? header.style.backgroundColor = 'green' : header.style.backgroundColor = 'transparent';
// });

/*---------------------------------calculatrice----------------------------------*/
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

//Gerer les cas d'erreur sur le pourcentage

function pourcentage() {
    try {
        let valeur = parseFloat(resultat.innerHTML);
        if (isNaN(valeur)) {
            throw new Error('Invalid number');
        } else {
            resultat.innerHTML = valeur / 100;
        }
    } catch {
        resultat.innerHTML = 'ERREUR';
    }
}

function resoudre(){
    try{
        let egal = eval(resultat.innerHTML);
        resultat.innerHTML = egal;
    }catch{
        resultat.innerHTML = 'ERREUR';
    }
}


//faire en sorte qu'on puisse manipuler la calculatrice avec les touches du clavier

// Gérer les touches du clavier
document.addEventListener('keydown', function (event) {
    const touche = event.key;

    if ('0123456789.'.includes(touche)) {
        afficher(touche);
    } else if (['+', '-', '*', '/'].includes(touche)) {
        afficher(touche);
    } else if (touche === 'Enter') {
        resoudre();
    } else if (touche === 'Escape' || touche === ' ') {
        effacer();
    } else if (touche === '%') {
        pourcentage();
    }
});


