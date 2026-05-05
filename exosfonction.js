//Exo 1

//role : calcule moyenne de l'eleve
//parametre : quatre note
//return : la moyenne

function moyenne (a,b,c,d){
    return (a+b+c+d)/4;
}

console.log(moyenne(12,13,7,10));

//Exo 2

//role : décremente -> retirer une pomme au stock
//parametre : rien
//return : rien
let stock = 4;
function soustraction (){
    return stock--;
}
soustraction();
soustraction();
console.log(`mon stock est de ${stock}`);



//Exo 3

//role : afficher derniére caractère d'une phrase
//parametre : une phrase
//return : rien
let phrase = "Bonjour comment allez vous aujourd'hui";
function derniercaractére (){
    let pose = phrase.length-1;
    console.log(phrase[pose]);
}
derniercaractére(phrase);

//exo 4

//role : remplacer le produit bubble tea par un autre
//parametre : le nouveau produit et la liste initiale
//return : rien
    
function nouvelleOffre ( nouveauProduit, listeInitiale){
   console.log(listeInitiale.replace("bubble tea", nouveauProduit));
   
}
nouvelleOffre("matcha","thé,café,bubble tea,tisane");


//exo 5

//role : afficher si l'adresse mail contient ou non un @
//parametre : l'adresse mail a verifier
//return : rien car elle affiche

function verifMail(mailAverif){
    console.log(mailAverif.includes("@"));
}
verifMail("contactgmail.com");


//exo 6

//role : additionner deux nombre
//parametre : deux nombre
//return : le résultat

function addition(a,b){
    return a+b;
}
let resultat = addition(5,5);
console.log(resultat);


//exo 7

//role : poser une question
//parametre : la question
//return : la reponse de l'utilisateur

/*
function Poserquestion(question){
 return prompt(question);
}
let reponse = Poserquestion("est ce que ça va ?");

console.log(reponse);
*/

//exo 8

//role : convertir un prix en dollar
//parametre : le prix a convertir et le taux de change
//return : le prix convertit

function convertion(prix,taux){
    return prix * taux;
}

let resu = convertion(3,1.17);

console.log(`le prix convertit est de ${resu} dollars`);



//role : demander un prix et un taux de change a l'utilisateur et convertit le prix
//parametre : 
//return : prix convertit
/*
function convertisseur(){

    //demande le prix a convertir
    let prix = parseFloat( prompt("quel prix veut tu convertit ?"));
    //demande le taux
   let taux = parseFloat(prompt("quel taux ?"));
    //convertit
    return prix*taux;

    //retourne le resultat
}
let prixConvertit = convertisseur();

alert(`le prix convertit est de ${prixConvertit} dollars`);

*/



//role : demander des notes et fait une moyenne
//parametre :
//return : moyenne

function NoteMoyenne(){
    
    //demande note math et convertir la reponse en type number
    let math = parseFloat(prompt("quelle est ta note de math ?"));

    //demande note français convertir la reponse en type number
    let francais = parseFloat(prompt("quelle est ta note de français ?"));

    //demande note histoire convertir la reponse en type number
    let histoire = parseFloat(prompt("quelle est ta note d'histoire ?"));

    //demande note SVT convertir la reponse en type number
    let SVT = parseFloat(prompt("quelle est ta note de SVT ?"));

    //calcule la moyenne
    return (math+francais+histoire+SVT)/4;
    //retourne le resultat
}

let Nmoyen = NoteMoyenne();

alert(`ta moyenne est de ${Nmoyen}/20`);









//role : afficher des balises am apage html
//parametre : la balise a ajouter
//return rien

function ajouterBalise(balise){
    document.querySelector("body").innerHTML+=balise;
}
ajouterBalise("<h1>Coucou</h1>");
ajouterBalise("<p>on est vraiment trop fort en js</p>");

//role : afficher l'addition de deux chiffres
//parametre : les chiffres a additionner
//return : rien

function afficherAddition(a,b){
    ajouterBalise(`<p> ${a+b}</p>`);
}

afficherAddition(7,5);


//role : afficher le prénom dans le body
//parametre : prenom
//return : rien

function afficherPrenom(prenom){
    ajouterBalise(`<p>${prenom}</p>`)
}
afficherPrenom("David")