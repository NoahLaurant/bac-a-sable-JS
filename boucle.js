/*for(let i=100;i>0;i=i-2){
    console.log(i);
}
*/

//Ecrire une fonction qui affiche la table de mutltiplication d'un nombre passé en paramètre
//role : afficher une table de multiplication
//parametre : nombre
//return : rien
/*
function multiplication(nbr) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${nbr}*${i}=${nbr * i}`);
    }
}



//Exo Bart

//role : écrire 50 fois une phrase
//parametre : rien
//return : rien car affiche

function punition() {
    //créer une boucle qui tournera 50 fois
    for (let i = 1; i <= 50; i++) {
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

let panierFruits = ["fraise", "poire", "pomme", "banane", "pastèque", "kiwi"]

console.log(`le premier fruit du panier est ${panierFruits[0]} et le dernier est ${panierFruits[panierFruits.length - 1]}`);

panierFruits.push("mangue");
console.log(panierFruits);

panierFruits.pop();
console.log(panierFruits);

panierFruits.shift();
console.log(panierFruits);

for (let i = 0; i < panierFruits.length; i++) {
    console.log(panierFruits[i]);
}

panierFruits.forEach(fruit => {
    console.log(fruit);
});



//Exo boucle Niv 2

//Exo 2

const tableauNotes = [12, 9, 15, 17, 10]

//role : calculer moyenne a partir d'un tableau de note
//parametre : notes
//return : la moyenne

//créer une fonction
function moyenne(tableNote) {
    let somme = 0;
    //récuperer les notes une par une dans le tableau
    tableauNotes.forEach(note => {
        console.log(note)
        //quand il en a une, il l'aditionne dnas une variable (a l'origine une variable vide)
        somme = somme + note;

    });
    //on divise la somme obtenu par le nbr de valeur dans le tableau c à d la longueur du tableau
    let moyenne = somme / tableauNotes.length;

    //retourner le résultat
    return moyenne

}

//role : afficher le resultat retourné par la fonction 1
//parametre : du resultat
//return : rien car affiche

function afficheMoyenne(moyenne) {
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
        if (fruit === "pommes") {
            nbrpommes++;
        }
        //si poire alors mettre avec les poires
        else if (fruit === "poires") {
            nbrpoires++;
        }
        //si cerises mettre avec les cerises
        else if (fruit === "cerises") {
            nbrcerises++;
        }
        //sinon mettre banane avec bananes
        else if (fruit === "bananes") {
            nbrbananes++;
        }
        else {
            nbrinconnue++;
        }
    });
    return `dans le panier il y a : ${nbrpommes} pommes ,${nbrpoires} poires , ${nbrbananes} bananes , ${nbrcerises} cerises`;

}



//Exo 4 : Cesar


//role : encoder un message
//parametre : le mot a encoder
//return : lot chiffré

//fonction pour faire le code

function codeCesar(motAencoder) {

    //un alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let motEncode = "";

    //récupérer les lettres du mot une par une
    for (let i = 0; i < motAencoder.length; i++) {

        let lettreEncode = "";
        //on stocke le charactère a la position i du mot
        let lettreActuelle = motAencoder.charAt(i);
        console.log(lettreActuelle);

        if (lettreActuelle === "z") {
            lettreEncode = "a";
        }
        else {

            //quand il aura récupérer une lettre il chercher la position de cette lettre dans l'alphabet -> stock dna une variable posLettreActuelle
            let posLettreActuelle = alphabet.indexOf(lettreActuelle);
            console.log(posLettreActuelle);

            //va cherche la lettre a la position suivante
            lettreEncode = alphabet[posLettreActuelle + 1]
            console.log(lettreEncode)
            //stock dans une variable pour recomposer le mot encoder

        }
        motEncode = motEncode + lettreEncode;
    }


    //return le mot encodé
    return motEncode;
    console.log(motEncode)

}


//role : afficher le mot encoder
//parametre : mot encoder
//return : rien

function AficheDansBody(trucAafficher) {
    document.querySelector("body").innerHTML += `<p> ${trucAafficher} </p>`

}

function scenariO(motAencoder) {
    let motEncode = codeCesar(motAencoder);
    AficheDansBody(motEncode)
}


*/



