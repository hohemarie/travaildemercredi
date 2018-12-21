let monTitre=document.querySelector('h1')
let maVariable;
maVariable = 'Bob';
let maVariable = 'Bob';
maVariable = 'Etienne';
let maVariable = [1,'Bob','Etienne',10];
let maVariable = 3;
maVariable === 4;
!(myVariable=== 3);
maVariable !== 3;
let parfumGlace = 'chocolat';
if (parfumGlace === 'chocolat') {
	alert("J'adore la glace au chocolat !");
}
let mavariable = document.querySelector('h1');
alert('Coucou !');
function multiplier(num1,num2) {
	let resultat = num1 * num2;
	return resultat;
}
multiplier(4,7);
multiplier(20,20);
multiplier(0.5,3);
document.querySelector('html').addEventListener('click', function()
	alert('Aie arretez de cliquer');
document.querySelector('html').addEventListener('click', function() {});
let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
	let monSrc = monImage.getAttribute('src');
	if (monSrc === 'images/firefox2.png');
	}
});
let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');
function definirNomUtilisateur() {
	let monNom = prompt('Veuillez saisir votre nom.');
	localStorage.setItem('nom',monNom);
	monTitre.textContent= 'Mozilla est cool,'+monNom;
}
if (!localStorage.getItem('nom')) {
	definirNomUtilisateur();
} else {
	let nomEnregistre = localStorage.getItem('nom');
	monTitre.textContent = 'Mowilla est cool, ' + nomEnregistre;
}
monBouton.addEventListener('click',function() {
	definirNomUtilisateur();
});

