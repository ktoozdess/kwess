import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCA2ryrRUfp2Ynvy1BN3S-YAwd8kp-JoKA',
  authDomain: 'kwess-32755.firebaseapp.com',
  projectId: 'kwess-32755',
  storageBucket: 'kwess-32755.appspot.com',
  messagingSenderId: '629652267655',
  appId: '1:629652267655:web:141fa07a4e51957e120e22'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}