import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAZPoB3Sh_kxQxLL0PTESckR-Xej6XMTpg",
  authDomain: "twopic-f13bb.firebaseapp.com",
  databaseURL: "https://twopic-f13bb.firebaseio.com",
  projectId: "twopic-f13bb",
  storageBucket: "twopic-f13bb.appspot.com",
  messagingSenderId: "287134586794"
};

firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
