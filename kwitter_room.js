//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyALCOMAlvQn1Of5Y4VDwzE0JHu5NSd4VVc",
      authDomain: "social-app-e8985.firebaseapp.com",
      databaseURL: "https://social-app-e8985.firebaseio.com",
      projectId: "social-app-e8985",
      storageBucket: "social-app-e8985.appspot.com",
      messagingSenderId: "654009269405",
      appId: "1:654009269405:web:74fb6eb03ab3ad2895e874",
      measurementId: "G-GWRPBX1WNJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() 
{firebase.database().ref("/").on('value',
 function(snapshot)
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
console.log(room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"

      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}


