export function initalModule() {

const contentDiv = document.querySelector('#content');
contentDiv.replaceChildren();
// La div du Titre 
const heading = document.createElement('h1');
const divHeading = document.createElement('div');
divHeading.classList.add('div-heading');
heading.textContent = "GUMBO YAYA";
divHeading.appendChild(heading);
contentDiv.appendChild(divHeading);

// La Div du Sous-Titre
const subTitle = document.createElement('span');
const divSubTitle = document.createElement('div');
const subTitle2 = document.createElement('span');
divSubTitle.classList.add('parent-subtitle');
subTitle.classList.add('child-subtitle');
subTitle2.classList.add('child-subtitle','child-subtitle2');
subTitle.innerHTML = "S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★";
subTitle2.innerHTML = "S O U T H E R N  K I T C H E N  ★  C H I C K E N  A N D  W A F F L E S  ★";
divSubTitle.appendChild(subTitle);
divSubTitle.appendChild(subTitle2);
contentDiv.appendChild(divSubTitle);
// Animation mis en pause à chaque passage de souris


const redFacade = document.createElement('div');
redFacade.classList.add('red-facade');
contentDiv.appendChild(redFacade);

const doorWrapper = document.createElement('div');
doorWrapper.classList.add('door-wrapper');
redFacade.appendChild(doorWrapper);


// derrière la porte
// left door
const leftDoor = document.createElement('div');
leftDoor.classList.add('left-door','door');
doorWrapper.appendChild(leftDoor);
// right door
const rightDoor = document.createElement('div');
rightDoor.classList.add('right-door','door');
doorWrapper.appendChild(rightDoor);
// haut de porte
const topDoor = document.createElement('div')
topDoor.classList.add('top-door');
doorWrapper.appendChild(topDoor);

const orangeWindow = document.createElement('div');
orangeWindow.classList.add('orange-window');
redFacade.appendChild(orangeWindow);

//shapes on the door
const relief = document.createElement('div');
const relief2 = document.createElement('div');
relief.classList.add('door-relief');
relief2.classList.add('door-relief');
leftDoor.appendChild(relief2);
rightDoor.appendChild(relief);

// derrière la vitre
const insideShop = document.createElement('img');
insideShop.src = './assets/2023-09-14.jpg';
orangeWindow.appendChild(insideShop);


}
