function validEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        return true;
    }
    else {
        return false;
    }
}

function save() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("Email").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("mobile").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pincode").value;
    console.log(email);
    if (name == '') {
        document.getElementById("errormessage").innerHTML = "Name Can Not Be Blank.";
        document.getElementById("name").style.backgroundColor = "#ff8080";
        return;
    } else {
        document.getElementById("name").style.background = "";
        document.getElementById("errormessage").innerHTML = "";
    }
    if (email == '') {
        document.getElementById("errormessage").innerHTML = "Email Can Not Be Blank.";
        document.getElementById("Email").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("Email").style.background = "";
        document.getElementById("errormessage").innerHTML = "";
    }
    if (!validEmail(email)) {
        document.getElementById("errormessage").innerHTML = "Please Enter Email In Valid Format.";
        document.getElementById("Email").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("Email").style.background = "";
        document.getElementById("errormessage").innerHTML = "";
    }
    if (address == '') {
        document.getElementById("errormessage").innerHTML = "Address Can Not Be Blank";
        document.getElementById("address").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("address").style.background = "";
    }
    if (number == '') {
        document.getElementById("errormessage").innerHTML = "Mobile Number Can Not Be Blank";
        document.getElementById("mobile").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("mobile").style.background = "";
    }
    if (number.length < 10) {
        document.getElementById("errormessage").innerHTML = "Number Length Can Not Be Less Than 10.";
        document.getElementById("mobile").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("mobile").style.background = "";
    }
    if (number.length > 10) {
        document.getElementById("errormessage").innerHTML = "Number Length Can Not Be Greater Than 10.";
        document.getElementById("mobile").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("mobile").style.background = "";
    }
    if (state == '') {
        document.getElementById("errormessage").innerHTML = "State Can Not Be Blank.";
        document.getElementById("state").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("state").style.background = "";
    }
    if (pincode == '') {
        document.getElementById("errormessage").innerHTML = "Zip(Pincode) Can Not Be Blank.";
        document.getElementById("pincode").style.background = "#ff8080";
        return;
    } else {
        document.getElementById("errormessage").innerHTML = "";
        document.getElementById("pincode").style.background = "";
    }
    alert("Your detail are submited Successfuly.Our Team will contact to you.");
    var currentLocation=window.location.href;
    window.location.href = 'data.php?name=' + name + '&email=' + email + '&address=' + address + '&number=' + number + '&state=' + state + "&pin=" + pincode + '&page=' + currentLocation;
}