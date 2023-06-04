import { prevStuffDestroyer } from './preveous-stuff-destroyer';
import { getCards } from './cards.js';
// firebase
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, query, where, addDoc } from 'firebase/firestore';
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
}

refs.startBtn.addEventListener("click", (e) => {
    // Removing preveous read
    const prevCards = document.querySelectorAll(`[data-card]`)
    prevStuffDestroyer(prevCards);

    // Fetching cards from the api
    getCards()
        .then(( { cards } ) => {
            // Adding this read to the DB
            addToDb(cards);
            // Adding cards to the page
            markupCreator(cards);
        })
        .catch(error => console.log(error.message));  
});

const markupCreator = (array) => {
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

const addToDb = (array) => {
    addDoc(readsRef, {
                email: loggedUser,
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
            })
}

onAuthStateChanged(auth, (user) => {
    loggedUser = user.email;
    const q = query(readsRef, where('email', '==', loggedUser));

    getDocs(q)
        .then((snapshot) => {
            snapshot.docs.forEach(read => {
                reads.push({ ...read.data() });
            })
            console.log(reads);
        })
    reads = [];
});