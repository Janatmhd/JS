//document.write reste une fonction obsolete du JS
document.write("<h2>Je suis du JS externe</h2>");
//commentaire monoligne
/*commentaire 1
commentaire 2
commentaire 3
...
 */
//------------------------------les variables ------------------------
document.write("<h2>3 les variables</h2>"); //
let prenom; //déclaration de la variable prenom avec let
let nom; //déclaration de la variable nom avec var
prenom = "Ludovic"; //affectation ou assignation
nom = "Dupont"; //affectation ou assignation
document.write("Bonjour ", prenom, " ", nom, " Bienvenue sur JS <br>");//Affichage
let a, b, c, d; //déclaration de plusieurs variables
a=130; //affectation de la variable a
b="coucou"; //affectation de la variable b
c=true; //affectation de la variable c
document.write("la valeur de a : ", a, " ", "son type : ", typeof(a), "<br>"); //typeof permet de connaitre le type de la variable
document.write("la valeur de b : ", b, " ", "son type : ", typeof(b), "<br>"); //typeof permet de connaitre le type de la variable
document.write("la valeur de c : ", c, " ", "son type : ", typeof(c), "<br>"); //typeof permet de connaitre le type de la variable
document.write("la valeur de d : ", d, " son type : ", typeof(d), "<br>");  //d n'a pas de valeur, son type est undefined
//changement de valeur
a="ca va bien"; //changement de type de la variable a
document.write("la valeur de a : ", a, " ", "son type : ", typeof(a), "<br>"); //affichage de la nouvelle valeur de a
//------------------------------les constantes ------------------------
document.write("<h2>Les constantes </h2><br>"); 
const drapeauFrance = "Bleu Blanc Rouge"; 
    //drapeauFrance= "Black Blanc Beurre"; ne jamais changer la valeur d'une constante
document.write("la constante drapeau de la France : ", drapeauFrance, "<br>"); 
//Librairie Math
document.write("la constante PI : ", Math.PI, "<br>"); //Math.PI est une constante de la librairie Math qui donne la valeur de PI
document.write("la constante Epsilon : ", Math.E, "<br>"); //Math.E est une constante de la librairie Math qui donne la valeur de Epsilon
//------------------------------nombre aléatoire ------------------------
let nbr = Math.random(); //donne un nombre aléatoire entre 0 et 1
let nbr2 = Math.random()*100; //donne un nombre aléatoire entre 0 et 100
document.write("Nombre aléaroire: ", nbr, "<br>"); //affichage du nombre aléatoire
document.write("Nombre aléaroire: ", nbr2, "<br>"); //affichage du nombre aléatoire
//Les fonctions pour arrondir
document.write("Nombre aléaroire: ", Math.ceil(nbr), "<br>"); //arrondi superieur
document.write("Nombre aléaroire: ", Math.floor(nbr2), "<br>");//arrondi inferieur
//------------------------------les instructions lire et ecrire ------------------------
document.write("<h2> 4 Les instructions lire et ecrire </h2><br>");
// let prenom2 = prompt("Entrez votre prénom"); //recuperer la saisie utilisateur
// let nom2 = prompt("Entrez votre nom"); //recuperer la saisie utilisateur
// confirm("Confirmez votre prenom" + prenom2); //recuperer une confirmation
// alert("Bonjour " + prenom2 + " " + nom2); //envoyer un message pop-up
// document.write("Bonjour ", prenom2, " ", nom2, "<br>"); //ecrire dans le html
// console.log("Bonjour "+ prenom2+ " "+ nom2); //ecrire sur la console
//------------------------------les opérateurs------------------------
document.write("<h2>5 Les operateurs </h2><br>");
let nbr1, nbr3; //déclaration des variables
nbr1=20; //initialisation de la variable nbr1
nbr3=10; //initialisation de la variable nbr3
document.write(nbr1," + ", nbr3, " = ", nbr1+nbr3, "<br>"); //addition
document.write(nbr1," - ", nbr3, " = ", nbr1-nbr3, "<br>"); //soustraction
document.write(nbr1," * ", nbr3, " = ", nbr1*nbr3, "<br>"); //multiplication
document.write(nbr1," / ", nbr3, " = ", nbr1/nbr3, "<br>"); //division
document.write(nbr1," % ", nbr3, " = ", nbr1%nbr3, "<br>"); //modulo //reste de la division
document.write(nbr1," ^ ", nbr3, " = ", nbr1**nbr3, "<br>"); //puissance
nbr1++; //nbr1 = nbr1+1
document.write("incrémentation: ", nbr1, "<br>"); //incrémentation
nbr3--;//nbr3 = nbr3-1
document.write("décrémentation: ", nbr3, "<br>"); //décrémentation
document.write("<h3>5 Les operateurs d'affectation</h3><br>");
document.write("les valeurs d'entrées de nbr1 et nbr3: ", nbr1, " ", nbr3,"<br>"); 
nbr1+=nbr3; //nbr1 = nbr1+nbr3
document.write("+= La nouvelle valeur de nbr1 : ", nbr1, "<br>"); 
nbr1-=nbr3; //nbr1 = nbr1-nbr3
document.write("-= La nouvelle valeur de nbr1 : ", nbr1,"<br>");
nbr1*=nbr3; //nbr1 = nbr1*nbr3
document.write("*= La nouvelle valeur de nbr1 : ", nbr1,"<br>");
nbr1/=nbr3; //nbr1 = nbr1/nbr3
document.write("/= La nouvelle valeur de nbr1 : ", nbr1,"<br>");
nbr1%=nbr3; //nbr1 = nbr1%nbr3
document.write("%= La nouvelle valeur de nbr1 : ", nbr1,"<br>");
document.write("les valeurs de sorties  nbr1 et nbr3: ", nbr1, " ", nbr3,"<br>");
document.write("<h3>L'operateur ternaire</h3><br>");
a=100; //déclaration de la variable a
b=200; //déclaration de la variable b
document.write((a>b)? a/b : b/a);
/*Ecrire un programme qui demande à l'utilisateur de saisir son age et une confirmation de son age, envoie le message bienvenue si il a plus de 18ans ou accès refusé sinon et aurevoir s'il ne confirme pas son age.*/
// let age = prompt("Entrez votre  age");
//let conf = confirm("Vous confirmez que vous avez bien "+ age+ " ans");
// (conf==true) ? alert((age>=18) ? "Bienvenue" : "Accès refusé"): alert("Aurevoir");*/

//------------------------------les conversions------------------------
document.write("<h2>6 Les conversions</h2>");
a=8;
b="5.9";
c=6.3;
document.write(a, " : ", typeof(a),  "<br>");
document.write(c, " : ", typeof(c),  "<br>");
document.write(a, " + ", b, " = ", a+b, "<br>");
document.write(a, " + Number(", b, ") = ", a+Number(b), "<br>");
document.write(a, " + ParseFloat(", b, ") = ", a+parseFloat(b), "<br>");
document.write(a, " + ParseInt(", b, ") = ", a+parseInt(b), "<br>");
document.write(a, " + ", c, " = ", a+c, "<br>");
document.write(a, " + ParseInt(", c, ") = ", a+parseInt(c), "<br>");
a=a+""; //converti nombre en chaine de caractere
document.write(a, " : ", typeof(a), "<br>");
c= String(c);//converti nombre en chaine de caractere
document.write(c, " : ", typeof(c),  "<br>");
//------------------------------les chaines de caracteres------------------------
document.write("<h2>7 les chaines de caracteres</h2>");
let chaine = "le JS est un langage vraiment cool";
document.write(chaine, "<br>");
document.write(chaine.toLowerCase(), "<br>"); //miniscule
document.write(chaine.toUpperCase(), "<br>"); //Majuscule
document.write(chaine.strike(), "<br>"); //pour barrer
document.write(chaine.bold(), "<br>"); //pour mettre en gras
document.write(chaine.small(), "<br>"); //pour réduire
document.write(chaine.fontcolor("green"), "<br>"); //pour changer la couleur
document.write(chaine.fontsize("40px"), "<br>"); //taille typo
document.write(chaine.length, "<br>"); //longueur de la chaine

//------------------------------les conditions------------------------
// document.write("<h2>8 les conditions</h2>");
// e=100;
// f=200;
//condition simple
// if(e>f){
//     document.write(e, " est supérieur à ", f, "<br>");
// }
// //condition alternative
// if(e>f){
//     document.write(e, " est supérieur à ", f, "<br>");
// } else {
//     document.write(e, " est inférieur à ", f, "<br>");
// }

