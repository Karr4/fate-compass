const getCards = () =>  {
    return fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=6')
        .then((response) => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json();
        });
}

export { getCards };