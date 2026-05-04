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