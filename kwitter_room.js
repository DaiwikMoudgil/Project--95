
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAMKqI0cEkipZ0IXddVuhkPmJeb3fp2OkM",
      authDomain: "kwitter-app-43444.firebaseapp.com",
      databaseURL: "https://kwitter-app-43444-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-43444",
      storageBucket: "kwitter-app-43444.appspot.com",
      messagingSenderId: "631669587436",
      appId: "1:631669587436:web:a7969610a9114f900314c9",
      measurementId: "G-VNS10G9S1V"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name;
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names -"+Room_names);
row = "div class -'room' id"+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({ purpose : "adding room name" });

      localStorage.setItem("room name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" . name);
      window.location = "kwitter_page.html";
}

function logout()
{
      
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}