//Form input
var form = document.getElementById("sign"),
    UR = document.getElementById("username"),
    Email = document.getElementById("email"),
    Psswd = document.getElementById("Psswd"),
    CPsswd = document.getElementById("CPsswd");

//To display the error 
var Res11 = document.getElementById("Res1"),
    Res12 = document.getElementById("Res2"),
    Res13 = document.getElementById("Res3"),
    Res14 = document.getElementById("Res4");

//Button
var btn = document.getElementById("btnz");



//Checking Username
function User() {
    let valid1 = false;
    if ((UR.value == ('')) || (25 < UR.value.length || UR.value.length < 3)) {
        Res11.style.display = 'block';
        UR.style.border = '2px solid red';
        UR.style.borderColor = 'red';
    } else {
        Res11.style.display = 'none';
        UR.style.border = '2px solid darkblue';
        UR.style.backgroundColor = 'lightgray';
        valid1 = true;
    }
    return valid1;
}


//Checking Email
function Mail() {
    let valid2 = false;

    if ((Email.value == ('')) || (!isEmailValid(Email.value))) {
        Res12.style.display = 'block';
        Email.style.border = '2px solid red';
    } else {
        Res12.style.display = 'none';
        Email.style.border = '2px solid darkblue';
        Email.style.backgroundColor = 'lightgray';
        valid2 = true;
    }
    return valid2;
}

const isEmailValid = (x) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(x);
};


//Checking Password
function Password() {
    let valid3 = false;
    if ((Psswd.value == ('')) || (Psswd.value.length < 8 || Psswd.value.search(/\d/) == -1 || Psswd.value.search(/[a-z]/) == -1 || Psswd.value.search(/[A-Z]/) == -1 || Psswd.value.search(/[!@#$%^&*]/) == -1)) {
        Res13.style.display = 'block';
        Psswd.style.border = '2px solid red';
    } else {
        Res13.style.display = 'none';
        Psswd.style.border = '2px solid darkblue';
        Psswd.style.backgroundColor = 'lightgray';
        valid3 = true;
    }
    return valid3;
}


//Checking Password Confirmation
function CPassword() {
    let valid4 = false;
    if ((CPsswd.value == ('')) || (CPsswd.value != Psswd.value)) {
        Res14.style.display = 'block';
        CPsswd.style.border = '2px solid red';
    } else {
        Res14.style.display = 'none';
        CPsswd.style.border = '2px solid darkblue';
        CPsswd.style.backgroundColor = 'lightgray';
        valid4 = true;
    }
    return valid4;
}


form.addEventListener("keyup", function(item) {
    switch (item.target.id) {
        //Username : 
        case 'username':
            User();
            break;

            //Email :
        case 'email':
            Mail();
            break;

            //Password :
        case 'Psswd':
            Password();
            break;

            //Confirm Password :
        case 'CPsswd':
            CPassword();
            break;
    }
});


//Button 
btn.addEventListener("click", function() {
    User();
    Mail();
    Password();
    CPassword();

    if ((User() == true) && (Mail() == true) && (Password() == true) && (CPassword() == true)) {
        window.location.href = "Home.html";
    }

});