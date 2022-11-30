let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" +
    " et" +
    " dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


// Ajouter du code ci-dessous pour réaliser la suite de l'exercice

// Trouver la première position de la lettre i
let position = monTexte.indexOf('i');
let position1 = document.getElementById("position");
    position1.innerHTML = position;
    console.log(position);

let maj = monTexte.toUpperCase();
    console.log(maj);

let chaineMaj1 = document.getElementById("chaineMaj");
    chaineMaj1.innerHTML = maj;

for (let i = 0 ; i < monTexte.length ; i++) {
    if (monTexte[i] === "a") {
        alert("lettre a trouvé");
    }
}









