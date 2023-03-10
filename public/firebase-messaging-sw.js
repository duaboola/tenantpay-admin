// // Scripts for firebase and firebase messaging
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
// importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

// // Initialize the Firebase app in the service worker by passing the generated config
// var firebaseConfig = {
//   apiKey: 'AIzaSyBqhg_ml6rmfG71w5u1Nwql7askKFANxP0',
//   authDomain: 'tenantpay-9f614.firebaseapp.com',
//   projectId: 'tenantpay-9f614',
//   storageBucket: 'tenantpay-9f614.appspot.com',
//   messagingSenderId: '490887984696',
//   appId: '1:490887984696:web:4ba796f4d3b41ef9a398cd',
//   measurementId: 'G-BGLBRCPNZK',
// }

// firebase.initializeApp(firebaseConfig)

// // Retrieve firebase messaging
// const messaging = firebase.messaging()

// messaging.onBackgroundMessage(function (payload) {
//   console.log('Received background message ', payload)

//   const notificationTitle = payload.notification.title
//   const notificationOptions = {
//     body: payload.notification.body,
//   }

//   self.registration.showNotification(notificationTitle, notificationOptions)
// })
