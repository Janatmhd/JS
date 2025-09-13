/*---------------------------------header----------------------------------*/
const header = document.querySelector('header');
// console.log(header);
window.addEventListener('scroll', ()=>{
    (window.scrollY > 80) ? header.style.backgroundColor = 'green' : header.style.backgroundColor = 'transparent';
});

/*---------------------------------banniere--------------------------------*/

const imgban = document.querySelector('#banniere img');
// console.log(imgban);
function chargerClub(){
    fetch('https://random.dog/woof.json') // Utilise l'API pour obtenir une image aléatoire de chien
    .then(response => response.json())
    .then(data => {
        if(data.url.includes('mp4')){
            chargerClub();
            return;
        }
        imgban.src = data.url;
        // console.log(data);
    });
}
setInterval(chargerClub, 4000);

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

/*---------------------------------service----------------------------------*/
const service1 = document.querySelector('#services .service:first-child');
const service2 = document.querySelector('.s2');
const service3 = document.querySelector('#services .service:last-child');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        service1.style.animation = 'sortieGauche 2s ease-in-out';
        service2.style.animation = 'sortieHaut 2s ease-in-out';
        service3.style.animation = 'sortieDroite 2s ease-in-out';
    } else {
        service1.style.animation = 'sortieDroite 2s ease-in-out';
        service3.style.animation = 'sortieGauche 2s ease-in-out';
    }
});

/*---------------------------------blog----------------------------------*/
const art1 = document.querySelector('#blog .article:first-child');
const art2 = document.querySelector('.art2');
const art3 = document.querySelector('.art3');
const art4 = document.querySelector('#blog .article:last-child');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 500){
        art1.style.animation = 'sortieGauche 2s ease-in-out';
        art2.style.animation = 'sortieHaut 2s ease-in-out';
        art3.style.animation = 'sortieBas 2s ease-in-out';
        art4.style.animation = 'sortieDroite 2s ease-in-out';
    } else {
        art1.style.animation = 'sortieDroite 2s ease-in-out';
        art4.style.animation = 'sortieGauche 2s ease-in-out';
    }
});

/*---------------------------------contact----------------------------------*/
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

//API pour la commune
//https://geo.api.gouv.fr/communes
//Grace a cette API, remplissez automatiquement le champs ville à partir du code postal saisie sur le formulaire de contact.
const codePostalInput = document.querySelector('.contact input[name="codePostal"]'); // Sélectionne l'input pour le code postal
const villeInput = document.querySelector('.contact input[name="ville"]'); // Sélectionne l'input pour la ville
codePostalInput.addEventListener('blur', () => { // Ajoute un écouteur d'événement pour le blur sur le code postal
    const codePostal = codePostalInput.value; // Récupère la valeur du code postal
    if (codePostal.length === 5) { // Vérifie si le code postal a 5 chiffres
        fetch(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`) // Fait une requête à l'API avec le code postal
            .then(response => response.json()) // Convertit la réponse en JSON
            .then(data => {
                if (data.length > 0) { // Vérifie si des données ont été retournées
                    villeInput.value = data[0].nom; // Remplit l'input de la ville avec le nom de la première commune trouvée
                } else {
                    villeInput.value = ''; // Vide l'input de la ville si aucune commune n'est trouvée
                }
            })
            .catch(error => console.error('Erreur:', error)); // Gère les erreurs de la requête
    } else {
        villeInput.value = ''; // Vide l'input de la ville si le code postal n'est pas valide
    }
});
