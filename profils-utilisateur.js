// role : questionner l'API
// parametre: 
// retour : 

	 fetch("user.json")
	.then(rep=> {
			return rep.json()
	})
	.then(data=>{
			// a ce niveau on devrait avoir dans la console les données renvoyé par l'API
			console.log(data)
            afficheUtilisateur(data.users)
	});


//role : récupérer les utilisateur 1 par 1 et de les afficher dans le dom
//parametre : du tableau d'utilisateur
//return : rien car elle affiche
function afficheUtilisateur(tableauUtilisateur) {
    tableauUtilisateur.forEach(utilisateur => {
        let utilisateurCard = `
         
        <div class="card w-30">

        <div class="flex space-between align-center">
            <img src="users-images/${utilisateur.image}" alt="" class="w-30 border-radius-15">

            <div class="w-60">

                <h3>${utilisateur.nom}</h3>
                <h3>${utilisateur.prenom}</h3>
                <p>${utilisateur.age}</p>
                <p>${utilisateur.poste}</p>
                
            </div>

        </div>
<p class="mt-20 flex align-center gap-12"><i class="ph ph-envelope-simple"></i>
                ${utilisateur.email}</p>
    
    </div>
        
        `

        document.querySelector("#user-container").innerHTML += utilisateurCard;
    });
}