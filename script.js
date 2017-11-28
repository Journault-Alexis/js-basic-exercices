/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {
	alert("hello world");
};
hello();

// ----
// écrire des fonctions suivante:
// addition(a, b)
// soustraction(a, b)
// multiplication(a, b)
// division(a, b)
// concatenation(str1, str2)
// moyenne(a1, a2, a3)

// Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat. 
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console
 
// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
var a, b;
a=5;
b=12;
function addition() {
	var add = a+b;
	return add;
};
console.log(addition(a, b));

function soustraction(){

	var sous = a-b;
	return sous;
};
console.log(soustraction(a, b));

function multplication(){

	var mult = a*b;
	return mult;
};
console.log(multplication(a, b));
function division(){
	var div = a/b;
	return div;
};
console.log(division(a, b));

var str1, str2;

function concatenation(){

var concat = str1+str2;
return concat;
};
console.log(concatenation(a,b));

var a1,a2,a3;
function moyenne () {
var moy = (a1+a2+a3)/3;
return moy;
}
console.log(moyenne(a1, b));


var temp = b;
b = a;
a = temp;



console.log ("A vaut : "+a+" et B vaut "+b);

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
// Cette fonction doit renvoyer un booléen

function isDivisibleBy5(x) {
if (x%5 === 0){
	return true;
}	
return false;

};

console.log (isDivisibleBy5(22));
// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
// Cette fonction doit renvoyer un booléen
function isDivisibleByN(x, n) {
if (x%n === 0){
	return true;
}
return false;
}


// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console
function genereEtArrondit() {
   var X = Math.random();
   return X.toFixed(2);
  }
  console.log (genereEtArrondit());

/**
* Exercices sur les chaînes de caractères
**/



// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la première occurence de la lettre 'e' dans cette chaîne

function firstPosition() {
	var str = "alexis";
	return str.charAt(0);
	 }
	 console.log (firstPosition());



// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position 
// de la dernière occurence de la lettre 'e' dans cette chaîne

function lastPosition() {
	var str = "alexis";
	return str.charAt(str.length-1);
	 }
	 console.log (lastPosition());


// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière, 
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase

function wordInTab() {
 	var quote = "alexis est super content de boire du café";
 	var myArray = [];
 	myArray = quote.split(" "); 		
 		for (i = 0; i<myArray.length-1; i++) {
 		 console.log (myArray[i]);
 	}
 			return myArray[i];
 }
 	console.log  (wordInTab());
 		  
// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme 
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne

function majusculeFirst () {

	var nom="jacques";
	return nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase();

	}

 	console.log  (majusculeFirst());


/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux

function stockId (){
var firstName = prompt("Please enter your firstName");
var lastName = prompt("Please enter your lastName");

alert(firstName + lastName);
}


stockId();
// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console


function numAffiche (){
var numb= prompt("Please enter a number :");


alert(numb);
}

numAffiche();





// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs


/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales: 
var numTab = [45, 99, 357, -33, 1, 8, -78];
function computeSumOfArray(tab) {
	// WRITE YOUR CODE HERE
};

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// 	- construire un tableau vide initialement
// 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console

// 2)
// 	- reprendre le tableau construit précédemment
// 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
// Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Sur 50 itérations:
//     - générer un entier de façon aléatoire
//     - si l'entier est divisible par 5, le stocker dans le tableau
// Afficher avec une boucle for le contenu du tableau dans la console


/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriéts: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

// ----
// Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet 
var getObjLength = function(obj) {
	// WRITE YOUR CODE HERE
};
// Tester cette fonction avec un objet de votre choix que vous aurez écrit

// ----
// Pour résoudre les exercices précédents vous avez écrit des fonctions.
// Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
// - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
// - la valeur de la propriété est la fonction qui résoud l'exercice N