const comptes = [];
// Récupérer la balise input
const input = document.getElementById('moi');

// Récupérer le bouton
const bouton = document.getElementById('valider');


bouton.addEventListener('click', function() {
  // Vérifier si la valeur saisie est égale à 1
  if (input.value === '1') {
  // Demander le nom du titulaire du compte
  const nom = prompt('Entrez le nom du titulaire du compte :');
  
  // Demander le prénom du titulaire du compte
  const prenom = prompt('Entrez le prénom du titulaire du compte :');

  // Générer un numéro de compte aléatoire
  const numeroCompte = Math.floor(Math.random() * 10000000000);

  // Créer un nouveau compte avec les informations fournies
  const compte = {
    numero: numeroCompte,
    nom: nom,
    prenom: prenom,
    solde: 0,
    dateCreation: new Date()
  };

  // Ajouter le compte au tableau de comptes
  comptes.push(compte);

  // Afficher le numéro de compte créé à l'utilisateur
  alert(`Le compte ${numeroCompte} a été créé avec succès !`);

 
  };
  if (input.value === '2'){
        // Parcourir le tableau de comptes et afficher les informations de chaque compte
        comptes.forEach(function(compte) {
          console.log(`Date de création : ${compte.dateCreation.toLocaleDateString()}`);
          console.log(`Numéro de compte : ${compte.numero}`);
          console.log(`Titulaire du compte : ${compte.nom} ${compte.prenom}`);
          console.log('------------------------');
        });
      
    
  };

  if (input.value === '3'){
   // Demander le numéro de compte
   const numero = prompt('Entrez le numéro de compte :');
  
   // Rechercher le compte correspondant dans le tableau de comptes
   const compte = comptes.find(function(compte) {
     return compte.numero === parseInt(numero);
   });
 
   // Si le compte existe, afficher le solde, sinon afficher un message d'erreur
   if (compte) {
     alert(`Le solde du compte ${numero} est de ${compte.solde} €`);
   } else {
     alert(`Le numéro de compte ${numero} n'existe pas`);
   }
  
  } 
  if (input.value === '4'){
        // Demander le numéro de compte
        const numero = prompt('Entrez le numéro de compte :');
      
        // Rechercher le compte correspondant dans le tableau de comptes
        const compte = comptes.find(function(compte) {
          return compte.numero === parseInt(numero);
        });
      
        // Si le compte existe, demander le montant du dépôt et effectuer l'opération, sinon afficher un message d'erreur
        if (compte) {
          const montant = parseFloat(prompt('Entrez le montant du dépôt :'));
          compte.solde += montant;
          alert(`Le dépôt de ${montant} € a été effectué sur le compte ${numero}\nNouveau solde : ${compte.solde} €`);
        } else {
          alert(`Le numéro de compte ${numero} n'existe pas`);
        }
      

  }
  if (input.value === '5'){
    
        // Demander le numéro de compte
        const numero = prompt('Entrez le numéro de compte :');
      
        // Rechercher le compte correspondant dans le tableau de comptes
        const compte = comptes.find(function(compte) {
          return compte.numero === parseInt(numero);
        });
      
        // Si le compte existe, demander le montant du retrait et effectuer l'opération, sinon afficher un message d'erreur
        if (compte) {
          const montant = parseFloat(prompt('Entrez le montant du retrait :'));
          if (montant > compte.solde) {
            alert(`Le solde du compte ${numero} est insuffisant`);
          } else {
            compte.solde -= montant;
            alert(`Le retrait de ${montant} € a été effectué sur le compte ${numero}\nNouveau solde : ${compte.solde} €`);
          }
        } else {
          alert(`Le numéro de compte ${numero} n'existe pas`);
        }
      
    
  }
});










