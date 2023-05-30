import { getRandomCards } from './cards.js'

const refs = {
    startBtn: document.querySelector(".tarot-button"),
    tarotRead: document.querySelector(".tarot-cards"),
}

getRandomCards()
    .then(cards => {
        console.log(cards)
    })
    .catch(error => console.log(error.message));

refs.startBtn.addEventListener("click", (e) => {
    const prevCards = document.querySelectorAll(".tarot__card").length;
    prevCardsDestroyer(prevCards);

    markupCreator(tarotCards);
});

function prevCardsDestroyer(numberOfItems) {
    for (let i = 0; i < numberOfItems; i += 1) {
        const card = document.querySelector(".tarot__card");
        card.remove();
    }
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