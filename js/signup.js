$(document).ready(function () {
    $("#email").focus();
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var isValid = true;

        if(email == "") { 
            $("#email").next().text("Mandatory");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
 
        if (password == "") {
            $("#password").next().text("Mandatory");
            isValid = false;
        } else {
            $("#passowrd").next().text("");
        }
        if (isValid) {
            $("#login-form").submit();
            $("#login-form").attr("action","index.html");
        }
    });
    $("#signuplink").click(function() {
        $("#sign").hide(1000);
        $("#SIGN").show(1000);
    });
    $("#signinlink").click(function() {
        $("#SIGN").hide(1000);
        $("#sign").show(1000);
    });

    $("#fname").focus();
    $("#logup").click(function(){
        var firstname = $("#fname").val();
        var lastname = $("#lname").val();
        var emailid = $("#email1").val();
        var phnnum = $("#phnnum").val();
        var addline1 = $("#addline1").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var country = $("#country").val();
        var password1 = $("#pwd1").val();
        var password2 = $("#pwd2").val();
        var isValid = true;

        if(firstname == "") { 
            $("#fname").next().text("Mandatory");
            isValid = false;
        } else {
            $("#fname").next().text("");
        }
 
        if (lastname == "") {
            $("#lname").next().text("Mandatory");
            isValid = false;
        } else {
            $("#lname").next().text("");
        }

        if(emailid == "") { 
            $("#email1").next().text("Mandatory");
            isValid = false;
        } else {
            $("#email1").next().text("");
        }

        if(phnnum == "") { 
            $("#phnnum").next().text("Mandatory");
            isValid = false;
        } else {
            $("#phnnum").next().text("");
        }

        if(addline1 == "") { 
            $("#addline1").next().text("Mandatory");
            isValid = false;
        } else {
            $("#addline1").next().text("");
        }
        
        if(city == "") { 
            $("#city").next().text("Mandatory");
            isValid = false;
        } else {
            $("#city").next().text("");
        }

        if(state == "") { 
            $("#state").next().text("Mandatory");
            isValid = false;
        } else {
            $("#state").next().text("");
        }

        if(country == "") { 
            $("#country").next().text("Mandatory");
            isValid = false;
        } else {
            $("#country").next().text("");
        }

        if (password1 == "") {
            $("#pwd1").next().text("Mandatory");
            isValid = false;
        } else {
            $("#pwd1").next().text("");
        }
        
        if (password2 == "") {
            $("#pwd2").next().text("Mandatory");
            isValid = false;
        } else if (password1 != password2) {
            $("#pwd2").next().text("Password doesn't match");
            isValid = false;
        } else {
            $("#pwd2").next().text("");
        }

        if (isValid) {
            $("#signup-form").submit();
        }
    });
});