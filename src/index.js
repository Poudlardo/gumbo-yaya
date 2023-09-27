import { initialModule } from './initialmodule';

import css from './style.css';

console.log("statement always banging");

initialModule();

let PageLoader = (() => {

    let infoPage = document.querySelector('.info-page');
    infoPage.addEventListener('click', info);

    let aboutPage = document.querySelector('.about-page');
    aboutPage.addEventListener('click', about)
    
    let initalModule = document.querySelector('.home-page');
    initalModule.addEventListener('click', initialModule);
})()

