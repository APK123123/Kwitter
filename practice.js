
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBsgNZaLr8B35YMtC54QULTlocbIGhDxLI",
  authDomain: "classtest-c49a7.firebaseapp.com",
  databaseURL: "https://classtest-c49a7-default-rtdb.firebaseio.com",
  projectId: "classtest-c49a7",
  storageBucket: "classtest-c49a7.appspot.com",
  messagingSenderId: "259621295469",
  appId: "1:259621295469:web:ea51f4727bfd705eef3664"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function adduser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }