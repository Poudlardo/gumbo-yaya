export function initalModule() {

const contentDiv = document.querySelector('#content');
contentDiv.replaceChildren()

const heading = document.createElement('h1');
heading.textContent = "Resaurant Page";
contentDiv.appendChild(heading);

const topImage = document.createElement('img');
topImage.classList.add('top-image');
topImage.src = '../src/assets/2631198.jpg';
topImage.alt = 'Image of Restaurant';
contentDiv.appendChild(topImage);

const para1 = document.createElement('p');
para1.classList.add('landing-page-copy');
para1.textContent = 'The best rooftop experience you will taste in Paris';
contentDiv.appendChild(para1);

const para2 = document.createElement('p');
para2.classList.add('landing-page-copy');
para2.textContent = "Take a deep dive in french finest cuisine, by the greatests Michelin-awarded chef";
contentDiv.appendChild(para2);

}
