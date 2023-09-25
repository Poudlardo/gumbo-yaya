
export function about() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const subTitle = document.createElement('span');
    const divSubTitle = document.createElement('div');
    const subTitle2 = document.createElement('span');
    divSubTitle.classList.add('parent-subtitle');
    subTitle.classList.add('child-subtitle');
    subTitle2.classList.add('child-subtitle','child-subtitle2');
    subTitle.innerHTML = "A B O U T  ★  O U R  H I S T O R Y  ★";
    subTitle2.innerHTML = "A B O U T  ★  O U R  H I S T O R Y  ★";
    divSubTitle.appendChild(subTitle);
    divSubTitle.appendChild(subTitle2);
    contentDiv.appendChild(divSubTitle);

    const subHeader = document.createElement('div');
    subHeader.classList.add('sub-header')
    contentDiv.appendChild(subHeader);
    // Page HOME
    const pageHome = document.createElement('h2');
    pageHome.innerText = "HOME ★";
    pageHome.classList.add('home-page');
    subHeader.appendChild(pageHome);
    // Page INFO
    const pageInfo = document.createElement('h2');
    pageInfo.innerText = " INFO";
    pageInfo.classList.add('info-page');
    subHeader.appendChild(pageInfo);
}