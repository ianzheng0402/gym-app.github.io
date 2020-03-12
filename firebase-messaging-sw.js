importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.10.0/firebase-messaging.js')

const firebaseConfig = {
  apiKey: "AIzaSyDTT9mOxowjih5EiIStCH8nbh_7PXjRUII",
  authDomain: "matchapp-efb87.firebaseapp.com",
  databaseURL: "https://matchapp-efb87.firebaseio.com",
  projectId: "matchapp-efb87",
  storageBucket: "matchapp-efb87.appspot.com",
  messagingSenderId: "158183035375",
  appId: "1:158183035375:web:01ebdedf055d585eb4a61a",
  measurementId: "G-P0SC3VC4PC"
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload){
	console.log('[firebase-messaging-sw.js] Received background message ' ,payload)

	var notificationTitle = 'Background Message Title' 
	var notificationOptions = {
		body:'Background Message body.',
		icon:'/firebase-log.png'
	}
	return self.registration.showNotification(notificationTitle,
		notificationOptions)
})
