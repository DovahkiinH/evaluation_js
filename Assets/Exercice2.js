function TableMultiplication(nb){

var nb = window.prompt("Choisissez le chiffre dont vous voulez la table de multiplication : ");

i = 0;

for (i = 0; i <= 10 ; i++)
{
    resultat = i  * nb ;

    alert(i + "x" + nb + " " + "=" + " " + resultat);
}

}

TableMultiplication();