//Exo 5: jackpot

//créer une fonction
//role : choisir 3 emojis
//parametre : tableau avec tous les emojis possibles (entre 3 et 5)
//return : les 3 emojis sélectionner

function emojiAlea(tableauEmoji){

    //créer un tableau d'emoji

    //tirer 3 chiffre aleatoirement ->Math.floor(Math.random()*3)

    //attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va chercher l'emoji a la position 0 dans le tableau

    //stocker mes emojis dans une boite -> je reconstruit un tableau avec les emoji piochés

    //retourner les emojis pioché

}

//role : comparer les emojis pour définir si victoire
//parametre : les emojis piochés -> un tableau
//return : true/false -> boolean


//role : afficher le resultat dna sle body
//parametre : les emojis pioché , et le résultat
//return : rien car elle affiche

/*
Créer une machine à Jackpot qui affiche 4 emojis. 
Si les emojis sont identiques : Afficher  `jackpot !` 
Sinon, afficher `perdu !`
Indice : il faudra utiliser `Math.floor` et `Math.random`
*/

// créer une fonction 
// role : choisir 3 emojis
//parametre : tableau avec tous les emojis possibles (entre 3 et 5)
//return : les 3 emojis selectionné 

//créer le tableau d'emoji 
let emojisArray = ["🦊", "🐺", "🦁", "🐶", "🐻‍❄️"]

function emojiAlea(tableauEmojis) {

    let emojisPioche = []

    //va répéter le code 3 fois (tant que i est inférieur a 3)
    for (let i = 0; i < 3; i++) {

        //tirer 1 chiffre aleatoirement Math.floor(Math.random()*3)
        let chiffreAleatoire = Math.floor(Math.random() * tableauEmojis.length)

        //attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va charcher l'emoji a la position 0 dans le tableau 
        let emojiPioche = tableauEmojis[chiffreAleatoire];

        //stocker mes emojis dans une boite -> je reconstruit un tableau avec les emoji piochés
        emojisPioche.push(emojiPioche)

    }
    //retourner les emojis pioché
    return emojisPioche;
}

//role : comparer les emojis pour définir si victoire 
//parametre : les emojis piochés -> un tableau
//return : true/false -> boolean
function comparerEmojisPioche(emojisPioche) {


    // si le premier emojis du tableau est identique au deuxieme ET le deuxieme au troisieme ET le premier au troisieme alors il sont tous identique -> victoire (true)
    if (emojisPioche[0] === emojisPioche[1] && emojisPioche[1] === emojisPioche[2] && emojisPioche[0] === emojisPioche[2]) {
        return true;
    }
    // sinon, défaite (false)
    else {
        return false;
    }
}

//role : afficher la resultat dans le body 
//parametre : les emojis pioché, et le résultat
//return : rien car elle affiche
function afficherResultat(emojisPioche, resultat) {

    if (resultat === true) {
        ajouterAuBody(`
        <div> 
            <p> Votre pioche. : </p>
            <span>${emojisPioche[0]}</span>
            <span>${emojisPioche[1]} </span>
            <span>${emojisPioche[2]}</span>

            <p> Victoire ! </p>
        </div>   
        `) 
    }
    else {
        ajouterAuBody(`
        <div> 
            <p> Votre pioche. : </p>
            <span>${emojisPioche[0]}</span>
            <span>${emojisPioche[1]} </span>
            <span>${emojisPioche[2]}</span>

            <p> Dommage, retente ta chance ! </p>
        </div>   
        `) 
    }


}


//role : Ajouter des élements au body
//parametre : ce qu'il faut afficher 
//return : rien car elle affiche dans le body
function ajouterAuBody(trucAafficher) {

    document.querySelector("body").innerHTML += trucAafficher

}

function scenario(tableauEmojis){
    let emojisPioches = emojiAlea(tableauEmojis);
    let conclusionResultat = comparerEmojisPioche(emojisPioches);
    afficherResultat(emojisPioches, conclusionResultat)
}

scenario(emojisArray)