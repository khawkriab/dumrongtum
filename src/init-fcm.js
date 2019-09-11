import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: "634989070483"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
	// Project Settings => Cloud Messaging => Web Push certificates
  "BPUFBObsCoYe1VNDKdydsfjww2x0dEYDoghIh5MiREHOsSZUYkUGZPK9mmAyJaXkD7vj6IiPeC5bd84zeqbebrA"
);
export { messaging };