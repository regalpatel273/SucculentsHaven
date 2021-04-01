$(function(){
    $("").animate(
        { fontSize: "275%", opacity: 1.0, left: 0 }, 2000
    );  
    
    $("").click(function(){
            $(this).toggleClass("minus");
            $(this).next().slideToggle(1000);
        }
    );  // end click

})