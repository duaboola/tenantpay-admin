// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getMessaging, getToken, onMessage } from 'firebase/messaging'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyBqhg_ml6rmfG71w5u1Nwql7askKFANxP0',
//   authDomain: 'tenantpay-9f614.firebaseapp.com',
//   projectId: 'tenantpay-9f614',
//   storageBucket: 'tenantpay-9f614.appspot.com',
//   messagingSenderId: '490887984696',
//   appId: '1:490887984696:web:4ba796f4d3b41ef9a398cd',
//   measurementId: 'G-BGLBRCPNZK',
// }

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);

// export const getToken = (setTokenFound) => {
//     return getToken(messaging, {vapidKey: 'GENERATED_MESSAGING_KEY'}).then((currentToken) => {
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//         setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     }).catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//       // catch error while creating client token
//     });
//   }

//   export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       resolve(payload);
//     });
// });
