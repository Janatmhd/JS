// Vous devez réaliser un programme pour automatiser les ventes de Mme Madame Potier, elle saisit les quantités achetées pour chaque article pour voir le prix total pour cet article et lorsqu’elle clique sur un bouton, elle peut avoir la facture avec les prix ht, tva, ttc.  
// Voici la liste des articles de la boutique et leurs prix: 
// Cravate 10€,  ceinture 20€, casquette 30€, écharpe 15€, foulard 25€. Voir image ci-dessous. 
function genererFacture() {
  const prix = {
    cravate: 10,
    ceinture: 20,
    casquette: 30,
    echarpe: 15,
    foulard: 25
  };

  let ht = 0;
  const tva = 0.2;
  let result = '';

  for (let article in prix) {
    let qte = parseInt(document.getElementById(article).value);
    if (qte > 0) {
      let total = qte * prix[article];
      ht += total;
      result += article + ': ' + qte + ' x ' + prix[article] + '€ = ' + total + '€<br>';
    }
  }

  let montantTVA = ht * tva;
  let ttc = ht + montantTVA;

  result += '<br>Total HT: ' + ht + '€<br>';
  result += 'TVA (20%): ' + montantTVA.toFixed(2) + '€<br>';
  result += 'Total TTC: ' + ttc.toFixed(2) + '€';

  document.getElementById('facture').innerHTML = result;
}