/*let moyenne = prompt("Entrez votre moyenne");
if(moyenne<0){
    alert("Moyenne impossible");
}else if(moyenne<10){
    alert(moyenne + " Insuffisant");
}else if(moyenne<12){
    alert(moyenne + " Passable");
}else if(moyenne<14){
    alert(moyenne + " A bien");
}else if(moyenne<16){
    alert(moyenne + " Bien");
}else if(moyenne<18){
    alert(moyenne + " Très bien");
}else if(moyenne<=20){
    alert(moyenne + " Félicitation");
}else{
    alert(moyenne + " supérieur à 20, t'es un tricheur");
}

//Ecrire un programme qui demande à l'utilisateur de saisir un jour de la semaine et affiche par exemple: mardi est le 2eme jour de la semaine.
// jour = prompt("Entrez un jour de la semaine");
// jour= jour.toLowerCase();
// if(jour == "lundi"){
//     alert(jour + " est le 1er jour de la semaine");
// }else if(jour == "mardi"){
//     alert(jour + " est le 2eme jour de la semaine");
// }else if(jour == "mercredi"){
//     alert(jour + " est le 3eme jour de la semaine");
// }else if(jour == "jeudi"){
//     alert(jour + " est le 4eme jour de la semaine");
// }else if(jour == "vendredi"){
//     alert(jour + " est le 5eme jour de la semaine");
// }else if(jour == "samedi"){
//     alert(jour + " est le 6eme jour de la semaine");
// }else if(jour == "dimanche"){
//     alert(jour + " est le 7eme jour de la semaine");
// }else{
//     alert("Aucun jour ne correspond à "+ jour);
// }
//------------------------switch case--------------------------------
// let civilite = prompt("Saisisez votre civilie Mr, Mme ...");
//     nom = prompt("Saisisez votre nom");
// civilite = civilite.toLowerCase();
// switch(civilite){
//     case 'mr' :
//         alert("Bonjour Monsieur "+nom);
//         break;
//     case 'mme' :
//         alert("Bonjour Madame "+nom);
//         break;
//     default :
//         alert("WTF "+nom);
// }

//Ecrire le programme pour les mois de l'année comme pour les jours de la semaine mais avec un switch case en gérant les chiffres et les noms des mois.
// let mois = prompt("Saisisez un mois de l'année");
// mois = mois.toLowerCase();
// switch(mois){
//     case 'janvier' :
//     case '1' :
//         alert(mois + " est le 1er mois de l'année");
//         break;
//     case 'fevrier' :
//         case '2' :
//     alert(mois + " est le 2eme mois de l'année");
//     break;
//     case 'mars' :
//         case '3' :
//         alert(mois + " est le 3eme mois de l'année");
//         break;
//     case 'avril' :
//         case '4' :
//         alert(mois + " est le 4eme mois de l'année");
//         break;
//     case 'mai' :
//         case '5' :
//         alert(mois + " est le 5eme mois de l'année");
//         break;
//     case 'juin' :
//         case '6' :
//         alert(mois + " est le 6eme mois de l'année");
//         break;
//     case 'juillet' :
//         case '7' :
//         alert(mois + " est le 7eme mois de l'année");
//         break;
//     case 'août' :
//     case 'aout' :
//         case '8' :
//         alert(mois + " est le 8eme mois de l'année");
//         break;
//     case 'septembre' :
//         case '9' :
//         alert(mois + " est le 9eme mois de l'année");
//         break;
//     case 'octobre' :
//         case '10' :
//         alert(mois + " est le 10eme mois de l'année");
//         break;
//     case 'novembre' :
//         case '11' :
//         alert(mois + " est le 11eme mois de l'année");
//         break;    
//     case 'decembre' :
//         case '12' :
//             if(mois == '12'){
//                 alert("Décembre est le 12eme mois de l'année");
//             }else{
//                 alert(mois + " est le 12eme mois de l'année");
//             }
//         break;
//     default :
//         alert(mois + " n'est pas un mois de l'année terrienne");
// }
//------------------------------les boucles------------------------
document.write("<h2>9 les boucles </h2>");
for(let i=0;i<=10;i++){
    document.write("Je suis le passage numéro ", i, "<br>");
    if(i==3){
        break;
    }
}
document.write("Ordre décroissant <br>");
for(let i=10;i>=0;i--){
    if(i==5){
        continue;
    }
    document.write("Je suis le passage numéro ", i, "<br>");

}
//Ecrire un programme qui affiche les 100 premiers nombre premier
// for(i=2;i<=100;i++){
//     for(j=2;j<=i;j++){
//         if(i%j==0){
//             break;
//         }
//     }
//     if(j==i){
//         document.write(i,"<br>");
//     }
// }

//____methode 2_______________
let premier;
for(let i=1;i<=100;i++){
    premier=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            premier++;
        }
    }
    if(premier==2){
        document.write(i,"<br>");
    }
}
//____Boucle while_______________
document.write("Boucle while <br>");
let n = 0;
while(n<10){
    n++;
    if(n==5){
        continue; //break;
    }
    document.write("Je suis le passage numéro ", n, "<br>");
}
//____Boucle do while_______________
document.write("Boucle do while <br>");
let m = 0;
do {
    document.write("Je suis le passage numéro ", m, "<br>");
    m++;
}while(m<10);

//Réaliser le programme du jeu du juste prix de 0 à 100
// let saisie, essai;
// essai = 0;
// nbr= Math.ceil(Math.random()*100);
// do{
//     saisie = prompt("Saisissez un nombre entre 0 et 100");
//     if(saisie<nbr){
//         alert("Plus Grand");
//     }else if(saisie == nbr){
//         alert("Bravo");
//     }else{
//         alert("Plus petit");
//     }
//     essai++;
// }while(saisie!=nbr);
// alert("Vous avez réussi au bout de "+essai+" tentatives.");

//____les tableaux_______________
document.write("<h2>10 Les tableaux </h2>");
//Déclarer un tableau
// let tab1 = []; //premiere methode
// let tab2 = new Array(); //2eme methode, nouvelle instance de la class Array

//Déclaration et initialisation
let tab1 = ["janat", "Mathieu", "Stanley", "Armel", "Anthony"];
let tab2 = new Array("Ludovic", "Andrew", "Anaïs", "Tristan", "Camil");

//Parcourir un tableau
for(let i=0;i<tab1.length;i++){
    document.write("<b style='color: red'>indice</b> : ", i, "<b style='color: red'> Valeur</b> : ", tab1[i], "<br>");
}
document.write("<br> Parcours TAB2 <br>");
for(let i=0;i<tab2.length;i++){
    document.write("<b style='color: red'>indice</b> : ", i, "<b style='color: red'> Valeur</b> : ", tab2[i], "<br>");
}
//_________________________boucle for in ___________________
document.write("<br>boucle for in <br>");
for(a in tab1){ //parcour les indices du tableau
    document.write( tab1[a], "<br>");
}
//_________________________boucle for of ___________________
document.write("<br>boucle for of <br>");
for(b of tab2){ //parcour les valeurs du tableau
    document.write( b, "<br>");
}
//_________________________boucle forEach ___________________
document.write("<br>boucle forEach <br>");
tab1.forEach((c, d)=>{//methode de l'objet Array, prend les valeurs du tableau en 1er parametre et indices en second
    document.write("<b style='color: red'>indice</b> : ", d, "<b style='color: red'> Valeur</b> : ", c, "<br>");
});
//Copier le tabeau 2 dans le tableau 1
for(let a of tab2){
    let j = tab1.length;
    tab1[j]=a;
}
document.write("<br><br>");
tab1.forEach((c, d)=>{
    document.write("<b style='color: red'>indice</b> : ", d, "<b style='color: red'> Valeur</b> : ", c, "<br>");
});

//Modifier les valeurs du tableau 1
tab1[3] ="Julien";
tab1[8] ="Gracia";
document.write("<br><br>");
tab1.forEach((c, d)=>{
    document.write("<b style='color: red'>indice</b> : ", d, "<b style='color: red'> Valeur</b> : ", c, "<br>");
});

//Exos
let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
let mois = new Array("janvier", "fevrier", "mars", "avril", "mai","juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
//Ecrire un programme qui demande à l'utilisateur da saisir un jour entre 1 et 7 et un mois entre 1 et 12 et affiche une date sous la forme LUNDI 15 JANVIER 2025, l'année et le jj peuvent rester fixe.
// let day = prompt("Saisissez un jour entre 1 et 7");
// let month = prompt("Saisissez un mois entre 1 et 12");
// document.write(jours[day-1].toUpperCase(), " 15 ", mois[month-1].toUpperCase(), " 2025");

//EXO2: chercher le max et le min du tableau et les permuter
//Afficher le tableau avant et après permutation

let tab = [72, 18, 36, 15, 8, 9, 57, 13];
tab.forEach((c)=>{
    document.write( c, " ");
});
document.write("<br>");
let min = 0;
let max = 0;
for(let i=1;i<tab.length;i++){
    if(tab[i]<tab[min]){
        min=i;
    }
    if(tab[i]>tab[max]){
        max=i;
    }
}
let temp;
temp = tab[min];
tab[min] = tab[max];
tab[max] = temp;
tab.forEach((c)=>{
    document.write( c, " ");
});
document.write("<br>");

//EXO3 ecrire un programme qui demande à l'utilisateur de saisir la taille d'un tableau d'entier, ensuite les valeurs puis affiche le tableau, ensuite fais la somme des valeurs du tableau et l'affiche, puis calcule la moyenne et l'affiche et fini par mettre ajournéé toutes les notes en dessous de la moyenne.
document.write("<br>EXO3<br>");

//EXO4: Ecrire un programme qui calcule et affiche:
//La quantité de nombre pair dans le tableau et son pourcentage
//la quantité de nombre parfait dans le tableau et son pourcentage
//la quantité de nombre premier dans le tableau et son pourcentage
let tab4 = [2, 3, 8, 7, 12, 15, 28, 30, 17, 13, 6, 19];
document.write("<br>EXO4<br>");
document.write(tab4, "<br>");
let pair = 0;
let parfait = 0;
premier = 0;
for(let val of tab4){
    if(val%2==0){
        pair++;
        document.write(val, "pair ");
    }
    let somme = 0;
    for(let i=1;i<val;i++){
        if(val%i==0){
            somme+=i;
        }
    }
    if(somme==val){
        parfait++;
        document.write(val, "parfait ");
    }
    let diviseur = 0;
    for(let i=2;i<val;i++){
        if(val%i==0){
            diviseur++;
        }
    }
    if(diviseur==0){
        premier++;
        document.write(val, "premier ");
    }
}
document.write("<br>la quantité de nombre pair est de ", pair, "<br>");
document.write("le pourcentage de nombre pair est de ",pair/tab4.length*100, "%");
document.write("<br>la quantité de nombre parfait est de ", parfait, "<br>");
document.write("le pourcentage de nombre pair est de ",parfait/tab4.length*100, "%");
document.write("<br>la quantité de nombre parfait est de ", premier, "<br>");
document.write("le pourcentage de nombre pair est de ",premier/tab4.length*100, "%");
//_________________________les methodes de l'objet array___________________
document.writeln("<br><br> LES METHODES ARRAY <br>");
document.writeln("<br>",tab1, "<br>");
tab1.pop(); //permet de supprimer le dernier element du tableau
document.writeln(tab1, "<br>");
tab1.shift(); //permet de supprimer le premier element du tableau
document.writeln(tab1, "<br>");
tab1.push("Camil"); //permet d'ajouter un element à la fin du tableau
document.writeln(tab1, "<br>");
tab1.unshift("Janat"); //permet d'ajouter un element au début du tableau
document.writeln(tab1, "<br>");
tab1.splice(2, 0, "Boris", "Jacques", "Marie", "Paulette", "Jade"); //permet d'ajoiuter des elements à partir d'un indice ciblé (inclu) du tableau
document.writeln(tab1, "<br>");
tab1.splice(2, 2); //permet supprimer des elements à partir d'un indice ciblé (inclu) du tableau
document.writeln(tab1, "<br>");

//_________________________les tableaux multidimentionnels___________________
document.writeln("<h2>10.3 LES TABLEAUX MULTIDIMENTIONNELS</h2>");
//Déclaration et initialisation
//Premiere methode
let users = [
    ["prenom", "identifiant", "mot de passe", "age"],
    ["Janat", "janat@gmail.com", "1234", 20],
    ["Mathieu", "mathieu@yahoo.fr", "abcd", 35],
    ["Julien", "julien@outlook.fr", "1234", 22],
    ["Stanley", "stanley@orange.fr", "5678", 21]
];
//Deuxieme methode
let client1 = new Array("ludovic", "ludo@gmail.com", "qsdf", 18);
let client2 = new Array("Andrew", "andrew@gmail.com", "wxcv", 19);
let client3 = new Array("Anais", "anais@gmail.com", "qsdf", 16);
let client4 = new Array("Tristan", "tristan@gmail.com", "abcd", 20);
let client5 = new Array("Camil", "camil@gmail.com", "1234", 17);
let clients = new Array(client1, client2, client3, client4, client5);
//Parcourir et un afficher un tableau multidimentionnel
// document.writeln(users, "<br>");
// document.writeln(clients, "<br>");
// for(a of clients){
//     for(b of a){
//         document.writeln(b, " ");
//     }
//     document.writeln("<br>");
// }
for(let i=1;i<users.length;i++){
    for(let j=0;j<users[i].length;j++){
        switch(j) {
            case 0 : document.writeln("<b>",users[0][0].toUpperCase(),"</b> : ", users[i][j], "<br>");
                break;
            case 1 : document.writeln("<b>",users[0][1].toUpperCase(),"</b> : ", users[i][j], "<br>");
            break;
            case 2 : document.writeln("<b>",users[0][2].toUpperCase(),"</b> : ", users[i][j], "<br>");
            break;
            default : document.writeln("<b>",users[0][3].toUpperCase(),"</b> : ", users[i][j], "<br>");
        }
    }
    document.writeln("<br>");
}
//On va copier le tableau clients dans users
for(let a of clients){
    users.push(a);
}
document.writeln("_____________AFFICHAGE APRES AJOUT CLIENTS___________<br><br>");
for(let i=1;i<users.length;i++){
    for(let j=0;j<users[i].length;j++){
        switch(j) {
            case 0 : document.writeln("<b>",users[0][0].toUpperCase(),"</b> : ", users[i][j], "<br>");
                break;
            case 1 : document.writeln("<b>",users[0][1].toUpperCase(),"</b> : ", users[i][j], "<br>");
            break;
            case 2 : document.writeln("<b>",users[0][2].toUpperCase(),"</b> : ", users[i][j], "<br>");
            break;
            default : document.writeln("<b>",users[0][3].toUpperCase(),"</b> : ", users[i][j], "<br>");
        }
    }
    document.writeln("<br>");
}
//EXO1: Ecrire un programme qui permet d'ajouter un utilisateur à la fin du tabeau users si son identifiant n'existe pas déjà dans le tableau
document.writeln("EXO1<br><br>");
/*let id = prompt("Saisissez votre mail");
let exist = 0;
for(i=1; i<users.length;i++){
    if(id==users[i][1]){
        alert(id + " cet identifiant existe déja");
        exist++;
        break;
    }
}
if(exist==0){
    let prenom = prompt("Saisissez un prenom");
    let mdp = prompt("Saisissez un mot de passe");
    let age = prompt("Saisissez un age");
    let ajouter = [prenom, id, mdp, age];
    users.push(ajouter);
    alert("L'utilisateur a bien été ajouté");
}
document.writeln(users);

//EXO2: Ecrire un programme qui permet de supprimer un utilisateur du tabeau users à l'aide de son identifiant
document.writeln("EXO2<br><br>");
// document.writeln(users, "<br>");
// let id = prompt("Saisissez votre mail");
// let sup = false;
// for(i=1; i<users.length;i++){
//     if(id==users[i][1]){
//         let conf = confirm("voulez vous vraiment supprimer ce mail "+ id);
//         if(conf==true){
//                     users.splice(i,1),
//                     alert(id + " a bien ete supprimé");
//         }else{
//             alert("Aurevoir");
//         }  
//         sup = true;      
//         break;

//     }
// }
// if(sup==false){
//     alert(" cet identifiant n'existe pas ");
// }
// document.writeln(users, "<br>");

//EXO3 ecrire un programme pour la connexion, affiche connexion réussie si l'identifiant existe dans le tableau et que le mdp correspond, sinon affiche identifiant ou mdp incorrect dans les autres cas.
document.writeln("EXO3<br><br>");
// let id = prompt("Entrez votre mail");
// let mdp = prompt("Entrez votre mot de passe");
// let connexion = false;
// for(i=0;i<users.length;i++){
//     if(id==users[i][1] && mdp==users[i][2]){
//         alert("connexion réussie");
//         connexion=true;
//         break;
//     }
// }
// if(connexion==false){
//     alert("identifiant ou mot de passe incorrect");
// }

//EXO4 ecrire un programme pour modifier le mdp d'un utilisateur à l'aide de son identifiant.
//si l'identifiant et le mdp actuel ne sont pas conformes, on ne modifie pas
//si le nouveau mdp est identique au mdp actuel aussi on ne modifie pas
document.writeln("EXO4<br><br>");
// let id = prompt("Entrez votre mail");
// let mdp = prompt("Entrez votre mot de passe");
// let connexion = false;
// for(i=0;i<users.length;i++){
//     if(id==users[i][1] && mdp==users[i][2]){
//         connexion=true;
//         let mdp2 = prompt("Entrez votre nouveau mot de passe");
//         if(mdp2==users[i][2]){
//             alert("ECHEC Mot de passe identique à l'actuel");
//             break;
//         }else{
//             users[i][2]=mdp2;
//             alert("Modification réussie");
//             break;
//         }
//     }
// }
// if(connexion==false){
//     alert("identifiant ou mot de passe incorrect");
// }

//EXO5 ecrire un programme qui cherche et affiche toutes les informations de l'utilisateur le plus agé, le moins agé et celui dont l'age est le plus proche de la moyenne.
document.writeln("EXO5<br><br>");
let maxAge = 0;
let minAge = Number(users[1][3]);
let somme = 0;
let pmaxAge, pminAge;
for(i=1;i<users.length;i++){
    if(Number(users[i][3])>maxAge){
        maxAge= Number(users[i][3]);
        pmaxAge = i;
    }
    if(Number(users[i][3])<minAge){
        minAge= Number(users[i][3]);
        pminAge = i;
    }
    somme+=Number(users[i][3]);
}

// for(i=1;i<users.length;i++){
//     if(i==pmaxAge || i== pminAge || i==ipp){
//         for(j=0;j<users[i].length;j++){
//             switch(j) {
//                 case 0 : document.writeln("<b>",users[0][0].toUpperCase(),"</b> : ", users[i][j], "<br>");
//                     break;
//                 case 1 : document.writeln("<b>",users[0][1].toUpperCase(),"</b> : ", users[i][j], "<br>");
//                 break;
//                 case 2 : document.writeln("<b>",users[0][2].toUpperCase(),"</b> : ", users[i][j], "<br>");
//                 break;
//                 default : document.writeln("<b>",users[0][3].toUpperCase(),"</b> : ", users[i][j], "<br>");
//             }
//         }
//     }
//     document.writeln("<br>");
// }

// //____________________________________________________________________________

// document.writeln("<h2>11 Les fonctions</h2>");
// //fonction sans arguments ni return
// function bonjour(){ //déclaration de la fonction
//     document.writeln("<h3>Je suis une fonction JS</h3>");
// }
// //Pour executer une fonction, on l'appelle
// //bonjour(); //Appel à la fonction
// for(i=0;i<5;i++){ //On peut appeler une fonction autant de fois que necessaire
//     bonjour();
// }

// //fonction sans arguments mais avec un return
// function nommer(){
//     let nom = prompt("Saisissez votre nom");
//     return nom; //le return de la fonction
// }
// //let nom = nommer(); //On récupère le return de la fonction
// //document.writeln("Bonjour ", nom, "<br>"); //Et on l'affiche

// //fonction avec arguments et sans return
// function comparer(a, b){
//     if(a>b){
//      document.writeln(a, " est supérieur à ", b, "<br>");
//     }else if(a==b){
//         document.writeln(a, " est égale à ", b, "<br>");
//     }else{
//         document.writeln(a, " est inférieur à ", b, "<br>");
//     }
// }
// comparer(5, 4); 
// comparer(2, 8); 
// comparer(7, 7); 

// fonction avec argument et return
// function carre(a){
//     return a*a;
// }
// b= 7;
// nbr = carre(b);
// document.writeln("le carré de ", b, " est de ", nbr, "<br>");

//EXO: Ecrire une fonction qui demande à l'utilisateur de saisir un nombre et retourne le nombre
//Ecrire les fonctions addition, soustraction, multiplication et division en faisant appel à la premiere fonction et affiche les resultats des opérations.
//Ecrire une fonction qui demande à l'utilisateur de choisir son opération et appelle la fonction correspondante ou q pour quitter
//Faites appel à la derniere fonction pour repeter les opérations autant de fois que necessaire tant l'utilsateur n'a pas saisi q.

function saisie(){
    let a = Number(prompt("Saisissez un nombre"));
    return a;
}

function addition(){
    let a = saisie();
    let b = saisie();
    let resultat = a+b;
    alert(a+ " + "+ b+ " = "+ resultat);
}
function soustraction(){
    let a = saisie();
    let b = saisie();
    let resultat = a-b;
    alert(a+ " - "+ b+ " = "+ resultat);
}
function multiplication(){
    let a = saisie();
    let b = saisie();
    let resultat = a*b;
    alert(a+ " x "+ b+ " = "+ resultat);
}
function division(){
    let a = saisie();
    let b = saisie();
    if(b==0){
        alert("Division impossible");
    }else{
        let resultat = a/b;
        alert(a+ " / "+ b+ " = "+ resultat);
    }
}

function operation(){
    let operateur = prompt("Choisissez une opération + - / * ou q pour quitter");
    if(operateur=="+"){
        addition();
        return true;
    }else if(operateur=="-"){
        soustraction();
        return true;
    }else if(operateur=="*"){
        multiplication();
        return true;
    }else if(operateur=="/"){
        division();
        return true;
    }else if(operateur=="q"){
        alert("Au revoir");
        return false;
    }else {
        alert("Opération inexistant");
        return true;
    }
}

// let ope;
// do{
//     ope = operation();
// }while(ope==true);

let f = function (){
    document.writeln("<h3>Je suis une fonction anonyme</h3>");
}
f();
//-----------------------------------les fonctions flechees--------------------------------------
//les fonctions flechees sont des fonctions anonymes
let ff = ()=>{
    document.writeln("<h3>Je suis une fonction flechee </h3>");
}
ff(); //appel à la fonction

const tablem = (a)=>{
    document.writeln("<br>LA TABLE DE ", a, "<br>");
    for(i=1;i<=12;i++){
        document.writeln(a, " x ", i, " = ", a*i, "<br>");
    }
}
//let n = 1;
// while(n<=10){
//     tablem(n);
//     n++;
// }
for(j=1;j<=3;j++){
    tablem(j);
}

const bienvenue = ()=>{
    let prenom = prompt("Entrez votre prenom");
    let nom = prompt("Entrez votre nom");
    alert("Bienvenue "+ prenom+ " "+ nom);
}
// bienvenue();

//EXO: Réaliser le programme de l'eval d'algo exo 6
/*--------------------------------ALGO 6--------------------------------*/
//Saisie des employés
// nbr = Number(prompt("Entrez le nombre d'employés"));
// let employes = [
//     []
// ];
// for (i = 0; i < nbr; i++) {
//     let prenom = prompt("Entrez le prénom de l'employé "+ (i+1));
//     let nom = prompt("Entrez le nom  de l'employé "+(i+1));
//     let adresse = prompt("Entrez le adresse de l'employé "+(i+1));
//     let telephone = prompt("Entrez le numero de telephone de l'employé "+(i+1));
//     let annee = prompt("Entrez le année d'embauche de l'employé "+(i+1));
//     let salaire = prompt("Entrez le salaire de l'employé "+(i+1));
//     let employe = [prenom, nom, adresse, telephone, annee, salaire];
//     employes[i] = employe;
// }
//Affichage des employés
function affichage(employes) {
    for (i = 0; i < employes.length; i++) {
        for (let j = 0; j < employes[i].length; j++) {
            if (j == 0) {
                document.writeln("<b>Prenom: </b>", employes[i][j], "<br>");
            } else if (j == 1) {
                document.writeln("<b>Nom: </b>", employes[i][j], "<br>");
            } else if (j == 2) {
                document.writeln("<b>Adresse: </b>", employes[i][j], "<br>");
            } else if (j == 3) {
                document.writeln("<b>Telephone: </b>", employes[i][j], "<br>");
            } else if (j == 4) {
                document.writeln("<b>Année d'embauche: </b>", employes[i][j], "<br>");
            } else {
                document.writeln("<b>Salaire: </b>", employes[i][j], "<br>");
            }
        }
        document.writeln("<br>");
    }
}
document.writeln("<br>_________________AFFICHAGE LISTE DES EMPLOYES_________________________<br>");
//affichage(employes);
document.writeln("<br>__________________________________________<br>");
function ajouterEmploye(employes) {
    alert("Ajouter un employé");
    let prenom = prompt("Entrez son prénom");
    let nom = prompt("Entrez son nom");
    let adresse = prompt("Entrez son adresse");
    let telephone = prompt("Entrez son numero de telephone");
    let annee = prompt("Entrez son année d'embauche");
    let salaire = prompt("Entrez son salaire");
    employe = [prenom, nom, adresse, telephone, annee, salaire];
    employes.push(employe);
    return employes;
}
document.writeln("<br>___________________AJOUTER EMPLOYE_______________________<br>");
//employes = ajouterEmploye(employes);
//affichage(employes);
document.writeln("<br>__________________________________________<br>");
//fonction changer salaire
function changerSalaire(tab) {
    alert("Changer le salaire d'un employé!");
    let telEmploye = prompt("Entrez le numero de telephone de l'employé");
    for (i = 0; i < tab.length; i++) {
            if (tab[i][3] == telEmploye) {
                let nouveauSalaire = prompt("Entrez le nouveau salaire");
                tab[i][5] = nouveauSalaire;
            }
    }
    return tab;
}
document.writeln("<br>__________________CHANGER DE SALAIRE________________________<br>");
//employes = changerSalaire(employes);
//affichage(employes);
document.writeln("<br>__________________________________________<br>");

