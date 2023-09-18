import { initalModule } from './initialmodule';
import { menu } from './menu.js';
import { info } from './info.js';
import { about } from './about.js';
import { jobs } from './jobs.js';
import './style.css'

console.log("statement always banging");

initalModule();

let getToNewPage = (function() {
    let homeTab = document.querySelector('.home');
    homeTab.addEventListener('click', initalModule);

    let menuTab = document.querySelector('.menu');
    menuTab.addEventListener('click', menu);

    let aboutTab = document.querySelector('.about');
    aboutTab.addEventListener('click', about)

    let infoTab = document.querySelector('.info');
    infoTab.addEventListener('click', info)

    let jobsTab = document.querySelector('.jobs');
    jobsTab.addEventListener('click', jobs)
})()