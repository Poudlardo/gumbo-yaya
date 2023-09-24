import yelpImg from './assets/Yelp.png';
import tripadvisor from './assets/tripadvisor.png';
import streetsign from './assets/streetsign.png';
import timeout from './assets/timeout.png'

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

//écrire SOUL FOOD en gros sur la facade
const soulFoodSVG = document.createElement('svg');
orangeWindow.appendChild(soulFoodSVG);
soulFoodSVG.setAttribute('viewBox', '0 0 500 500')

const SVGPath = document.createElement('path');
SVGPath.id = 'curve';
SVGPath.setAttribute('d', 'M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97');
soulFoodSVG.appendChild(SVGPath);

const SVGText = document.createElement('text');
SVGText.setAttribute('width', '500');
soulFoodSVG.appendChild(SVGText);

const textPath = document.createElement('textPath');
textPath.setAttribute('xlink:href', '#curve');
textPath.innerHTML = 'SOUL FOOD'
SVGText.appendChild(textPath);

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

// panneau de la rue sur 
const streetsignImg = document.createElement('img');
streetsignImg.src = streetsign;
streetsignImg.classList.add('street-sign');
topDoor.appendChild(streetsignImg);

//logos on the window
const allLogos = document.createElement('div');
orangeWindow.appendChild(allLogos);

//yelp
const yelpLink = document.createElement('a');
yelpLink.href = 'https://www.yelp.com/biz/gumbo-yaya-paris';
const yelp = document.createElement('img');
yelp.src = yelpImg;
yelp.classList.add('icons');
allLogos.appendChild(yelpLink);
yelpLink.appendChild(yelp);

//tripadvisor
const tripadvisorLink = document.createElement('a');
tripadvisorLink.href = 'https://www.tripadvisor.fr/Restaurant_Review-g187147-d8786534-Reviews-Gumbo_Yaya_Chicken_And_Waffles-Paris_Ile_de_France.html';
const tripadvisorImg = document.createElement('img');
tripadvisorImg.src = tripadvisor;
tripadvisorImg.classList.add('icons');
allLogos.appendChild(tripadvisorLink);
tripadvisorLink.appendChild(tripadvisorImg);

//timeout
const timeoutLink = document.createElement('a');
timeoutLink.href = 'https://www.timeout.com/paris/en/restaurants/gumbo-yaya';
const timeoutImg = document.createElement('img');
timeoutImg.src = timeout;
timeoutImg.classList.add('icons');
timeoutLink.appendChild(timeoutImg)
allLogos.appendChild(timeoutLink);




}
