var $ = function (id) {
    return document.getElementById(id);
}
var joinForm = function () {
    var name = $("name");
    var email = $("email");
    var number = $("number");
	var country = $("country");
	var message = $("message");
    var isValid = true;
    
    // validate the first entry
    if (name.value == "") { 
        name.previousElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        name.previousElementSibling.firstChild.nodeValue = "";
    } 
    // validate the second entry
    if (email.value == "") { 
        email.previousElementSibling.firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else {
        email.previousElementSibling.firstChild.nodeValue = "";
    } 
    // validate the third entry
    if (number.value == "") { 
        number.previousElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        number.previousElementSibling.firstChild.nodeValue = "";
    } 
    // validate the fourth entry
    if (country.value == "") { 
        country.previousElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        country.previousElementSibling.firstChild.nodeValue = "";
    }
     // validate the fifth entry
     if (message.value == "") { 
        message.previousElementSibling.firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        message.previousElementSibling.firstChild.nodeValue = "";
    } 
    if (isValid) {
        $("contact_form").submit(); 
    }
}
window.onload = function () {
    $("join_form").onclick = joinForm;
    $("name").focus();
 } 
     
     
     
 

    
