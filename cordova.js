const firebaseConfig = {
  apiKey: "AIzaSyDTT9mOxowjih5EiIStCH8nbh_7PXjRUII",
  authDomain: "matchapp-efb87.firebaseapp.com",
  databaseURL: "https://matchapp-efb87.firebaseio.com",
  projectId: "matchapp-efb87",
  storageBucket: "matchapp-efb87.appspot.com",
  messagingSenderId: "158183035375",
  appId: "1:158183035375:web:01ebdedf055d585eb4a61a",
  measurementId: "G-P0SC3VC4PC"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging
  .requestPermission()
  .then(function () {
    console.log("Notification Permission granted.");
    return messaging.getToken()
  }).then(function (token) {

    console.log(token)
  }).

  catch(function (err) {
    console.log("Unable to get permission to notify", err);
  });

  messaging.onMessage(([payload])=>{
    console.log(payload);
  })