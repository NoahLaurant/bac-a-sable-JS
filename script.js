/* console.log("salut" + " Noah"); // console.log ( ) -> ecrit dans la console

let age = 17; // une variable dont le contenu peut évoluer
const vitesseLumiere = 380000; // une variable dont le contenu n'evoluara jamais : une constente

let salut = "bonjour Noah, ça va ?";

let connecte = false;

console.log(connecte);

age = age - 1;

console.log(age); */

//exo 2
let i = 0;

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

//exo 3
let Nom = "Laurant";

let prenom = " Noah";

let nomcomplet = `le prenom est ${prenom} et le nom est ${Nom}`;

console.log(nomcomplet);

//exo 4
 prenom = ` Noah` ;
console.log(`bonjour${prenom}, comment vas tu aujourd'hui`); // concatenation
console.log("bonjour" + prenom + ", comment vas tu aujourd'hui"); // interpolation

// exo 5
let phrase = "salut ça va";
console.log(phrase.length);
console.log( `la phrase : ${phrase} contient ${phrase.length} caractére`);

//exo 6
let mot = "chateau";
console.log(mot.replace("t","p"));

//exo 7
let mot2 = "manger";
console.log(mot2.indexOf("m"));
console.log(mot2[0]);




