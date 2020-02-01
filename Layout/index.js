const home = window.document.querySelector('#home');
const what = window.document.querySelector('#what');
const zpot = window.document.querySelector('#zpot');



const newPag = document.querySelector('#nueva-pagina');

const nombPag = document.querySelector('#nombre-pagina');



home.addEventListener('click', llamaHome);

what.addEventListener('click', llamaWat);

zpot.addEventListener('click', llamaZpot);



function llamaHome() {

    newPag.setAttribute('src', '../Home/index.html');

    nombPag.innerHTML = 'Layout - Home';

}

 

function llamaWat() {

    newPag.setAttribute('src', '../Whatzapp/index.html');

    nombPag.innerHTML = 'Layout - WhatZapp';

}



function llamaZpot() {

    newPag.setAttribute('src', '../Zpotify/index.html');

    nombPag.innerHTML = 'Layout - Zpotify';

}