import succulent from "./description.js";

const cartdiv = document.createElement("div");
cartdiv.innerHTML = `
    <h3>Name of the Plant: ${succulent.plantName}</h3>
    <h3>Price: $${succulent.price}</h3>
    <h3>Type: ${succulent.type}</h3>
    <h3>Number of Items ordered: ${succulent.count}</h3>
`;
document.getElementById("ane").append(cartdiv);