//fonction recherche année d'embache
function rechercheAnnee(tab) {
    alert("Recherche année d'embauche");
    let anneeEm = prompt("Saisissez une année");
    for (i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
            if (tab[i][j] == anneeEm) {
                document.writeln("Prenom: ", employes[i][j - 4], "<br>");
                document.writeln("Nom: ", employes[i][j - 3], "<br>");
                document.writeln("Adresse: ", employes[i][j - 2], "<br>");
                document.writeln("Telephone: ", employes[i][j - 1], "<br>");
                document.writeln("Année d'embauche: ", employes[i][j], "<br>");
                document.writeln("Salaire: ", employes[i][j + 1], "<br>");
            }
        }
        document.writeln("<br><br>");
    }
}
document.writeln("<br>__________RECHERCHE ANNEE D EMBAUCHE______________<br>"); 
//rechercheAnnee(employes);
document.writeln("<br>__________________________________________<br>");

//Fonction ajout multiple
function ajoutMultiple(tab) {
        alert("Ajout multiple");
    let nbr = Number(prompt("Saisissez le nombre d'employé à ajouter"));
    do {
        tab = ajouterEmploye(tab);
        nbr--;
    } while (nbr > 0);
    return tab;
}
document.write("<br>_________________AJOUT MULTIPLE_________________________<br>");
//employes = ajoutMultiple(employes);
//affichage(employes);

