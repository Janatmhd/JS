$(document).ready(()=>{  // Assure que le DOM est chargé avant d'exécuter le script
    let image = $("#slider img"); // Sélectionne toutes les images dans le slider
    let nbrSlides = image.length; // Compte le nombre d'images dans le slider
    let imageActive = 0; // Initialise l'index de l'image active à 0
    image.eq(imageActive).show(); // Affiche la première image du slider
    retourneSlide(); // Appelle la fonction pour gérer le défilement des images
    function retourneSlide(){ // Fonction pour gérer le défilement des images
        $('#sgauche').click(()=>{ // Ajoute un écouteur d'événement pour le clic sur le bouton gauche
            if(imageActive > 0){ // Vérifie si l'image active n'est pas la première
                imageActive--; // Diminue l'index de l'image active
            }else{ // Si l'image active est la première, passe à la dernière image
                imageActive = nbrSlides-1; // Dernière image
            }
        image.not(imageActive).fadeOut(1000); // Fait disparaître toutes les images sauf l'image active
        image.eq(imageActive).fadeIn(1000); // Fait apparaître l'image active
        });
        
        $('#sdroite').click(()=>{ // Ajoute un écouteur d'événement pour le clic sur le bouton droit
            imageActive++; // Augmente l'index de l'image active
            if(imageActive == nbrSlides){ // Vérifie si l'image active dépasse le nombre d'images
                imageActive = 0; // Si oui, revient à la première image
            }
        image.not(imageActive).fadeOut(1000); // Fait disparaître toutes les images sauf l'image active
        image.eq(imageActive).fadeIn(1000); // Fait apparaître l'image active
        });
    }

});
/*-----------------------BURGER-------------------------*/
const burger = document.querySelector('.burger'); // Sélectionne l'élément avec la classe 'burger'
const nav = document.querySelector('nav'); // Sélectionne l'élément 'nav'
burger.addEventListener('click', ()=>{ // Ajoute un écouteur d'événement pour le clic sur l'élément 'burger'
    burger.classList.toggle('croix'); // Bascule la classe 'croix' sur l'élément 'burger' pour changer son apparence
    nav.classList.toggle('active'); // Bascule la classe 'active' sur l'élément 'nav' pour afficher ou masquer le menu de navigation
});
/*-----------------------QSN-------------------------*/
$('.image img').mouseenter(()=>{ // Ajoute un écouteur d'événement pour le survol de l'image
    $('.texte').show(); // Affiche l'élément avec la classe 'texte'
});
$('.image img').mouseleave(()=>{ // Ajoute un écouteur d'événement pour le départ du survol de l'image
    $('.texte').hide(); // Masque l'élément avec la classe 'texte'
});
/*-----------------------Nos derniers articles-------------------------*/
let articles = $('.blog .article'); // Sélectionne tous les éléments avec la classe 'article' dans la section 'blog'

for (let article of articles){ // Itère sur chaque article
    console.log(article); // Affiche l'article dans la console
    $(article).mouseenter(()=>{ // Ajoute un écouteur d'événement pour le survol de l'article
        $(article).css("border", "2px solid orange").css("background-color", "blueviolet").css("color", "white"); // Change le style de l'article au survol
    });

    $(article).mouseleave(()=>{ // Ajoute un écouteur d'événement pour le départ du survol de l'article
    $(article).css("border", "2px solid blueviolet").css("background-color", "white").css("color", "black");
    });
}
/*-----------------------contactez nous-------------------------*/
const champs = document.querySelectorAll('.contact input, .contact textarea'); //selections multiples dans les querySelector desormai possible
for(let champ of champs){ // Itère sur chaque champ de formulaire
    champ.addEventListener("focus", ()=>{ // Ajoute un écouteur d'événement pour le focus sur le champ
        champ.style.backgroundColor = 'orange'; // Change la couleur de fond du champ au focus
    });
}
for(let champ of champs){ // Itère à nouveau sur chaque champ de formulaire
    champ.addEventListener("blur", ()=>{ // Ajoute un écouteur d'événement pour le blur (perte de focus) sur le champ
        champ.style.backgroundColor = 'white'; // Change la couleur de fond du champ à blanc lorsque le focus est perdu
    });
}

const form = document.querySelector('.contact form'); // Sélectionne le formulaire de contact
const reussi = document.querySelector('.reussi'); // Sélectionne l'élément de confirmation de succès
form.addEventListener("submit", (element)=>{ // Ajoute un écouteur d'événement pour la soumission du formulaire
    element.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire
    reussi.style.display = "block"; // Affiche l'élément de confirmation de succès

    setTimeout(()=>{ // Définit un délai de 5 secondes avant de masquer l'élément de confirmation
    reussi.style.display = "none"; // Masque l'élément de confirmation de succès après 5 secondes
    }, 5000); // 5000 millisecondes = 5 secondes
});

/*-----------------------Nos services-------------------------*/
const bouton = document.querySelectorAll(".services button"); // Sélectionne tous les boutons dans la section services
const popup = document.querySelectorAll(".popup"); // Sélectionne toutes les popups
const fermeture = document.querySelectorAll(".popup .close"); // Sélectionne tous les boutons de fermeture dans les popups

for(i=0; i<=bouton.length; i++){ // Itère sur chaque bouton
    let popupActif= popup[i]; // Sélectionne la popup correspondante à l'index du bouton
    let boutonActif= bouton[i]; // Sélectionne le bouton actif correspondant à l'index
    let fermetureActif= fermeture[i]; // Sélectionne le bouton de fermeture actif correspondant à l'index
    boutonActif.addEventListener('click', ()=>{ // Ajoute un écouteur d'événement pour le clic sur le bouton actif
        popupActif.style.visibility = 'visible'; // Rend la popup visible
    });

    fermetureActif.addEventListener('click', ()=>{ // Ajoute un écouteur d'événement pour le clic sur le bouton de fermeture actif
        popupActif.style.visibility = 'hidden'; // Masque la popup
    });
}
