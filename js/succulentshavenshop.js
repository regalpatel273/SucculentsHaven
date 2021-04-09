$(document).ready(function(){
    $("#apply").click(function() {
        if($("#categories").val() == "indoor"){
            $("#indoor").fadeIn(500);
            $("#outdoor").fadeOut(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        } else if($("#categories").val() == "outdoor"){
            $("#indoor").fadeOut(500);
            $("#outdoor").fadeIn(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        } else{
            $("#indoor").fadeIn(500);
            $("#outdoor").fadeIn(500);
            $(".cart").hide(500);
            $(".pay").hide(500);
        }
    });
    

    $("#subs").click(function(){
        var emailID = $("#emailid").val();
        if(emailID == "") { 
            alert("Enter email address");
        } else {
            alert("You have successfully subscribed");
        }
    });

    var divid = 0;
    var tcart = 0;
    var cartname = 0;
    var cartprice = 0;
    var cartitems = 0;
    var carttotal = 0;
    var totalamount = 0;
    $("section").find("button").click(function(){
        divid += 1;
        tcart += 1;
        cartname += 1;
        cartprice += 1;
        cartitems += 1;
        carttotal += 1;
        var num = $(this).siblings(".num").children().val();
        if(num == "" || num === 0){
            alert("Number of items cannot be zero");
        } else{
            var totalprice = parseFloat($(this).siblings(".price").text().split(" ")[1]) * num;    
            var content =  `<div id="divid${divid}" style="clear: left; width: auto;">
                                <section class="cartimg" style="display: inline-block; width: auto;">
                                    <img src="${$(this).siblings("img").attr("src")}" alt="succulents" height="200" width="175" id="tcart${tcart}">
                                </section>
                                <section style="display: inline-block; width: auto;">
                                    <label id="cartname${cartname}">Name:</label><span> ${$(this).siblings("h3").text()}</span><br>
                                    <label id="cartprice${cartprice}">Price:</label><span> ${$(this).siblings(".price").text()}</span><br>
                                    <label id="cartitems${cartitems}">Number of items:</label><span> ${num}</span><br>
                                    <label id="carttotal${carttotal}">Total Price:</label><span> $ ${totalprice}</span><br>
                                </section>
                            </div>`;
            $("#divid0").find("h3").remove();
            $(content).appendTo($(".cart").find("#divid0"));
            totalamount += totalprice;
            $(".carttotalamount").next().text(" $ "+totalamount);
        }        
    });


    $("#cartimg").click(function(){
        $("#indoor").toggle(500);
        $("#outdoor").fadeOut();
        $(".cart").fadeIn(500);
        $("#makepayment").focus();
    });
    $("#makepayment").click(function(){
        if(totalamount === 0){
            alert("cart empty");
        } else{
            $(".cart").fadeOut(500);
            $(".pay").fadeIn(500);
            $("#confirmpayment").focus();
        }   
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