//____________________________________________________________________________

document.writeln("<h2>12 Les objets</h2>");
//premiere methode, création direct d'un objet
let personne = {
    Nom: "Doe",
    Prenom : "John",
    Age : 35,
    Passions: ["voyage", "lecture", "cinema"],
    //Utilisation du this dans l'objet ne marche pas
}
//console.log(personne);
console.log(personne.Nom);
console.log(personne.Prenom);
console.log(personne.Age);
for(a of personne.Passions){
    console.log(a);
}

//Deuxieme methode, création d'un objet grace aux fonctions comme constructeur
function employe(prenom, nom, salaire){
    this.prenom = prenom;
    this.nom = nom;
    this.salaire = salaire;
    this.changerSalaire = changerSalaire;
    function changerSalaire(nouveauSalaire){
        this.salaire = nouveauSalaire;
    }
}
//On utilise l'instruction new pour creer des objets
let e1 = new employe("David", "Mulot", 3000);
console.log(e1.prenom);
console.log(e1.nom);
console.log(e1.salaire);
document.writeln(e1.prenom, " ", e1.nom, " ", e1.salaire, "€ <br>");
e1.changerSalaire(3200);
document.writeln(e1.prenom, " ", e1.nom, " ", e1.salaire, "€ <br>");

//Troisieme methode, creer des objets avec l'instruction class
//Il est recommandé de nommer ses class avec une premiere lettre majuscule
// class Animal {
//     constructor(nom){
//         this.nom = nom;
//     }
//     parler(){
//         document.writeln("Je parle la langue des ", this.nom, "s. <br>");
//     }
// }
// const a1 = new Animal("chien");
// console.log(a1);
// a1.parler();
//____________________________________________________________

