const compteur = document.querySelector('#compteur');

let index = 0;

const increment = (e: Event) => {
    e.preventDefault();
    index++;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = index.toString()
    }
}

compteur?.addEventListener('click', increment);