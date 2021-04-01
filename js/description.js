// This webpage is created by: Rigalkumar Patel (C0796389) 
"use strict";
class Succulents{
    constructor(
        plantName,
        price,
        type,
        count
    ){
        this.plantName = plantName;
        this.price = price;
        this.type = type;
        this.count = count;
    }
}
var $ = (id) => {
    return document.getElementById(id);
}
var succulent = new Succulents;
succulent.plantName = "Zebra Plant";
succulent.price = 14.99;
succulent.type = "Indoor";
succulent.count = 0;
var count = 0;
var addToCart = () => {
    if(count === 0){
        succulent.count = prompt("Enter number of items:");
        $("atctick").innerHTML = `<img src="images/tick mark.gif" alt="tick mark" id="atcimg" height="25px" width="25px">`;
        count +=1;
    }
    else{
        alert("Item already added in the cart");
    }
}
window.onload = () => {
    $("atcbutton").onclick = addToCart;
    $("atcbutton").focus();
}
export default succulent;
