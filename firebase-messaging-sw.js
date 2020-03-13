const options = {"firebaseVersion":"7.9.3","config":{"apiKey":"AIzaSyDTT9mOxowjih5EiIStCH8nbh_7PXjRUII","authDomain":"matchapp-efb87.firebaseapp.com","databaseURL":"https:\u002F\u002Fmatchapp-efb87.firebaseio.com","projectId":"matchapp-efb87","storageBucket":"matchapp-efb87.appspot.com","messagingSenderId":"158183035375","appId":"1:158183035375:web:01ebdedf055d585eb4a61a","measurementId":"G-P0SC3VC4PC"},"onFirebaseHosting":false}
const version = options.firebaseVersion
const onFirebaseHosting = options.onFirebaseHosting

if (onFirebaseHosting) {
  // Only works on Firebase hosting!
  importScripts('/__/firebase/' + version + '/firebase-app.js')
  importScripts('/__/firebase/' + version + '/firebase-messaging.js')
  importScripts('/__/firebase/init.js')
}
else {
  importScripts(
    'https://www.gstatic.com/firebasejs/' + version + '/firebase-app.js'
  )
  importScripts(
    'https://www.gstatic.com/firebasejs/' + version + '/firebase-messaging.js'
  )
  firebase.initializeApp(options.config)
}

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(function(payload) {
  console.info("SW received the message: ", payload);
  const notification = payload.notification;

  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body,
    icon: notification.image,
    vibrate: notification.vibrate || [200, 100, 200, 100, 200, 100, 200],
    actions: [
      // First item is always taken as click action (see comment below)
      {
        title: "Visit",
        action: notification.clickPath
      }
    ]
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})

self.addEventListener('notificationclick', function(e) {
  const notification = e.notification
  // MARK 1 -> always takes first item
  const clickAction = notification.actions[0].action
  const action = e.action
  if (action === 'close') {
    notification.close()
  } else {
    clients.openWindow(clickAction)
    notification.close()
  }
})
