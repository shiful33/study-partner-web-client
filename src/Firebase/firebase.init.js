import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvrjNY54EeAe2kDd1XXAFRqf3b6GJvSxM",
  authDomain: "study-partner-web-client.firebaseapp.com",
  projectId: "study-partner-web-client",
  storageBucket: "study-partner-web-client.firebasestorage.app",
  messagingSenderId: "620418244889",
  appId: "1:620418244889:web:288b1bac23f9285d8f2588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);