import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBR6gjF3T5j3WrX1-APOJvd2xeJ7rQBhdw",
    authDomain: "twmb-c199d.firebaseapp.com",
    projectId: "twmb-c199d",
    storageBucket: "twmb-c199d.appspot.com",
    messagingSenderId: "739039159170",
    appId: "1:739039159170:web:f4ae447f9669d52284659b",
    measurementId: "G-R0GMZ7NLGW"
  };

  const app = initializeApp(firebaseConfig);
//   initialize the firebase and our proj
export const auth = getAuth(app);