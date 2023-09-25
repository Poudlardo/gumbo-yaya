export function info() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const subTitle = document.createElement('span');
    const divSubTitle = document.createElement('div');
    const subTitle2 = document.createElement('span');
    divSubTitle.classList.add('parent-subtitle');
    subTitle.classList.add('child-subtitle');
    subTitle2.classList.add('child-subtitle','child-subtitle2');
    subTitle.innerHTML = "I N F O R M A T I O N   ★  A C C E S S  ★";
    subTitle2.innerHTML = "I N F O R M A T I O N   ★  A C C E S S  ★";
    divSubTitle.appendChild(subTitle);
    divSubTitle.appendChild(subTitle2);
    contentDiv.appendChild(divSubTitle);















}