/*
let promo11 = [

    {
        prenom : "alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]


function ficheEleveDansDOM(tableauPromo11){
tableauPromo11.forEach(eleve => {
   //ecrire leur prenom , leur age et leur ville en console
    ajouterAuBody`${eleve.prenom} , ${eleve.age} , ${eleve.ville} , ${eleve.job}`;
});
}
//prendre les eleve un par un


function ajouterAuBody(trucAafficher){
document.querySelector("body").innerHTML +=  trucAafficher

}

ficheEleveDansDOM(promo11) */

//CORRECTION


let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]

/**
 * role : afficher des fiche eleve dans le dom
 * @param {*} tableauPromo11 
 * return : rien car elle affiche
 */
function ficheEleveDansDOM(tableauPromo11) {

    //prendre les eleves un par un 
    tableauPromo11.forEach(eleve => {
        // ecrtire leur prenom, leur age et leur ville en console 

        //apeller ma fonction dont le rôle est d'envoyer dans le DOM
        ajouterAuBody(`

            <div class="bg-blue text-white mb-50 w-30 txt-center">
                <h2>${eleve.prenom}</h2>
                <p>${eleve.age}</p>
                <p>${eleve.ville}</p>
                <p>Job : ${eleve.job}</p>
            </div>
        
        `)

    });

}


function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

ficheEleveDansDOM(promo11)
 


//Exo 1 V1

let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"],
}

console.log(`
    ${recette.nom}
    difficulte: ${recette.difficulte}
    temp de préparation: ${recette.tempPreparation}
    temp de cuisson: ${recette.tempCuisson}
    pour ${recette.nbrPortions} personne
    liste des ingredients : ${recette.ingredients}
    `);



//Exo 1 V2

let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];

//role : recuperer les recettes une par une pour les afficher
//parametre : le tableau des recettes
//return : rien

function ficheRecette(tableauRecette) {
    let ingredientsListe = "";
    //recuperer les recette une par une
    tableauRecette.forEach(recette => {

        recette.ingredients.forEach(ingredients => {
           ingredientsListe += `<li> ${ingredients}</li>`
        
        });

        //quand il en tiens ine il l'affiche
    ajouterAubody(`

         <div>
    <h2>${recette.nom}</h2>
    <p>difficulte: ${recette.difficulte}</p>
    <p>temp de préparation: ${recette.tempPreparation}</p>
    <p>temp de cuisson: ${recette.tempCuisson}</p>
    <p>pour ${recette.nbrPortions} personne</p>
    <p>liste des ingredients:</p>
    <ul>
    ${ingredientsListe}
    </ul>
  </div>}
    `);
    
});  
}

function ajouterAubody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}
