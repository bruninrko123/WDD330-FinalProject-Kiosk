import { loadHeaderfooter, getLocalStorage } from "./utils.mjs";

loadHeaderfooter();

function renderOrderContent(){
    const orderItems = getLocalStorage("food-cart");
    const HTMLItems = orderItems.map(orderItemTemplate);
    document.querySelector('.orderItems').innerHTML = HTMLItems.join('');
}


function orderItemTemplate(item) {
    return `
    <img src="${item.image}" alt="${item.name}" width="300" height="300"> 
     <h3>${item.name} - ${item.price}</h3>
     <p>${item.description}</p>`;
    
}   

renderOrderContent();