import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './Route/Root';
import * as serviceWorker from './serviceWorker';
import moment from 'moment'
moment.locale('th')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./firebase-messaging-sw.js")
      .then(function(registration) {
        console.log("Registration successful, scope is:", registration.scope);
      })
      .catch(function(err) {
        console.log("Service worker registration failed, error:", err);
      });
  }

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
