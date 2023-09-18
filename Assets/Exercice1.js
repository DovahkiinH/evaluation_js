function Compteur() {

var jeune = 0;
var moyen = 0;
var vieux = 0;

while (true) {

var age = window.prompt("Entrez l'âge de la personne : ")

if (age < 0) {
    break;

}else if (age < 20){

    jeune++;

}else if (age >= 20 && age <= 40 ){

    moyen++;

}else {

    vieux++;
}

if (age >= 100) {
break;

}

}

alert("Il y a " + jeune + " personne de moins de 20 ans , " + moyen + " personne qui ont entre 20 et 40 ans et " + vieux + " qui ont plus de 40ans.");

}

Compteur()