import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs, onSnapshot, addDoc,
  query, where
} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

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

// getDocs(usersRef)
//   .then(snapshot => {
//     // console.log(snapshot.docs)
//     let books = []
//     snapshot.docs.forEach(doc => {
//       books.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(books)
//   })
//   .catch(err => {
//     console.log(err.message)
//   })

// onSnapshot(usersRef, (snapshot) => {
//   let users = []
//   snapshot.docs.forEach((doc) => {
//     users.push({ ...doc.data(), id: doc.id })
//   })
//   console.log(users)
// })

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
        email: email,
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

      const q = query(usersRef, where('email', '==', 'fakamakaka@gmail.com'))
      console.log(q)

      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach(doc => {
          users.push({ ...doc.data() })
        })
        isVip = users[0].vipAccount
      })

      logIn.reset()
    })
    .catch(err => {
      console.log(err.message)
    })

  console.log("signed in");
});

const logOut = document.querySelector(".logout-btn")
logOut.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log('signed out')
    })
    .catch(err => {
      console.log(err.message)
    })
});



// create user
// addDocs

// login
// check if user is a vip or anonymous
// decide what to show on the website

// sign out
// poshel nahuy



































// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();

// const createUserForm = document.querySelector(".create-user-form");
// const signInForm = document.querySelector(".sign-in-form");
// const signOutBtn = document.querySelector(".sign-out-btn");

// createUserForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const email = createUserForm.querySelector('[name="email"]').value;
//   const password = createUserForm.querySelector('[name="password"]').value;
//   const retypedPassword = createUserForm.querySelector('[name="password-match"]').value;

//   console.log(email, password, retypedPassword)

//   if (password !== retypedPassword)
//     return;

//   createUserWithEmailAndPassword(auth, email, password, vipAccount)
//     .then((userCredential) => {
//       console.log("Welcome to the gay club!");
//       const user = userCredential.user;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
  
//   console.log("created an account");
// });

// signInForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("signed in");
// });

// signOutBtn.addEventListener("click", () => {
//   console.log("signed out");
// });

