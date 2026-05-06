
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

//role : faire un feu tricolore
//parametre : rien
//return : "je m'arrete", "je freine","je passe" ou "danger : feu déféctueux"

function feuTricolor(){
    
    //on créer une variable feu et on met en valeur le mot "rouge" ou "orange" ou "vert" ou "rien"
    let feu = prompt("de quelle couleur est le feu");
    
    //si le feu est rouge alor "je m'arrête"
    if(feu==="rouge"){
        return console.log("Je m'arrête !");
    } 
        // sinon si le feu est orange alors "je freine !"
        else if(feu==="orange"){
            return console.log("Je freine !");
    }
        //sinon si le feu est vert alor "je passe !"
        else if(feu==="vert"){
            return console.log("Je passe !");
        }
            // sinon "Danger: le feu est déféctueux !"
            else{
                return console.log("Danger: le feu est déféctueux !");
            }

}

let trio = feuTricolor();

console.log(trio);

/*
//correction

//demander a l'utilisateur de quelle couleur est le feu
//role : demander a l'utilisateur de quelle couleur est le 
//parametre : non
//return: la reponse de l'utisateur ( rouge,vert,orange ou quelque chose d'autre)

function demaderCouleur(){
let reponseUtlisateur = prompt("de quel couleur est le feu");
return reponseUtilsateur;
}

// lui indiquer ce qu'il doit faire
//role : Afficher une indication de conduite en fonction de la couleur du feu
//parametre : couleur feu
//return : rien car elle affiche

function afficherInfoConduite(couleurFeu){

//si la couleur du feu est vert -> je passe
if(couleurFeu==="vert"){
    alert("je passe !");
}

//si la couleur du feu est orange -> je freine
else if(couleurFeu==="orange"){
alert("Je freine !");
}

//si la couleur du feu est rouge -> je m'arrete
else if(couleurFeu==="rouge"){
alert("Je m'arrête !");
}

//si la couleur du feu est autre -> Danger : feu defectueux !
else {
    alert("Danger : feu deféctueux");
    }
}

//role : apeller demander couleur puis afficher info
//parametre :
//return : 
function lancerFonction(){
    let couleur = demanderCouleur();
    afficherInfoConduite(couleur);
}

lancerFonction();







*/





//Exo 2

//calculer une moyenne
//role : caculer la moyenne générale de lélève
//parametre : math , français , histoire , svt
//return : la moyenne de l'élève

function moyennegeneral(math,francais,histoire,svt){
   let M  = (math+francais+histoire+svt)/4;
   return M
}





//créer un commentaire
//role : afficher commentaire
//parametre : Moyenne générale
//return : rien

function générercommentaire(M){
    //si la moyenne est inférieur ou égal a 10 alors afficher "il faut travailler plus"
    if(M<=10){
        return "Il faut travailler plus";
    }
        //sinon si la moyenne est de 10 a 13 alors afficher "poursuiver vos efforts"
        else if(M>10 && M<=13){
            return "Poursuiver vos efforts";
        }

            //sinon si la moyenne est de 13 a 15 alors afficher "bon travail"
            else if(M>13 && M<=15){
                return"Bon travail";
            }

                //sinon si la moyenne est de 15 a 17 alors afficher "bravo !"
                else if(M>15 && M<=17){
                    return"Bravo !";
                }

                    //sinon "felicitation !"
                    else{
                        return"Félicitation !";
                    }

}



//editer un bulletin
//role : afficher bulletin
//parametre : la moyenne G et le commentaure
//return :  rien car elle affiche

function Bulletin(commentaire,moyenneG){
    alert(`la moyenne de l'élèbe est : ${moyenneG} et le commentaire est de ${commentaire}`);
}