class Rectangle{
    constructor(longueur, largeur){
        this.longueur = longueur;
        this.largeur = largeur;
    }
    perimetre(){
        return (this.longueur+this.largeur)*2;
    }
    surface(){
        return this.longueur*this.largeur;
    }
}
let rec1 = new Rectangle(10, 7);
document.writeln("Le perimetre du rectangle est de ", rec1.perimetre(), "<br>");
document.writeln("La surface du rectangle est de ", rec1.surface(), "<br>");

// il est recommandé d'utiliser les accesseurs (c'est à dire des geteurs et des seteurs) pour récuperer ou modifier une donnée d'un objet

class Carre{
    constructor(cote){
        this.cote= cote;
    }
    //les accesseurs
    //Get
    get perimetre(){
        return this.calculPerimetre();
    }
    get surface(){
        return this.calculSurface();
    }
    get getCote(){
        return this.cote;
    }
    //set
    set setCote(nouveauCote){
        this.cote = nouveauCote;
    }

    calculPerimetre(){
        return this.cote*4;
    }
    calculSurface(){
        return this.cote*this.cote;
    }
}
let carre1 = new Carre(10);
document.writeln("Le coté du carré est de ", carre1.getCote, "m <br>");
document.writeln("Le perimetre du carré est de ", carre1.perimetre, "m <br>");
document.writeln("La surface du carré est de ", carre1.surface, "m2 <br>");
carre1.setCote = 12; //changer la valeur du coté
document.writeln("Le coté du carré est de ", carre1.getCote, "m <br>");
document.writeln("Le perimetre du carré est de ", carre1.perimetre, "m <br>");
document.writeln("La surface du carré est de ", carre1.surface, "m2 <br>");

document.writeln("<br> <hr> <br>");

//EXO1: creer la class voiture avec son contructeur qui prend en parametre la marque, le modele, la categorie, la motorisation, la boite et la couleur.
//Ecrire les méthodes afficherVoiture et tous les accesseurs.
//ensuite on va creer les objet suivants:
//renault magane citadine, 110dci, automatique, rouge
//citroen C4cactus SUV 120dci manuelle, bleu
//peugot 5008 SUV familiale 136dci automatique gris
//Afficher les 3 voitures
//Modifier les infos des vehicules :
//La renaut devient scenic et une boite manuelle
//la citroen devient une C3 citadine blanche
//la peugeot devient une 306 citandine jaune
//Afficher à nouveau les 3 vehicules
//Creer un tableau contenant les 3 vehicules
//ecrire une fonction permettant d'ajouter une autre voiture saisie par l'utilisateur au tableau
//Afficher le nouveau tableau 
//Rechercher et modifier dans le tableau les infos de la c3 par piccasso berline noir
//Afficher le tableau à nouveau


class Voiture {
    constructor(marque, modele, categorie, motorisation, boite, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.categorie = categorie;
    this.motorisation = motorisation;
    this.boite = boite;
    this.couleur = couleur;
    }
    //get
    get getMarque(){
        return this.marque;
    }
    get getModele(){
        return this.modele;
    }
    get getCategorie(){
        return this.categorie;
    }
    get getMotorisation(){
        return this.motorisation;
    }
    get getBoite(){
        return this.boite;
    }
    get getCouleur(){
        return this.couleur;
    }
    //set
    set setMarque(nouveauMarque){
        this.marque = nouveauMarque;
    }
    set setModele(nouveauModele){
        this.modele = nouveauModele;
    }
    set setCategorie(nouvelleCategorie){
        this.categorie = nouvelleCategorie;
    }
    set setMotorisation(nouveauMotorisation){
        this.motorisation = nouveauMotorisation;
    }
    set setBoite(nouveauBoite){
        this.boite = nouveauBoite;
    }
    set setCouleur(nouvelleCouleur){
        this.couleur = nouvelleCouleur;
    }
    //Afficher
    afficheVoiture(){
        document.writeln("<b>Marque:</b> : ",this.marque, "<br>",
                        "<b>Modele:</b> : ",this.modele, "<br>",
                        "<b>Catégorie:</b> : ",this.categorie, "<br>",
                        "<b>Motorisation:</b> : ",this.motorisation, "<br>",
                        "<b>Boite:</b> : ",this.boite, "<br>",
                        "<b>Couleur:</b> : ",this.couleur, "<br><br>"
        );
    }

}
//creation des 3 objets voitures
let voiture1 = new Voiture("Renault", "Magane", "Citadine", "110dci", "automatique", "rouge");
let voiture2 = new Voiture("Citroen", "C4 cactus", "SUV", "120dci", "manuelle", "bleue");
let voiture3 = new Voiture("Peugeot", "5008", "SUV familiale", "136dci", "automatique", "grise");
//Afficher les voitures
voiture1.afficheVoiture();
voiture2.afficheVoiture();
voiture3.afficheVoiture();
//Modifier les voitures
voiture1.setModele = "scenic";
voiture1.setBoite = "manuelle";
voiture2.setModele = "C3";
voiture2.setCategorie = "citadine";
voiture2.setCouleur = "blanche";
voiture3.setModele = "306";
voiture3.setCategorie = "citadine";
voiture3.setCouleur = "jaune";
//Afficher à nouveau
document.writeln("<hr><br>");
voiture1.afficheVoiture();
voiture2.afficheVoiture();
voiture3.afficheVoiture();
//tableau d'objets
let vehicules = [voiture1, voiture2, voiture3];
//fonction ajouter
function ajouterVoiture(tab){
    let marque = prompt("Entrez la marque du vehicule");
    let modele = prompt("Entrez le modele du vehicule");
    let categorie = prompt("Entrez la catégorie du vehicule");
    let motorisation = prompt("Entrez la motorisation du vehicule");
    let boite = prompt("Entrez la boite du vehicule");
    let couleur = prompt("Entrez la couleur du vehicule");
    let v = new Voiture(marque, modele, categorie, motorisation, boite, couleur);
    tab.push(v);
    return tab;
}
//Appel à la fonction
//vehicules = ajouterVoiture(vehicules);
//Afficher le tableau
document.writeln("<hr><br>");
for(a of vehicules){
    a.afficheVoiture();
}
//Rechercher et modifier dans le tableau les infos de la c3 par piccasso berline noir
for(a of vehicules){
    if(a.getModele == "C3"){
        a.setModele = "Picasso";
        a.setCategorie = "Berline";
        a.setCouleur = "noir";
    }
}
//Afficher à nouveau le tableau
document.writeln("<hr><br>");
for(a of vehicules){
    a.afficheVoiture();
}
//______________________HERITAGE_____________________________
document.writeln("<h2>HERITAGE</h2>");
class Animal {
    constructor(nom){
        this.nom = nom;
    }
    parler(){
        document.writeln("Je parle la langue des ", this.nom, "s. <br>");
    }
}
const a1 = new Animal("chien");
console.log(a1);
a1.parler();

