$(document).ready(function () {
    $("#name").focus();
    $("#contactus").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phnnum = $("#number").val();
        var country = $("#country").val();
        var message = $("#message").val();
        var isValid = true;

        if(name == "") { 
            $("#name").next().text("This field is required");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        if(email == "") { 
            $("#email").next().text("This field is required");
            isValid = false;
        } else {
            $("#email").next().text("");
        }

        if(phnnum == "") { 
            $("#number").next().text("This field is required");
            isValid = false;
        } else {
            $("#number").next().text("");
        }

        if(country == "") { 
            $("#country").next().text("This field is required");
            isValid = false;
        } else {
            $("#country").next().text("");
        }

        if (message == "") {
            $("#message").next().text("This field is required");
            isValid = false;
        } else {
            $("#message").next().text("");
        }
        if (isValid) {
            sessionStorage.setItem("name",name);
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("number",phnnum);
            sessionStorage.setItem("country",country);
            sessionStorage.setItem("message",message);
            $("#contact-form").submit();
        }
    });
});