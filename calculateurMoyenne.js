let français = 12;
let math = 9;
let géographie = 15;
let musique = 18;
let moyenne = (français + math + géographie + musique)/4;
console.log(moyenne);

//role : ecrire dans la console
//parametre : prenom de la personna a saluer
//retourner : rien

function direbonjour (prenom) {
    console.log(`bonjour ${prenom}`);
}
// j'apelle / je lance ma fonction
direbonjour("Noah");

//role :additionner deux chiffres
//parametre : deux chiffres
//return : le resultat

function somme (a , b){
    return a+b;
}
console.log(somme(10,15));