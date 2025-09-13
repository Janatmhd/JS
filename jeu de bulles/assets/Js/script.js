let n = 0;
const score = document.querySelector('h1 p');
const niv = document.querySelector('h1 span');
const info = document.querySelector('.infos h2');
function creerbulle(){
    //création de bulle
    const bulle = document.createElement('div'); //creer une div
    bulle.classList.add('bulle'); //Ajout de la class bulle
    document.body.appendChild(bulle); //Inserer l'element dans le body
    //Mettre les tailles à nos bulles
    let taille = Math.ceil(Math.random()*100) + 100 + "px";
    bulle.style.width= taille;
    bulle.style.height = taille;
    //positionnement
    let posTop = Math.ceil(Math.random()*100) + 50 + "%";
    let posLeft = Math.ceil(Math.random()*100) + "%";
    bulle.style.top= posTop;
    bulle.style.left = posLeft;

    //Vitesses et niveau
    let a = vitesse(n);
    let anim = 'bubulle '+a+'s forwards';
    bulle.style.animation = anim;

    //Peter les bulles
    bulle.addEventListener('click', ()=>{
        n++;
        bulle.remove();
        score.innerHTML = n;
        niv.innerHTML = niveau(n);
    });

    //Autodétruire les bulles non cliqués
    setTimeout(()=>{
        bulle.remove();
    }, 5000);

    if(n==60){
        bulle.remove();
        info.innerHTML = 'FIN DU GAME !';
        $('.infos').show();
    }

}
function vitesse(n){
    let a;
    if(n<20){
        a=20;
    }else if(n>=20 && n<40){
        a=10;
    }else if(n>=40 && n<60){
        a=5;
    }else if(n>=60 && n<100){
        a=1;
    }else{
        a= 0;
    }
    return a;
}
function niveau(n){
    let a;
    if(n<20){
        a=1;
    }else if(n>=20 && n<40){
        a=2;
    }else if(n>=40 && n<60){
        a=3;
    }else if(n>=60 && n<100){
        a=4;
    }else{
        a= "FIN DU JEU";
    }
    return a;
}
setInterval(creerbulle, 500);

//Pouvoir réaliser des niveaux en faisant appel à la fonction, si le score est moins de 20, on est au niveau 1 avec une vitesse de 20s
//score en 20 et 40 niveau 2, vitesse de 10s
//score en 40 et 60 niveau 3, vitesse de 5s
//score > à 60 niveau 4, vitesse de 2s
//score = 100 fin du jeu

// if(n = 20 && n <= 40){
//     setInterval(creerbulle, 10000); // Appelle la fonction creerbulle toutes les 10000 millisecondes (10 secondes) 
// } else if(n > 40 && n <= 60){
//     setInterval(creerbulle, 5000); // Appelle la fonction creerbulle toutes les 5000 millisecondes (5 secondes)
// } else if(n > 60){
//     setInterval(creerbulle, 2000); // Appelle la fonction creerbulle toutes les 2000 millisecondes (2 secondes)
// } else if(n = 100){
//     alert("Fin du jeu" + n); // Affiche un message de félicitations avec le score final
// }
