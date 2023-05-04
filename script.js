function test() {
    //Retrieving Data
    var usid = document.getElementById("username").value;
    var em = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    alert(usid + em + pw);


    //Storing data in localStorage here 

    var user = localStorage.setItem('usid', usid);
    var email = localStorage.setItem('em', em);
    var password = localStorage.setItem('pw', pw);

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
}