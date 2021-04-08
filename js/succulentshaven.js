$(document).ready(function () {
    $("#subs").click(function(){
        var emailID = $("#emailid").val();
        if(emailID == "") { 
            alert("Enter email address")
        } else {
            alert("You have successfully subscribed");
        }
    });
});