import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot, getDocs, addDoc,
  query, where
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJxy5vpXS7f1dJ93rKe4eeCdNHYRq7lSc",
  authDomain: "fate-compass-6afb9.firebaseapp.com",
  projectId: "fate-compass-6afb9",
  storageBucket: "fate-compass-6afb9.appspot.com",
  messagingSenderId: "37313764377",
  appId: "1:37313764377:web:285a6a927584aaec30de88"
};

initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()

const usersRef = collection(db, 'users')

let users = []

let isVip = false

const signIn = document.querySelector(".signin-form");
signIn.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = signIn.email.value
  const password = signIn.password.value
  const vipAccount = Math.random() >= 0.5

  if (password !== signIn.passwordMatch.value)
    return signIn.reset()

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log(`Welcome to the gay club, ${cred.user.email}`);

      addDoc(usersRef, { 
        email: email.toLowerCase(),
        password: password,
        vipAccount: vipAccount,
      }).then(() => {
        signIn.reset()
      })
    })
  .catch(error => console.log(error.message))
})

const logIn = document.querySelector(".login-form")
logIn.addEventListener("submit", (e) => {
  e.preventDefault()

  const email = logIn.email.value
  const password = logIn.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log('Welcome back', cred.user.email)

      const q = query(usersRef, where('email', '==', cred.user.email))

      getDocs(q)
        .then((snapshot) => {
          snapshot.docs.forEach(doc => {
            users.push({ ...doc.data() })
          })
          localStorage.setItem("isVip", JSON.stringify(users[0].vipAccount))
        })
      users = []
      logIn.reset()
    })
    .catch(err => {
      console.log(err.message)
    })

  console.log("signed in");
});

const logOut = document.querySelector('.logout')
const logOutBtn = document.querySelector('.logout-btn')
logOutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log('signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
});

const tarotRead = document.querySelector('.tarot-read')
const matrixRead = document.querySelector('.matrix-read')
onAuthStateChanged(auth, (user) => {
  const userWelcome = document.querySelector('[data-user]')
  
  if (user !== null) {
    userWelcome.textContent = `Welcome ${user.email}`
    logOut.classList.remove('hidden')
    logIn.classList.add('hidden')
    signIn.classList.add('hidden')
    
    const timerId = setTimeout(() => {
    // matrixRead.classList.add('hidden')
    // tarotRead.classList.add('hidden')
      isVip = localStorage.getItem('isVip')
      if (isVip) {
        console.log(isVip)
        matrixRead.classList.remove('hidden')
        tarotRead.classList.remove('hidden')  
      }
    }, 1000)
    
    return
  }

  userWelcome.textContent = ''
  logOut.classList.add('hidden')

  logIn.classList.remove('hidden')
  signIn.classList.remove('hidden')
})