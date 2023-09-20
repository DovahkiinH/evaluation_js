function Commande () {

    var PU = window.prompt("Prix Unitaire de ce produit :");
    var QTECOM = window.prompt("La Quantité que vous souhaitez acheter :");
    var TOT = (PU * QTECOM);

    if ((TOT => 100) && (TOT <= 200)) {

        var remise = TOT * 0.05 ;
    
    } else if (TOT> 200)

    {

        var remise = TOT * 0.1;

    }

    else {

        remise = 0;

    }

    var PRIXREM = TOT - remise ;

    if (PRIXREM => 500) {

        var FPORT = 0;

    }else if (PRIXREM < 500) {

        FPORT = 6;

    } else {

        FPORT = Math.max(PRIXREM * 0.02, 6);

    }

    var PRIXFINAL = +PRIXREM + +FPORT;

    alert("La remise est de " + remise + " € soit " + PRIXREM + " € et frais de port de " + FPORT + " € le prix total est de " + PRIXFINAL + "€");
}

Commande();