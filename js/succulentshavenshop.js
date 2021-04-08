$(document).ready(function(){
    $("#apply").click(function() {
        if($("#categories").val() == "indoor"){
            $("#indoor").show(500);
            $("#outdoor").hide(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        } else if($("#categories").val() == "outdoor"){
            $("#indoor").hide(500);
            $("#outdoor").show(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        } else{
            $("#indoor").show(500);
            $("#outdoor").show(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        }
    });
    

    $("#subs").click(function(){
        var emailID = $("#emailid").val();
        if(emailID == "") { 
            alert("Enter email address")
        } else {
            alert("You have successfully subscribed");
        }
    });




    $("#cartimg").click(function(){
        $("#indoor").toggle(500);
        $("#outdoor").hide();
        $(".cart").show(500);
        $("#makepayment").focus();
    });
    $("#makepayment").click(function(){
        $(".cart").hide(500);
        $(".pay").show(500);
        $("#confirmpayment").focus();
    });
    $("#confirmpayment").click(function(){
        var name = $("#name").val();
        var emailid = $("#email1").val();
        var phnnum = $("#phnnum").val();
        var addline1 = $("#addline1").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var country = $("#country").val();
        var noc = $("#nameoncard").val();
        var cardnum = $("#cardnum").val();
        var expdate = $("#cardmonth").val();
        var cvv = $("#cvv").val();
        var isValid = true;

        if(name == "") { 
            $("#name").next().text("Required");
            isValid = false;
        } else {
            $("#name").next().text("");
        }

        if(emailid == "") { 
            $("#email1").next().text("Required");
            isValid = false;
        } else {
            $("#email1").next().text("");
        }

        if(phnnum == "") { 
            $("#phnnum").next().text("MRequired");
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

        if(noc == "") { 
            $("#nameoncard").next().text("Required");
            isValid = false;
        } else {
            $("#nameoncard").next().text("");
        }

        if(cardnum == "") { 
            $("#cardnum").next().text("Required");
            isValid = false;
        } else if(cardnum.length < 16 || cardnum.length > 16){
            $("#cardnum").next().text("invalid card number");
        } else {
            $("#cardnum").next().text("");
        }


        if(expdate == "") { 
            $("#cardmonth").next().text("Required");
            isValid = false;
        } else {
            $("#cardmonth").next().text("");
        }

        if(cvv == "") { 
            $("#cvv").next().text("Required");
            isValid = false;
        } else if (cvv > 999){
            $("#cvv").next().text("invalid cvv");
        } else {
            $("#cvv").next().text("");
        }

        if(isValid){
            alert("Your order has been confirmed");
            $("#payment-form").submit();
        }
    });
});