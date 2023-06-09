import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs, addDoc,
  query, where
} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

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

const usersRef = collection(db, 'users');

let users = [];

const refs = {
  body: document.querySelector("body"),
  signInForm: document.querySelector(".signin-form"),
  logInForm: document.querySelector(".login-form"),
  logOut: document.querySelector('.logout'),
  logOutBtn: document.querySelector('.logout-btn'),
  tarotRead: document.querySelector('.tarot-read'),
  matrixRead: document.querySelector('.matrix-read'),
  logIn: document.querySelector(".login"),
  signIn: document.querySelector(".signin"),
  haveAccount: document.querySelector('.have-account'),
  profileBtn: document.querySelector('.profile-btn'),
  backdrop: document.querySelector('.auth-backdrop'),
  closeBtn: document.querySelector('[data-close="1"]'),
}

const {
  body,
  signInForm, logInForm,
  logOut, logOutBtn,
  tarotRead, matrixRead,
  logIn, signIn,
  haveAccount,
  profileBtn,
  backdrop,
  closeBtn
} = refs;

signInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signInForm.email.value;
  const password = signInForm.password.value;

  if (password !== signIn.passwordMatch.value)
    return signIn.reset();

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log(`Welcome to the gay club, ${cred.user.email}`);

      addDoc(usersRef, {
        email: email.toLowerCase(),
        password: password,
      }).then(() => {
        signInForm.reset();
      });
    })
    .catch(error => console.log(error.message));
})

logInForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = logInForm.email.value;
  const password = logInForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('Welcome back', cred.user.email);

      const q = query(usersRef, where('email', '==', cred.user.email));

      getDocs(q)
        .then((snapshot) => {
          snapshot.docs.forEach(doc => {
            users.push({ ...doc.data() });
          })
        })
      users = [];
      logInForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    })

  console.log("signed in");
});

logOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log('signed out');
    })
    .catch(err => {
      console.log(err.message);
    });
});

onAuthStateChanged(auth, (user) => {

  const userWelcome = document.querySelector('[data-user]');
  
  if (user !== null) {
    userWelcome.textContent = `Welcome ${user.email}`;
    logOut.classList.remove('hidden');
    logIn.classList.add('hidden');
    signIn.classList.add('hidden');
    haveAccount.classList.add('hidden');
    return;
  }

  userWelcome.textContent = '';
  logOut.classList.add('hidden');
  logIn.classList.remove('hidden');
  haveAccount.classList.remove('hidden');
})

haveAccount.addEventListener('click', () => {
  logIn.classList.toggle('hidden');
  signIn.classList.toggle('hidden');
})

profileBtn.addEventListener('click', () => {
  body.style.overflow = 'hidden';
  backdrop.classList.remove('hidden');
})

closeBtn.addEventListener('click', () => {
  body.style.overflow = 'scroll';
  backdrop.classList.add('hidden');
})