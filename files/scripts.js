function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ((username == "")&&(password == "")){
        document.getElementById("loginAlert").innerHTML = "Please enter your username and password.";
    } else if ((username == "")&&(password != "")){
        document.getElementById("loginAlert").innerHTML = "Please enter your username.";
    } else if ((username != "")&&(password == "")){
        document.getElementById("loginAlert").innerHTML = "Please enter your password.";
    } else if ((username != "")&&(password != "")){
        window.location.href = "Q2Project/index.html";
    }
}