const getRandomCards = () =>  {
    return fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=6')
        .then(response => response.json());
}

export { getRandomCards }