import data from '../cards.json';

const { cards } = data;

export const getRandomCards = () => {
    const arrayOfCards = [];

    for (let i = 0; i < 6; i += 1) {
        let random = Math.floor(Math.random() * 78);

        while (arrayOfCards.includes(cards[random])) {
            random = Math.floor(Math.random() * 78);
        }

        arrayOfCards.push(cards[random]);
    }

    return arrayOfCards;
}