//l'instruction qui permet de faire l'heritage est le extends
class Chien extends Animal {
    parler(){
        document.writeln(this.nom, " Je suis un chien donc j'aboie <br>");
    }
    deplacement(){
        document.writeln(this.nom, " Je me déplace à 4 pattes <br>");
    }
}
const a2 = new Chien("Filou");
a2.parler();
a2.deplacement();

//l'instruction super permet d'integrer le constructeur mere dans le constructeur enfant
class Serpent extends Animal{
    constructor(nom, type){
        super(nom);
        this.type=type;
    }
    parler(){
        document.writeln(this.nom, " Je suis un serpent donc je siffle <br>");
    }
    deplacement(){
        document.writeln(this.type, " Je me déplace en rampant <br>");
    }
}
let a3 = new Serpent("Serpent", "Boa");
a3.parler();
a3.deplacement();

//Heriter d'une classe heritiere
class Reptile extends Serpent{
    constructor(nom, type, couleur){
        super(nom, type);
        this.couleur=couleur;
    }
    deplacement(){
        document.writeln("Je m'appelle ", this.nom, " et je suis un ",this.type, " et je me déplace en rampant avec ma couleur ", this.couleur, "<br>");
    }
}
let a4= new Reptile("reptile", "lezard", "verte");
a4.parler();
a4.deplacement();

//EXO: ecrire une class EtreHumain avec son constructeur qui prend en parametre un poids, une taille et une couleur, mettez en place les accesseurs, une methode pour afficher ses infos et une methode pipi pour decrire comment il fait pipi.
//Faites une class Homme qui herite de la class EtreHumain et qui implémente la méthode pipi et preciser s'il fait pipi debout ou assis.
//Faites pareille pour la class Femme.

//____________________________________Manipulation du DOM____________________________________
document.writeln("<h2>Manipulation du DOM</h2>");
//le querySelector permet de selectionner tout type d'element mais attention, il ne selectionne que le premier element trouvé
// console.log(document.querySelector("h1")); //selectionne le premier h1
// console.log(document.querySelector("h2")); //selectionne le premier h2
// console.log(document.querySelector("p")); //selectionne le premier p
// console.log(document.querySelector('#parag')); //selectionne l'element avec l'id parag
// console.log(document.querySelector('.para')); //selectionne le premier element avec la class para
// console.log(document.querySelector('p span')); //selectionne le premier element avec la class para
// console.log(document.querySelector('ul li:first-child')); //selectionne le premier li de la liste ul
// //Si on veut selectionner toutes les occurences, on utilise querySelectorAll
console.log(document.querySelectorAll("h2")); //selectionne tous les h1
let qs = document.querySelectorAll("h2");
// for(a in qs){
//     console.log(qs[a]); /affiche tous les h2
// }
//console.log(qs[2]); //affiche le troisieme h2

//On peut selectionner les classe par getElementByClassName
//console.log(document.getElementsByClassName("para")); //selectionne tous les elements avec la class para

//On peut selectionner les id par getElementById
//console.log(document.getElementById("parag")); //selectionne l'element avec l'id parag

//On peut selectionner les balises par getElementsByTagName
//console.log(document.getElementsByTagName("h2")); //selectionne tous les h2

const premierH1 = document.querySelector("h1"); //selectionne le premier h1
console.log(premierH1); //affiche le premier h1
premierH1.style.color = "green"; //change la couleur du premier h1 en rouge
premierH1.style.backgroundColor = "yellow"; //change la couleur de fond du premier h1 en jaune
//premierH1.style.fontSize = "100px"; //change la taille de police du premier h1 en 30px
const premierH2 = document.querySelector("h2"); //selectionne le premier h2
premierH2.classList.add(".visuel"); //ajoute la class titre au premier h2


premierH1.textContent = "Je suis un H1 pour la modification du DOM"; //change le texte du premier h1
const para = document.getElementById("parag"); //selectionne l'element avec l'id parag
para.innerHTML += "<span style='color: red;'>.  Je suis un paragraphe insèré depuis le JS</span>"; //change le contenu du paragraphe en ajoutant une balise span avec une couleur rouge

//Les evenements
//Premiere methode
// premierH1.addEventListener("click", ()=>{
//     premierH1.style.visibility = "hidden"; //cache le premier h1
// });
// premierH2.addEventListener("dblclick", ()=>{
//     premierH1.style.visibility = "hidden"; //affiche le premier h1
// });

//Deuxieme methode
function afficher(){
    premierH1.style.visibility = "visible"; //affiche le premier h1
};

function cacher(){
    premierH1.style.visibility = "hidden"; //cache le premier h1
};
premierH1.addEventListener("click", cacher); //ajoute un evenement click au premier h1 qui cache le premier h1
premierH2.addEventListener("dblclick", afficher); //ajoute un evenement double click au premier h2 qui affiche le premier h1

const increment = document.getElementById("increment"); //selectionne l'element avec l'id increment
const plus = document.getElementById("plus"); //selectionne l'element avec l'id plus
const moins = document.getElementById("moins"); //selectionne l'element avec l'id moins
// console.log(increment); //affiche l'element avec l'id increment
// console.log(plus); //affiche l'element avec l'id plus
// console.log(moins); //affiche l'element avec l'id moins
let incre = 0; //initialise la variable i à 0
plus.addEventListener("click", ()=>{
    incre++; //incrémente la variable i de 1
    increment.innerHTML = incre; //affiche la valeur de i dans l'element avec l'id increment
});

moins.addEventListener("click", ()=>{
    incre--; //décrémente la variable i de 1
    increment.innerHTML = incre; //affiche la valeur de i dans l'element avec l'id increment
});

//Mouse enter et mouse leave
const body = document.querySelector("body"); //selectionne le body
body.addEventListener("mouseenter", ()=>{
    body.style.backgroundColor = "white"; //change la couleur de fond du body en bleu clair
});
body.addEventListener("mouseleave", ()=>{
    body.style.backgroundColor = "yellow"; //change la couleur de fond du body en blanc
});

//Mouse down et mouse up
const secondH2 = document.getElementById("deuzio"); //selectionne l'element avec l'id deuzio
secondH2.addEventListener("mousedown", ()=>{
    secondH2.style.backgroundColor = "green"; //change la couleur du second h2 en bleu
    secondH2.style.padding = "20px"; //ajoute un padding de 20px au second h2
});

secondH2.addEventListener("mouseup", ()=>{
    secondH2.style.backgroundColor = "transparent"; //change la couleur du second h2 en transparent
});

//Mouse over et mouse out
para.addEventListener("mouseover", ()=>{
    para.style.backgroundColor = "blueviolet"; //change la couleur de fond du paragraphe en bleuviolet

});

para.addEventListener("mouseout", ()=>{
    para.style.backgroundColor = "transparent"; //change la couleur de fond du paragraphe en transparent
});

//mouse move s'utilise avec l'objet window
const souris = document.getElementById("souris"); //selectionne l'element avec l'id souris
window.addEventListener("mousemove", (element)=>{
    souris.style.left = element.pageX + "px"; //change la position de l'element avec l'id souris en fonction de la position de la souris
    souris.style.top = element.pageY + "px"; //change la position de l'element avec l'id souris en fonction de la position de la souris
    souris.style.transform = "translate(-50%, -75%)"; //centre l'element avec l'id souris
    //console.log(element); //affiche la position de la souris dans la console
});

