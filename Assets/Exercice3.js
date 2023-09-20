var tab = ["Audrey" , "Aurélien" , "Flavien" , "Jérémy" , "Laurent" , "Melik" , "Nouara" , "Salem" , "Samuel" , "Stéphane"];


function AjouterPrenom() {

    var prenom = document.getElementById("prenom").value;
    let nouveauPrenom = document.getElementById("prenom");
    tab.push(prenom);
    document.getElementById("prenom").value = "";
    alert("le prénom a était ajouter");

    ActualiserTableau();
}

function SupprimerPrenom() {
    var prenom = document.getElementById("prenom").value;
    var index = tab.indexOf(prenom);

    if (index !== -1) {
        for (var i = index; i < tab.length - 1; i++) {
            tab[i] = tab[i + 1];
        }
        tab[tab.length - 1] = "";
        document.getElementById("prenom").value = "";
        alert("Le prénom a était supprimer");
    } else {
        alert("Le prénom a pas était trouver");
    }

    ActualiserTableau();

    
}

function ActualiserTableau() {

    var listePrenoms = document.getElementById("listePrenoms");
            listePrenoms.innerHTML = "";

            for (var i = 0; i < tab.length; i++) {
                if (tab[i] !== "") {
                    var listItem = document.createElement("li");
                    listItem.textContent = tab[i];
                    listePrenoms.appendChild(listItem);
}

}

}

ActualiserTableau()

SupprimerPrenom()

AjouterPrenom()