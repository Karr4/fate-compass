import { cards } from './cards.js';

const refs = {
    startBtn: document.querySelector(".tarot-button"),
    tarotRead: document.querySelector(".tarot-cards"),
}

refs.startBtn.addEventListener("click", (e) => {
    const prevCards = document.querySelectorAll(".tarot__card").length;
    prevCardsDestroyer(prevCards);

    const tarotCards = getRandomCards();

    markupCreator(tarotCards);
});

function prevCardsDestroyer(numberOfItems) {
    for (let i = 0; i < numberOfItems; i += 1) {
        const card = document.querySelector(".tarot__card");
        card.remove();
    }
}

function getRandomCards() {
    const arrayOfCards = [];

    for (let i = 0; i < 6; i += 1) {
        let random = Math.floor(Math.random() * (22 - 1) + 1);

        while (arrayOfCards.includes(cards[random])) {
            random = Math.floor(Math.random() * (22 - 1) + 1);
        }

        arrayOfCards.push(cards[random]);
    }

    return arrayOfCards;
}

function markupCreator(array) {
    // <img src="${element.picture}" width="360"/>
    const markup = array.map(element => 
        `<li class="tarot__card">
            <div>
                <h3>${element.name}</h3>
                <p>${element.description}</p>
            </div>
        </li>`
    ).join("");

    refs.tarotRead.insertAdjacentHTML("beforeend", markup); 
}