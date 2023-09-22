import yelpImg from './assets/Yelp.png';

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

const hoursGraff = document.createElement('p');
hoursGraff.classList.add('hours-graff');
hoursGraff.innerHTML = '<h2>MONDAY<br>to FRIDAY</h2>12:00AM-2:15PM<br>7:30PM-10:30PM<br><br><h2>SATURDAY</h2>12:00AM-2:15PM<br>7:30PM-10:30PM<br><br><h2>SUNDAY</h2>12:00AM-3:00PM';
redFacade.appendChild(hoursGraff);

const doorWrapper = document.createElement('div');
doorWrapper.classList.add('door-wrapper');
redFacade.appendChild(doorWrapper);

// left door
const leftDoor = document.createElement('div');
leftDoor.classList.add('left-door','door');
doorWrapper.appendChild(leftDoor);
// right door
const rightDoor = document.createElement('div');
rightDoor.classList.add('right-door','door');
doorWrapper.appendChild(rightDoor);
// haut de porte
const topDoor = document.createElement('div');
topDoor.classList.add('top-door');
doorWrapper.appendChild(topDoor);

const orangeWindow = document.createElement('div');
orangeWindow.classList.add('orange-window');
redFacade.appendChild(orangeWindow);

const relief3 = document.createElement('div');
const relief4 = document.createElement('div');
relief3.classList.add('vitre');
relief4.classList.add('vitre');
leftDoor.appendChild(relief3);
rightDoor.appendChild(relief4);

//shapes on the door
const relief = document.createElement('div');
const relief2 = document.createElement('div');
relief.classList.add('door-relief');
relief2.classList.add('door-relief');
leftDoor.appendChild(relief2);
rightDoor.appendChild(relief);

const menuGraff = document.createElement('div');
menuGraff.classList.add('menu-graff');
const meals = document.createElement('p');
meals.classList.add('meals');
meals.innerHTML = 'Chicken & Waffles<br>Waffle burger<br>Filet & waffles<br>Chicken burger<br>2 pieces w/side<br>2 filets w/ side<br> 3 pieces w/ 2 sides<br> Veggie bowl';
menuGraff.appendChild(meals)

const prices = document.createElement('p');
prices.classList.add('prices');
prices.innerHTML = '11 €<br>12 €<br>13 €<br>12 €<br>11 €<br>13 €<br>15 €<br>10 €';
menuGraff.appendChild(prices)
redFacade.appendChild(menuGraff);

//logos on the window

orangeWindow.appendChild(yelpImg);

const tripadvisor = document.createElement('img');
tripadvisor.src = './assets/tripadvisor.png'
orangeWindow.appendChild(tripadvisor);

const timeout = document.createElement('img');
timeout.src = './assets/timeout.png';
orangeWindow.appendChild(timeout);

const streetSign = document.createElement('img');
streetSign.src = './assets/streetsign.png';
topDoor.appendChild(streetSign);
}
