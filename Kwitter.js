function login() {
    var user = document.getElementById("uninput").value;
    localStorage.setItem("name", user);
    window.location = "kwitter_room.html";
}