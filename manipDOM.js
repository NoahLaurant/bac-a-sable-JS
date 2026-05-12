/*

//trois manières de séléctionner des éléments dans mon document c à d dans ma feuil

//séléctionner le body et ajouter une div

document.querySelector("body").innerHTML += `
<div>
<p>lorem ipsum dolor lipsu</p>
</div>


let bouton = document.querySelector("#btn")

bouton.addEvenListener("click",ajouteUnParagraphe)

function ajouteUnParagraphe() {
    document.querySelector
}
`
*/

//Exo 1

function bleu (){
    let h1 = document.querySelector("h1");
    h1.style.color = "blue";
    
 
}



//Exo 2

function cacher(){
    let h2 = document.querySelector("#cache");
   h2.classList.toggle("none")
}


//Exo 3

    let divCarre = document.querySelectorAll(".border")


    //je parcours mon tableau de div
    divCarre.forEach(border => {
        border.addEvenListener("click",function(){

            //je reset
            reset()
            //j'ai la boite sur laquelle j'ai cliqué
            console.log(border)
            border.classList.toggle("remplir")
        })
    });

    //role : reset(enleve la class border a toutes les div qui ont la classe boite)
    //parametre : non
    //return : non

    function reset() {
       let Carre =  document.querySelectorAll(".border")
       Carre.forEach(carre => {
        carre.classList.remove("remplir")
       })
    }




    //Exo 4
    let nombre = 0;
    let bouton = document.querySelector("btn2");
    let compteur = document.querySelector("#compteur");

    compteur.addEventListener("click",function(){
        nombre++;
        compteur.innerHTML = nombre;
    })



    //Exo 5
    



    