var uname = localStorage.getItem("name");
document.getElementById("hi").innerHTML = "Welcome " + uname + "!";

function addRoom(){
    var rn = document.getElementById("rname").value;
    firebase.database().ref("/").child(rn).update({
          purpose : "Adding Room name"
    });
    localStorage.setItem("room_name", rn);
    window.location = "kwitter_page.html";
    document.getElementById("rname").value = " ";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
//Start code
a = "<div id ="+ Room_names +" onclick  ='redirect(this.id)'> # " + Room_names + "</div><hr>";
//End code
});});}
getData();
function redirect(roomname){
    localStorage.setItem("room_name", roomname);
    window.location = "kwitter_page.html";
}
