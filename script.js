function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() == "" || password.trim() == "") {
        alert("Please enter your username and password.");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Login successful.");
    }
}

function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}


/*function test() {
//Retrieving Data
var nme = document.getElementById("name").value;
var em = document.getElementById("address").value;
var pw = document.getElementById("email").value;
var cmt = document.getElementById("comments").value;


alert(usid + em + pw + cmt);


//Storing data in localStorage here 

var name = localStorage.setItem('name', name);
var email = localStorage.setItem('address', em);
var password = localStorage.setItem('email', pw);
var cmte = localStorage.setItem('comments', pw);

/*Retrieving stored data and using it for falculation

var user = localStorage.getItem('usid', usid);
var email = localStorage.getItem('em', em);
var password = localStorage.getItem('pw', pw);

var a, b, c;
a = "admin";
b = "najimissaya21@gmail.com";
c = 12345678;

if (a == user && b == email && c == password) {
    alert("login successfull !");
} else {
    alert("Invalid details !");
}*/