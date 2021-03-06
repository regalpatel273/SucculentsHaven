$(document).ready(function () {
    $("#email").focus();
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        var isValid = true;
        var valid = true;

        if(email == "") { 
            $("#email").next().text("Required");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
 
        if (password == "") {
            $("#password").next().text("Required");
            isValid = false;
        } else{
            $("#password").next().text("");
        }
        if (isValid) {
            if(email == sessionStorage.getItem("emailid")){
                if(password == sessionStorage.getItem("pwd")){
                    $("#tname").text(sessionStorage.getItem("fname")+" "+sessionStorage.getItem("lname"));
                    $("#tadd").text(sessionStorage.getItem("add1"));
                    $("#tcity").text(sessionStorage.getItem("city"));
                    $("#tstate").text(sessionStorage.getItem("state"));
                    $("#tcountry").text(sessionStorage.getItem("country"));
                    $("#temail").text(sessionStorage.getItem("emailid"));
                }
                else{
                    $("#password").next().text("incorrect password");
                    valid = false;
                }
            }
            else{
                $("#email").next().text("incorrect email id");
                valid = false;
            }
            if(valid){
                $("#sign").slideUp().hide(1000);
                $("#signindone").slideDown().show(1000);
                $("#login-form").submit();
                $("#inlog").attr("href","index.html");
            }            
        }
    });
    $("#signuplink").click(function() {
        $("#sign").slideUp(1000).hide(1000);
        $("#SIGN").slideDown(1000).show(1000);
        $(".compulsion").text("*");
        $('input').val("");
    });
    $("#signinlink").click(function() {
        $("#SIGN").slideUp(1000).hide(1000);
        $("#sign").slideDown(1000).show(1000);
        $(".compulsion").text("*");
        $('input').val("");
    });

    $("#name").focus();
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
            $("#fname").next().text("Required");
            isValid = false;
        } else {
            $("#fname").next().text("");
        }
 
        if (lastname == "") {
            $("#lname").next().text("Required");
            isValid = false;
        } else {
            $("#lname").next().text("");
        }

        if(emailid == "") { 
            $("#email1").next().text("Required");
            isValid = false;
        } else {
            $("#email1").next().text("");
        }

        if(phnnum == "") { 
            $("#phnnum").next().text("Required");
            isValid = false;
        } else {
            $("#phnnum").next().text("");
        }

        if(addline1 == "") { 
            $("#addline1").next().text("Required");
            isValid = false;
        } else {
            $("#addline1").next().text("");
        }
        
        if(city == "") { 
            $("#city").next().text("Required");
            isValid = false;
        } else {
            $("#city").next().text("");
        }

        if(state == "") { 
            $("#state").next().text("Required");
            isValid = false;
        } else {
            $("#state").next().text("");
        }

        if(country == "") { 
            $("#country").next().text("Required");
            isValid = false;
        } else {
            $("#country").next().text("");
        }

        if (password1 == "") {
            $("#pwd1").next().text("Required");
            isValid = false;
        } else {
            $("#pwd1").next().text("");
        }
        
        if (password2 == "") {
            $("#pwd2").next().text("Required");
            isValid = false;
        } else if (password1 != password2) {
            $("#pwd2").next().text("Password doesn't match");
            isValid = false;
        } else {
            $("#pwd2").next().text("");
        }
        if (isValid) {
            sessionStorage.setItem("fname",firstname);
            sessionStorage.setItem("lname",lastname);
            sessionStorage.setItem("add1",addline1);
            sessionStorage.setItem("city",city);
            sessionStorage.setItem("state",state);
            sessionStorage.setItem("country",country);
            sessionStorage.setItem("emailid",emailid);
            sessionStorage.setItem("pwd",password1);
            $("#signup-form").submit();
        }
    });
});