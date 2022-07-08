const firebaseConfig = {
    apiKey: "AIzaSyCEsTm2tB4JNqTzSJMZhRWJa0FtDTXFlNg",
    authDomain: "pushin-p-car-downloads.firebaseapp.com",
    databaseURL: "https://pushin-p-car-downloads-default-rtdb.firebaseio.com",
    projectId: "pushin-p-car-downloads",
    storageBucket: "pushin-p-car-downloads.appspot.com",
    messagingSenderId: "181342564192",
    appId: "1:181342564192:web:e35b6bde736c1e2cfd3805",
    measurementId: "G-K2HXDFGL6M"
  };


  // Initialize firebase DATABASE
  firebase.initializeApp(firebaseConfig);

  // ref database

  var filenameDB = firebase.database().ref('filename');

  document.getElementById('')