//Les evenements de clavier
//keydown, keyup, keypress
// body.addEventListener("keypress", (element)=>{
//     if(element.key == "p" || element.key == "P"){ //si la touche p est pressée
//         body.style.backgroundColor = "black"; //change la couleur de fond du body en rose si on appuie sur la touche p
//     } else if(element.key == "b" || element.key == "B"){ //si la touche b est pressée
//         body.style.backgroundColor = "blue"; //change la couleur de fond du body en bleu si on appuie sur la touche b
//     } else if(element.key == "o" || element.key == "O"){ //si la touche r est pressée
//         body.style.backgroundColor = "orange"; //change la couleur de fond du body en orange si on appuie sur la touche o
//     } else if(element.key == "r" || element.key == "R"){ //si la touche r est pressée
//         body.style.backgroundColor = "red"; //change la couleur de fond du body en rouge si on appuie sur la touche r
//     } else if(element.key == "v" || element.key == "V"){ //si la touche v est pressée
//         body.style.backgroundColor = "green"; //change la couleur de fond du body en vert si on appuie sur la touche v
//     } else if(element.key == "y" || element.key == "Y"){ //si la touche y est pressée
//         body.style.backgroundColor = "yellow"; //change la couleur de fond du body en jaune si on appuie sur la touche y
//     } else if(element.key == "w" || element.key == "W"){ //si la touche w est pressée   
//         body.style.backgroundColor = "white"; //change la couleur de fond du body en blanc si on appuie sur la touche w
//     } else if(element.key == "c" || element.key == "C"){ //si la touche c est pressée
//         body.style.backgroundColor = "cyan"; //change la couleur de fond du body en cyan si on appuie sur la touche c
//     }else if(element.key == "m" || element.key == "M"){ //si la touche m est pressée
//         body.style.backgroundColor = "magenta"; //change la couleur de fond du body en magenta si on appuie sur la touche m
//     } else if(element.key == "k" || element.key == "K"){ //si la touche k est pressée
//         body.style.backgroundColor = "black"; //change la couleur de fond du body en noir si on appuie sur la touche k
//     } else if(element.key == "q" || element.key == "Q"){ //si la touche q est pressée
//         body.style.backgroundColor = "transparent"; //change la couleur de fond du body en transparent si on appuie sur la touche q
//     }

// });

//evenement formulaire
// input

const euro = document.getElementById("euro"); //selectionne l'element avec l'id euro
const dollar = document.getElementById("dollar"); //selectionne l'element avec l'id dollar
console.log(euro); //affiche l'element avec l'id euro
console.log(dollar); //affiche l'element avec l'id dollar
let euroversdollar = 1.14; //taux de change euro vers dollar
let dollarverseuro = 0.88; //taux de change dollar vers euro
euro.addEventListener("input", ()=>{
   let valeur = Number(euro.value); //récupère la valeur de l'input euro
   if(typeof(valeur) ==  "number"){
        let resultat = valeur * euroversdollar; //calcule le resultat de la conversion
        dollar.value = resultat; //affiche le resultat dans l'input dollar
        console.log(resultat); //affiche le resultat dans l'input dollar
   } else{
        alert("Erreur de saisie, veuillez saisir un nombre");
   }
});

dollar.addEventListener("input", ()=>{
    let valeur = Number(dollar.value); //récupère la valeur de l'input dollar
    if(typeof(valeur) ==  "number"){
        let resultat = valeur * dollarverseuro; //calcule le resultat de la conversion
        euro.value = resultat; //affiche le resultat dans l'input euro
        console.log(resultat); //affiche le resultat dans l'input euro
    } else{
        alert("Erreur de saisie, veuillez saisir un nombre");
    }
});

//Submit fontion avec un formulaire
const form = document.querySelector("form"); //selectionne le formulaire
const prenomme = document.getElementById("prenom"); //selectionne l'input prenom
form.addEventListener("submit", ()=>{
    event.preventDefault(); //empêche le formulaire de se soumettre
    prenom = prenomme.value; //récupère la valeur de l'input prenom
    alert("Merci" + prenom + "Vitre message a été envoyé!"); //affiche un message de remerciement
});


//focus et blur
prenomme.addEventListener("focus", ()=>{
    prenomme.style.backgroundColor = "yellow"; //change la couleur de fond de l'input prenom en jaune
});
prenomme.addEventListener("blus", ()=>{
    prenomme.style.backgroundColor = "red"; //change la couleur de fond de l'input prenom en rouge
});

//Evenement écran
//scroll et load fonctionnent avec l'objet window
window.addEventListener("scroll", ()=>{
    (window.scrollY > 100) ? body.style.backgroundColor = "red" : body.style.backgroundColor = "transparent"; //change la couleur de fond du body en bleu clair si on scroll plus de 100px
});

//load
window.addEventListener("load", ()=>{
    document.querySelector("audio");//lance la lecture de l'audio au chargement de la page
    alert("La page est chargée!"); //affiche un message d'alerte au chargement de la page
});
//Exo1: Créer 3 boutins bleu, jaune et rouge qui pertte de changer la cour d'un texte de la meme couleur que le bouton.

//EXO2
// Créer deux boutons qui permettent d’augmenter ou de diminuer la taille d’un texte.
// Lorsque l’on clique sur le bouton "Augmenter" :
// Si la taille du texte est inférieure ou égale à 200 px, on l’augmente de 20 px.
// Si la taille dépasse 200 px, elle revient à 20 px au prochain clic.
// Lorsque l’on clique sur le bouton "Diminuer" :


 function changerCouleur(nouvellecouleur){
    let a =documentgetElementById("chcol"); //selectionne l'element avec l'id texte
    a.style.color = nouvellecouleur; //change la couleur du texte
 }
 a = document.getElementById("chcol"); //selectionne l'element avec l'id texte
 let t = "20";
 function grossir(){
    t+=20;
    a.style.fontSize = t + "px"; //change la taille du texte
    (t > 200) ? t = "20" : t; //si la taille du texte est supérieure à 200px, on remet la taille à 20px
 }
function diminuer(){
    t-=20;
   (t<= 20) ? t = "20" : t; //si la taille du texte est inférieure ou égale à 20px, on remet la taille à 20px
    a.style.fontSize = t + "px"; //change la taille du texte
 }
document.write("<br>","<br>","<br>","<br>","<br>","<br>");

//____________________________________________Date et heure________________________________________
document.writeln("<h2>Date et heure</h2>");
let date = new Date(); //création d'un objet date
//console.log(date); //affiche la date actuelle
// console.log(date.getDay()); //affiche le jour de la semaine (0-6)
// console.log(date.getDate()); //affiche le jour du mois (1-31)
// console.log(date.getMonth()); //affiche le mois (0-11)
// console.log(date.getFullYear()); //affiche l'année (4 chiffres)
// console.log(date.getHours()); //affiche l'heure (0-23)
// console.log(date.getMinutes()); //affiche les minutes (0-59)
// console.log(date.getSeconds()); //affiche les secondes (0-59)
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


//___________________________________LES API
document.writeln("<h2>15 Les API</h2>");
//premiere methde traditionnelle
async function testAPI() { //async parceque fetch peret de chercher les resources est une fonction asynchrone
    let promesse = await fetch("https://jsonplaceholder.typicode.com/posts"); //appel de l'api avec le fetch qui vas chercher les ressources, donc il faut tjrs un await vu que fetch est asynchrone
    //console.log(promesse); //affiche la promesse dans la console
    let reponse = await promesse.json(); //transforme la promesse en json
    for(a of reponse){ //parcours le tableau de la reponse
        console.log("id: ", a.id); //affiche chaque element de la reponse dans la console
        console.log("Prenom nom", a.name); //affiche le nom de l'utilisateur
        console.log("Username: ", a.username); //affiche l'email de l'utilisateur
        console.log("_____________________________________________");
    }
    //console.log(reponse); //affiche la reponse dans la console
}
//testAPI(); //appelle la fonction testAPI

