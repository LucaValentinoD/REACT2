import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Collection from './collection.jsx';
import Query from './Query.jsx';


const firebaseConfig = {
  apiKey: "AIzaSyAQmXjIfGicDXV8jbQf5dR8A_lp2hZcpPE",
  authDomain: "river-ecommerce.firebaseapp.com",
  projectId: "river-ecommerce",
  storageBucket: "river-ecommerce.firebasestorage.app",
  messagingSenderId: "559464544837",
  appId: "1:559464544837:web:c66f9c34535dc5f834412c",
  measurementId: "G-4NY1GHZC5W"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Collection/>
    <Query/>
  </>,
)
