$(document).ready(function () {
    $("#atcbutton").focus();
    var click = 0;
    $("#atcbutton").click(function(){
        if (click == 0) {
            var num = $(this).siblings(".num").children().val();
            if(num == "" || num === 0){
                alert("Number of items cannot be zero");
            } else{
                $("#cartname").next().text(" "+$("#plantname").text());
                $("#cartprice").next().text(" $ "+parseFloat($("#price").text().split(" ")[1]));
                $("#cartitems").next().text(" "+sessionStorage.getItem("num"));
                var totalprice = parseFloat($("#price").text().split(" ")[1])*parseFloat(sessionStorage.getItem("num"));
                $(".carttotal").next().text(" $ "+totalprice.toFixed(2));
                click += 1;
            }
        }
        else{
            alert("Items already in the cart");
        }
        
    });
    $("#cartimg").click(function(){
        $("#container").toggle(500);
        $(".cart").show(500);
        $("#makepayment").focus();
    });
    $("#makepayment").click(function(){
        $(".cart").hide(500);
        $(".pay").show(500);
        $("#name").focus();
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