// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA8kL1gNzm8Ev3ggFVUiNuYfBHJnftxcDw',
  authDomain: 'jikmunn-video-conference-app.firebaseapp.com',
  projectId: 'jikmunn-video-conference-app',
  storageBucket: 'jikmunn-video-conference-app.appspot.com',
  messagingSenderId: '209937193977',
  appId: '1:209937193977:web:a6232b38a8ef278b617b28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
