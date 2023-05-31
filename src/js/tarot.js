import { prevStuffDestroyer } from './preveous-stuff-destroyer';
import { getCards } from './cards.js'

const refs = {
    startBtn: document.querySelector(".tarot-button"),
    tarotRead: document.querySelector(".tarot-cards"),
}

refs.startBtn.addEventListener("click", (e) => {
    // Removing preveous read
    const dataAttribute = 'data-card'
    prevStuffDestroyer(dataAttribute);

    // Fetching cards from the api
    getCards()
        .then(({ cards }) => {
            console.log(cards);
            // Addding cards to the page
            markupCreator(cards);
        })
        .catch(error => console.log(error.message));  
});

function markupCreator(array) {
    const markup = array.map(element => 
        `<li class="tarot__card" data-card>
            <div>
                <h3>${element.name}</h3>
                <p><span>Meaning up:</span> ${element.meaning_up}</p>
                <p><span>Meaning reversed:</span> ${element.meaning_rev}</p>
            </div>
        </li>`
    ).join("");
    refs.tarotRead.insertAdjacentHTML("beforeend", markup); 
}