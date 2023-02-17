"use strict";
const compteur = document.querySelector('#compteur');
let index = 0;
const increment = (e) => {
    index++;
    compteur.querySelector('span').innerText = index.toString();
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
