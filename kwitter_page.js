var firebaseConfig = {
    apiKey: "AIzaSyAC5Uk19PWZ0S49q0NPe6kzO0MvtaKhWYU",
    authDomain: "lets-chat-web-app-95c93.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-95c93-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-95c93",
    storageBucket: "lets-chat-web-app-95c93.appspot.com",
    messagingSenderId: "258477654653",
    appId: "1:258477654653:web:b69043d0c35a1cc5d72714"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

    document.getElementById("msg").value = "";
}
