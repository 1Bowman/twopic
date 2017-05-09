import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA0qYBBIe840EpksEfDVQzz9WcmALsewcI",
    authDomain: "test-project-80442.firebaseapp.com",
    databaseURL: "https://test-project-80442.firebaseio.com",
    projectId: "test-project-80442",
    storageBucket: "gs://test-project-80442.appspot.com/",
    messagingSenderId: "681211283736"
  };

firebase.initializeApp(config)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
