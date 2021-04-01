var $ = (id) => {
    return document.getElementById(id);
}

var signinValidate = () => {
    let emailId = $("email");
    let password = $("password");
    let isValid = true;
    if(emailId.value == ""){
        $("email").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("email").nextElementSibling.firstChild.nodeValue = "";
    }
    if(password.value == ""){
        $("password").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("password").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isValid){
        $("login-form").submit();
        $("login-form").setAttribute("action","index.html");
    }
}

var signupValidate = () => {
    let firstName = $("fname");
    let lastName = $("lname");
    let email_id = $("email1");
    let phnnum = $("phnnum");
    let addline1 = $("addline1");
    let city = $("city");
    let state = $("state");
    let country = $("country");
    let password1 = $("pwd1");
    let password2 = $("pwd2");
    let isValid = true;
    if(firstName.value == ""){
        $("fname").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("fname").nextElementSibling.firstChild.nodeValue = "";
    }
    if(lastName.value == ""){
        $("lname").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("lname").nextElementSibling.firstChild.nodeValue = "";
    }
    if(email_id.value == ""){
        $("email1").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("email1").nextElementSibling.firstChild.nodeValue = "";
    }
    if(phnnum.value == ""){
        $("phnnum").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("phnnum").nextElementSibling.firstChild.nodeValue = "";
    }
    if(addline1.value == ""){
        $("addline1").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("addline1").nextElementSibling.firstChild.nodeValue = "";
    }
    if(city.value == ""){
        $("city").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("city").nextElementSibling.firstChild.nodeValue = "";
    }
    if(state.value == ""){
        $("state").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("state").nextElementSibling.firstChild.nodeValue = "";
    }
    if(country.value == ""){
        $("country").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("country").nextElementSibling.firstChild.nodeValue = "";
    }
    if(password1.value == "" && password2.value == ""){
        $("pwd1").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else{
        $("pwd1").nextElementSibling.firstChild.nodeValue = "";
    }
    if(password2.value == ""){
        $("pwd2").nextElementSibling.firstChild.nodeValue = "Required";
        isValid = false;
    }
    else if(password1.value != password2.value){
        $("pwd2").nextElementSibling.firstChild.nodeValue = "Passwords doesn't match";
        isValid = false;
    }
    else{
        $("pwd2").nextElementSibling.firstChild.nodeValue = "";
    }
    if(isValid){
        $("signup-form").submit();
        $("signup-form").setAttribute("action","index.html");
    }
}

var signInsignUp = () => {
    if($("sign").hasAttribute("class")){
        $("sign").removeAttribute("class");
        $("sign").setAttribute("class","signin-close");
        $("SIGN").removeAttribute("class");
        $("SIGN").setAttribute("class","signup-open");
    }
}

var signUpsignIn = () => {
    if($("SIGN").hasAttribute("class")){
        $("SIGN").removeAttribute("class");
        $("SIGN").setAttribute("class","signup-close");
        $("sign").removeAttribute("class");
        $("sign").setAttribute("class","signin-open");
    }
}

window.onload = () => {
    $("login").onclick = signinValidate;
    $("email").focus();
    $("signuplink").onclick = signInsignUp;
    $("logup").onclick = signupValidate;
    $("fname").focus();
    $("signinlink").onclick = signUpsignIn;
}