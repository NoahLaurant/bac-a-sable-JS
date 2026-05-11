/*for(let i=100;i>0;i=i-2){
    console.log(i);
}
*/

//Ecrire une fonction qui affiche la table de mutltiplication d'un nombre passé en paramètre
//role : afficher une table de multiplication
//parametre : nombre
//return : rien
function multiplication(nbr) {
    for (let i= 1; i<=10 ; i++) {
        console.log(`${nbr}*${i}=${nbr*i}`);
    }
}



//Exo Bart

//role : écrire 50 fois une phrase
//parametre : rien
//return : rien car affiche

function punition(){
    //créer une boucle qui tournera 50 fois
    for (let i = 1; i <= 50 ; i++) {
        //ecrit dans la console
        console.log("I will not waste chalk");
        
    }
}



//EXo 6

//role : afficher les lettre une par une
//parametre : mot
//return : rien

function epeler(mot) {
    console.log(`le mot ${mot} contient ${mot.length} lettres`);
    for (let i = 0; i < mot.length; i++) {
        console.log(mot.charAt(i));
        
    }
}


//créer un tableau "panierFruits" contenant 6 fruit

let panierFruits = ["fraise" , "poire" , "pomme" , "banane", "pastèque", "kiwi"]

console.log(`le premier fruit du panier est ${panierFruits[0]} et le dernier est ${panierFruits[panierFruits.length-1]}`);

panierFruits.push("mangue");
console.log(panierFruits);

panierFruits.pop();
console.log(panierFruits);

panierFruits.shift();
console.log(panierFruits);

for(let i = 0 ; i < panierFruits.length ; i++){
    console.log(panierFruits[i]);
}

panierFruits.forEach(fruit => {
    console.log(fruit);
});



//Exo boucle Niv 2

//Exo 2

const tableauNotes = [12,9,15,17,10]

//role : calculer moyenne a partir d'un tableau de note
//parametre : notes
//return : la moyenne

//créer une fonction
function moyenne(tableNote) {
    let somme=0;
//récuperer les notes une par une dans le tableau
tableauNotes.forEach(note => {
    console.log(note)
//quand il en a une, il l'aditionne dnas une variable (a l'origine une variable vide)
somme = somme + note;

});
//on divise la somme obtenu par le nbr de valeur dans le tableau c à d la longueur du tableau
let moyenne = somme/tableauNotes.length;

//retourner le résultat
return moyenne

}

//role : afficher le resultat retourné par la fonction 1
//parametre : du resultat
//return : rien car affiche

function afficheMoyenne(moyenne){
    console.log(`la moyenne de l'elève est : ${moyenne}`);
}

let moyenneEleve = moyenne(tableauNotes);
afficheMoyenne(moyenneEleve);


//Exo 2

// mon tableau représentant mon panier de fruits 
let tabfruit = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", 
"pommes", "poires", "cerises"];

//role : écrire le nbr de fruit qui a 
//parametre : fruit
//return : nbr fruit

//créer une fonction
function panier(tabFruit) {
    let nbrpommes = 0;
    let nbrcerises = 0;
    let nbrpoires = 0;
    let nbrbananes = 0;
    let nbrinconnue = 0;
    
    //récupérer les fruit dzans le tableau
    tabfruit.forEach(fruit => {
        //si pommes alor mettre avec les pommes
    if (fruit==="pommes") {
        nbrpommes++;
    }
    //si poire alors mettre avec les poires
    else if(fruit==="poires"){
        nbrpoires++;
    }
    //si cerises mettre avec les cerises
    else if(fruit==="cerises"){
        nbrcerises++;
    }
    //sinon mettre banane avec bananes
    else if (fruit==="bananes"){
        nbrbananes++;
    }
    else{
        nbrinconnue++;
    }
    });
    return`dans le panier il y a : ${nbrpommes} pommes ,${nbrpoires} poires , ${nbrbananes} bananes , ${nbrcerises} cerises`;
   
}



//Exo 4 : Cesar

//role : remplacer les lettre par celle qui l'eux suivent dans l'alphabet
//parametre : la phrase
//return : le code

//fonction pour fair le code
