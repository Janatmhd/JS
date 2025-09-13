let date = new Date();
const affdate = document.getElementById("affdate"); //selectionne l'element avec l'id affdate
affdate.style.textAlign = "center"; //centre le texte de l'element avec l'id affdate
affdate.style.fontSize = "40px"; //change la taille de police de l'element avec l'id affdate
function afficherDateHeure() {
    let d = new Date(); //création d'un nouvel objet date
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]; //tableau des jours de la semaine
    let moiss = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]; //tableau des mois de l'année
    let jour = d.getDay(); //récupère le jour de la semaine
    let jj = d.getDate(); //récupère le jour du mois
    let mois = d.getMonth(); //récupère le mois
    let annee = d.getFullYear(); //récupère l'année
    let dcomplet = "<h3>"+ jours[jour]+" "+ jj+ " "+ moiss[mois] + "/" + annee + "</h3>"; //concatène les informations de la date
    affdate.innerHTML = dcomplet; //affiche la date dans l'element avec l'id affdate
    let heure = d.getHours(); //récupère l'heure
    (heure < 10) ? heure = "0" + heure : heure; //ajoute un 0 devant l'heure si elle est inférieure à 1
    let minutes = d.getMinutes(); //récupère les minutes
    (minutes < 10) ? minutes = "0" + minutes : minutes; //ajoute un 0 devant les minutes si elles sont inférieures à 10
    let secondes = d.getSeconds(); //récupère les secondes
    (secondes < 10) ? secondes = "0" + secondes : secondes; //ajoute un 0 devant les secondes si elles sont inférieures à 10
    let hcomplet = "<h3>"+ heure + "h" + minutes + "m" + secondes + "s</h3>"; //concatène les informations de l'heure
    affdate.innerHTML += hcomplet; //affiche l'heure dans l'element avec l'id affdate
}
afficherDateHeure(); //appelle la fonction pour afficher la date et l'heure
//setInterval(afficherDateHeure, 1000); //met à jour la date et l'heure toutes les secondess

/*---------------------------------qsn----------------------------------*/
const imageQsn = document.querySelector('.image img');
const textQsn = document.querySelector('#qsn .text');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        imageQsn.style.animation = 'sortieGauche 2s ease-in-out';
        textQsn.style.animation = 'sortieDroite 2s ease-in-out';
    } else {
        imageQsn.style.animation = 'sortieDroite 2s ease-in-out';
        textQsn.style.animation = 'sortieGauche 2s ease-in-out';
    }
});


//______________________________________________________________________________
//Methde de class
$('#align').html("<div></div><div></div><div></div>");
$("div").addClass("div");//Ajouter une classe
$('#align').addClass("alignement");//Ajouter une classe
$('#align').removeClass("alignement"); //Supprimer une classe
$('#align').toggleClass("alignement"); //Remet la classe supprimer ou ajoute une classe si elle existe
//methodes des attributs
//-	Réaliser un programme qui vous permet d’ajouter des boules en cliquant sur un bouton. 
//Réaliser un programme qui fait disparaitre la boule qu’en on click dessus. 

$('#ajouter').css('padding', '10px').css("background-color", "green").css("border-radius", "30px");
$('#ajouter').click(()=>{
    $('#ajout').addClass("alignement");
    let a = $("<div class='div'></div>");
    $('#ajout').prepend(a);
    //$('div').addClass('div');
    $(".div").css("cursor", "pointer");
    a.click(()=>{
        a.remove();
        //$(this).remove();
    });
});