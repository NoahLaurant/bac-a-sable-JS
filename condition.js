
//CONDITION 1
//Exo 1

console.log(9 === 10);

//EXO 2

console.log("Hello" !== "hello");

//EXO 3

console.log(8 > 12);


//si b -> bien joué
// sinon -> dommage

let b = 5;
let c = 6;

if (b === c) {
    console.log("bien joué !");
} else {
    console.log("dommage");
}

if (b === c) {
    console.log("c'est pareil");
} else if (b > c) {
    console.log("b est supérieur c");
} else {
    console.log("b est inférieur a c");
}

let connect = true;

if (connect === true) {
    console.log("l'utilisateur est connecté")
} else {
    console.log("l'utilisateur n'est pas connecté")
}


//Exo 4

let a = 15;

if (a % 2 === 0) {
    console.log("paire");
} else {
    console.log("pas paire");
}


//Exo 5
let méteo = 2;
let soleil = 0;
let pluie = 1;
let neige = 2;

if (méteo === 0) {
    console.log("Prends une casquette")
} else if (méteo === 1) {
    console.log("N’oublie pas ton parapluie")
} else {
    console.log("Met des bottes")
}



//Exo 6

let age = 18;

if (age < 12) {
    console.log("tu es un enfant");
} else if (12 <= age && age <= 18) {
    console.log("tu es un adolescent");
} else {
    console.log("tu es un adulte");
}


//Exo 7

let A = 10;
let B = 10;
let C = 10;

if (A === B && A === C) {
    console.log("c'est un triangle équilatéral");
} else if (A !== B && A !== C && B !== c) {
    console.log("c'est un triangle quelconque");
} else {
    console.log("c'est un triangle isocèle");
}


//Exo 8

//role : détermine si une personne est aligible a une reduction
//parametre : age(number), membre(boolean), achat(number)
//return : "reduction accordée" ou "reduction refusée"

function reduction(Age, membre, achat) {
    //si la personne a plus de 18 :
    if (Age > 18) {


        // si la personne est membre ou fait plus de 100€ d'achat
        if (membre === true || achat > 100) {

            //reduction acceptée
            return "reduction acceptée"
        } else {
            //sinon
            //reduction refusée
            return "reduction refusée"
        }
    } else {
        //Sinon:
        //reduction refusée
        return "reduction refusée"
    }
}

let ticket = reduction(19, true, 80);
console.log(ticket)



//CONDITION 2

//Exo 1

//role : 
//parametre :
//return : 

function feuTricolor(){
    
}