//Deuxieme methode 
fetch('https://jsonplaceholder.typicode.com/users') //appel de l'api avec le fetch qui vas chercher les ressources
.then((response) => response.json()) //transforme la reponse en json
.then((data) => { //parcours le tableau de la reponse
    console.log(data); //affiche la reponse dans la console
    for(a of data){ //parcours le tableau de la reponse
        console.log("id: ", a.id); //affiche chaque element de la reponse dans la console
        console.log("Prenom nom", a.name); //affiche le nom de l'utilisateur
        console.log("Username: ", a.username); //affiche l'email de l'utilisateur
        console.log("_____________________________________________");
    }
})
//Exo 'https://restcountries.com/v3.1/all' cette API fournit la liste de tous les pays du monde avec plains d'autres informations.
//Afficher tous les pays avec leur nom, leur capitale et population.
//Afficher les pays dont la population est supérieure à 100 millions d'habitants.
//Afficher toutes les informations de la France.
// fetch('https://restcountries.com/v3.1/all') //appel de l'api avec le fetch qui vas chercher les ressources
// .then((response) => response.json()) //transforme la reponse en json
// .then(data=> { //parcours le tableau de la reponse
//     for(a of data){ //parcours le tableau de la reponse)
        //body.innerHTML += "<b><h3>Nom:</b> " + a.name.common + "</h3>"; //affiche le nom du pays
        //body.innerHTML += "<b>Capitale:</b> " + a.capital + "<br>"; //affiche la capitale du pays
        //body.innerHTML += "<b>Population:</b> " + a.population + "<br>"; //affiche la population du pays
        //console.log(pays); //affiche la reponse dans la console
        // console.log("Nom: ", a.name.common); //affiche le nom du pays
        // console.log("Capitale: ", a.capital); //affiche la capitale du pays
        // console.log("Population: ", a.population); //affiche la population du pays
        // console.log("_____________________________________________");
        //reponse2
//         if(a.name.common == "France"){
//             for(b in a){
//                 console.log(a[b]); //affiche toutes les informations de la France
//             }
//         }
//         if(a.population > 100000000){ //si la population est supérieure à 100 millions
//             body.innerHTML += "<b><h3>Nom:</b> " + a.name.common + "</h3>"; //affiche le nom du pays
//             body.innerHTML += "<b>Capitale:</b> " + a.capital + "<br>"; //affiche la capitale du pays
//             body.innerHTML += "<b>Population:</b> " + a.population + "<br>"; //affiche la population du pays
//             body.innerHTML += "<hr>"; //ajoute une ligne horizontale
//         }

//     }
// });

//EXO: 'https://restcountries.com/v3.1/all' cette API fournit la liste de tous les pays du monde avec pleins d'autres informations.
//Afficher tous les pays avec leurs nom, capitale et population
//Afficher les pays qui font plus de 100millions d'abitant
//Afficher toutes les informations de la France
fetch('https://restcountries.com/v3.1/all')
    .then(reponse=>reponse.json())
    .then(pays=> {
    let pmondial = 0;
    let peurope = 0;
    let pafrique = 0;
    let pasie = 0;
    let pamerique = 0;
    for(a of pays){
        pmondial += a.population;
        if(a.region == "Americas"){ 
            pamerique+=a.population;;
        }else  if(a.region == "Africa"){ 
            pafrique+=a.population;;
        }else  if(a.region == "Europe"){ 
            peurope+=a.population;;
        }else if(a.region == "Asia"){ 
            pasie+=a.population;;
        }
        //for(a of pays){
            //reponse 1
            // body.innerHTML += "<b>Nom:</b> "+a.name.common+"<br>";
            // body.innerHTML += "<b>Capitale:</b> "+a.capital+"<br>";
            // body.innerHTML += "<b>Population:</b> "+a.population+"<br><br>";
            // console.log("Nom: "+a.name.common);
            // console.log("Capitale: "+a.capital);
            // console.log("Population: "+a.population);
            // console.log("_______________________________");
            //reponse2
            // if(a.population > 100000000){
            //     body.innerHTML += "<b>Nom:</b> "+a.name.common+"<br>";
            //     body.innerHTML += "<b>Capitale:</b> "+a.capital+"<br>";
            //     body.innerHTML += "<b>Population:</b> "+a.population+"<br><br>";
            // }
            //reponse3
            // if(a.name.common == "France"){
            //     for(b in a){
            //         console.log(a[b]);
            //     }
            // }
        //}
    }
    document.querySelector('body').innerHTML += "<table border='1' id='tableau' style='width:100%'><tr><th>Nom</th><th>Population</th><th>Pourcentage</th></tr>"; 
    document.querySelector('#tableau').innerHTML += "<tr><td>Monde </td><td>"+pmondial+"</td><td>100%</td></tr>";
    pourcentage = (pasie/pmondial)*100; 
    document.querySelector('#tableau').innerHTML += "<tr><td>Asie </td><td>"+pasie+"</td><td>"+pourcentage.toFixed(2)+"%</td></tr>";
    pourcentage2 = (pafrique/pmondial)*100;
    document.querySelector('#tableau').innerHTML += "<tr><td>Afrique </td><td>"+pafrique+"</td><td>"+pourcentage2.toFixed(2)+"%</td></tr>";
    pourcentage3 = (pamerique/pmondial)*100;
    document.querySelector('#tableau').innerHTML += "<tr><td>Amerique </td><td>"+pamerique+"</td><td>"+pourcentage3.toFixed(2)+"%</td></tr>";
    pourcentage4 = (peurope/pmondial)*100;
    document.querySelector('#tableau').innerHTML += "<tr><td>Europe </td><td>"+peurope+"</td><td>"+pourcentage4.toFixed(2)+"%</td></tr>";
    totalpourcent = pourcentage + pourcentage2 + pourcentage3 + pourcentage4;
    totalpop = pafrique+pamerique+pasie+peurope;
    document.querySelector('#tableau').innerHTML += "<tr><th>Total </th><th>"+totalpop+"</th><th>"+totalpourcent.toFixed(2)+"%</th></tr>";
    // console.log(pmondial);
    // console.log(pamerique);
    // console.log(pafrique);
    // console.log(peurope);
    // console.log(pasie);
    document.querySelector('#tableau').innerHTML += "</table>";

});

//Calculer la population mondiale
//calculer la population du continent européen
//calculer la population du continent africain
//calculer la population du continent asiatique
//calculer la population du continent américain
//Afficher dans un tableau html la population mondiale
//le nom des continents, sa poppulation et son pourcentage par rapport à la population mondiale
// document.writeln("<h2>Exo API</h2>");
// let population = 0; //initialise la variable population à 0
// let europe = 0; //initialise la variable europe à 0
// let afrique = 0; //initialise la variable afrique à 0
// let asie = 0; //initialise la variable asie à 0
// let amerique = 0; //initialise la variable amerique à 
// 0
// fetch('https://restcountries.com/v3.1/all') //appel de l'api avec le fetch qui vas chercher les ressources
// .then((response) => response.json()) //transforme la reponse en json
// .then(data=> { //parcours le tableau de la reponse
//     for(a of data){ //parcours le tableau de la reponse
//         population += a.population; //ajoute la population de chaque pays à la population mondiale
//         if(a.continents[0] == "Europe"){ //si le continent est l'Europe
//             europe += a.population; //ajoute la population de l'Europe à la population européenne
//         } else if(a.continents[0] == "Africa"){ //si le continent est l'Afrique
//             afrique += a.population; //ajoute la population de l'Afrique à la population africaine
//         } else if(a.continents[0] == "Asia"){ //si le continent est l'Asie
//             asie += a.population; //ajoute la population de l'Asie à la population asiatique
//         } else if(a.continents[0] == "Americas"){ //si le continent est l'Amérique
//             amerique += a.population; //ajoute la population de l'Amérique à la population américaine
//         }
//     }
//     body.innerHTML += "<h3>Population mondiale: " + population + "</h3>"; //affiche la population mondiale
//     body.innerHTML += "<h3>Population européenne: " + europe + "</h3>"; //affiche la population européenne
//     body.innerHTML += "<h3>Population africaine: " + afrique + "</h3>"; //affiche la population africaine
//     body.innerHTML += "<h3>Population asiatique: " + asie + "</h3>"; //affiche la population asiatique
//     body.innerHTML += "<h3>Population américaine: " + amerique + "</h3>"; //affiche la population américaine

//     body.innerHTML += "<table border='1'>"; //crée un tableau avec une bordure de 1px
//     body.innerHTML += "<tr><th>Continent</th><th>Population</th><th>Pourcentage</th></tr>"; //crée une ligne d'en-tête pour le tableau
//     body.innerHTML += "<tr><td>Monde</td><td>" + population + "</td><td>100%</td></tr>"; //ajoute une ligne pour la population mondiale
//     body.innerHTML += "<tr><td>Europe</td><td>" + europe + "</td><td>" + ((europe / population) * 100).toFixed(2) + "%</td></tr>"; //ajoute une ligne pour la Africa</td><td>" + afrique + "</td><td>" + ((afrique / population) * 100).toFixed(2) + "%</td></tr>"; //ajoute une ligne pour la population africaine
// });population européenne
//     body.innerHTML += "<tr><td>





document.write("<br>","<br>","<br>","<br>","<br>","<br>");