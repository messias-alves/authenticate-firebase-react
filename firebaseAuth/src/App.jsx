import React, { useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';

import Header from './components/header';
import Footer from './components/footer';
import Routes from './Routes';
import Auth from './pages/auth';

import './App.css';

function App() {
  const [user, setUser ] = useState(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      let newUser = {
        id: user.uid
      };
      setUser(newUser);
    };
  });

  if(user === null) {
    return (
      <Auth />
    );
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes />
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;