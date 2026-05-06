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


