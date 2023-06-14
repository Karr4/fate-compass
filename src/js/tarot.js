import { getRandomCards } from './random-card.js'
// firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, orderBy, limit, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",
  authDomain: "fate-compass-6afb9.firebaseapp.com",
  projectId: "fate-compass-6afb9",
  storageBucket: "fate-compass-6afb9.appspot.com",
  messagingSenderId: "37313764377",
  appId: "1:37313764377:web:285a6a927584aaec30de88"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const readsRef = collection(db, 'reads');

let reads = [];
let loggedUser;

const refs = {
    startBtn: document.querySelector(".tarot-button"),
    tarotRead: document.querySelector(".tarot-cards"),
    tarotDescr: document.querySelector(".cards-descr"),
    prevReadsBtn: document.querySelector('.see-previous'),
    prevReads: document.querySelector('.prev-reads'),
    closeBtn: document.querySelector('[data-close="2"]'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.reads-backdrop'),
}

const {
    startBtn, tarotRead, tarotDescr, prevReadsBtn, prevReads, closeBtn, body, backdrop
} = refs;

startBtn.addEventListener("click", (e) => {
    // Removing preveous read
    tarotRead.innerHTML = '';
    tarotDescr.innerHTML = '';

    // Getting random cards
    const cards = getRandomCards();

    // Adding the read to the DB
    if (loggedUser) {
        addToDb(cards);
    }

    // Getting docs rom DB for the reads history
    getDocsFromDb();

    startBtn.style.marginBottom = '50px';
    // Creating the markup
    markupCreator(cards);
});

prevReadsBtn.addEventListener('click', () => {
    prevReads.innerHTML = '';

    body.style.overflow = 'hidden';
    backdrop.classList.remove('hidden');

    if (reads.length === 0) {
        const message = '<p class="no-reads">Sorry, but there are no previous reads</p>';
        prevReads.insertAdjacentHTML('beforeend', message);
        return;
    }

    prevReadsMarkupCreator(reads);
});

closeBtn.addEventListener('click', () => {
    body.style.overflow = 'scroll';
    backdrop.classList.add('hidden');
})

const markupCreator = (array) => {
    const cardsMarkup = array.map(({ pic, name }) => 
            `<li class="item">
                <img width="360" src="${pic}" alt="${name}"/>
                <p class="card-name">${name}</p>
            </li>`
    ).join("");
    tarotRead.insertAdjacentHTML("beforeend", cardsMarkup);

    const cardsDescriptionMarkup = array.map(({ name, meaning_up, meaning_rev }) => 
            `<li class="item">
                <h3>${name}</h3>
                <p><b>Meaning up:</b> ${meaning_up}</p>
                <p><b>Meaning reversed:</b> ${meaning_rev}</p>
            </li>`
    ).join("");
    tarotDescr.insertAdjacentHTML("beforeend", cardsDescriptionMarkup);
}

const prevReadsMarkupCreator = (array) => {
    const markup = array.map(({ card1, card2, card3, card4, card5, card6 }) =>
        `<li class="item">
            <ul class="prev-cards">
                <li class="card">
                    <h3>${card1.name}</h3>
                    <p><b>Meaning up:</b> ${card1.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card1.meanRev}</p>
                </li>
                <li class="card">
                    <h3>${card2.name}</h3>
                    <p><b>Meaning up:</b> ${card2.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card2.meanRev}</p>
                </li>
                <li class="card">
                    <h3>${card3.name}</h3>
                    <p><b>Meaning up:</b> ${card3.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card3.meanRev}</p>
                </li>
                <li class="card">
                    <h3>${card4.name}</h3>
                    <p><b>Meaning up:</b> ${card4.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card4.meanRev}</p>
                </li>
                <li class="card">
                    <h3>${card5.name}</h3>
                    <p><b>Meaning up:</b> ${card5.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card5.meanRev}</p>
                    </li>
                <li class="card">
                    <h3>${card6.name}</h3>
                    <p><b>Meaning up:</b> ${card6.meanUp}</p>
                    <p><b>Meaning reversed:</b> ${card6.meanRev}</p>
                </li>
            </ul>   
        </li>`).join('');
    prevReads.insertAdjacentHTML("beforeend", markup);
}

const addToDb = (array) => {
    addDoc(readsRef, {
        email: loggedUser,
        timestamp: new Date(),
        card1: {
            name: array[0].name,
            meanUp: array[0].meaning_up,
            meanRev: array[0].meaning_rev,
        },
        card2: {
            name: array[1].name,
            meanUp: array[1].meaning_up,
            meanRev: array[1].meaning_rev,
        },
        card3: {
            name: array[2].name,
            meanUp: array[2].meaning_up,
            meanRev: array[2].meaning_rev,
        },
        card4: {
            name: array[3].name,
            meanUp: array[3].meaning_up,
            meanRev: array[3].meaning_rev,
        },
        card5: {
            name: array[4].name,
            meanUp: array[4].meaning_up,
            meanRev: array[4].meaning_rev,
        },
        card6: {
            name: array[5].name,
            meanUp: array[5].meaning_up,
            meanRev: array[5].meaning_rev,
        },
    });
}

const getDocsFromDb = () => {
    const q = query(readsRef, where('email', '==', loggedUser), orderBy('timestamp', 'desc'), limit(5));

    getDocs(q)
        .then((snapshot) => {
            snapshot.docs.forEach(read => {
                reads.push({ ...read.data() });
            })
            console.log(reads);
        })
    reads = [];
}

onAuthStateChanged(auth, (user) => {
    tarotRead.innerHTML = '';
    tarotDescr.innerHTML = '';
    startBtn.style.marginBottom = '0px';

    if (user === null) {
        prevReadsBtn.classList.add('hidden');
        return loggedUser = null;
    }

    prevReadsBtn.classList.remove('hidden');
    loggedUser = user.email;
    getDocsFromDb();
});
