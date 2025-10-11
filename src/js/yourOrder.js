import { loadHeaderfooter, getLocalStorage } from "./utils.mjs";

loadHeaderfooter();

function renderOrderContent(){
    const orderItems = getLocalStorage("food-cart");
    const HTMLItems = orderItems.map(orderItemTemplate);
    document.querySelector('.orderItems').innerHTML = HTMLItems.join('');
}


function orderItemTemplate(item) {
    return `
    <section class="foodCard">
    <img class="image" src="${item.image}" alt="${item.name}" width="300" height="300"> 
     <h3 class="foodName">${item.name} - ${item.price}</h3>
     <p class="description">${item.description}</p>
     <p class="quantity">Portions: ${item.quantity}</p>
     </section>`;
    
}   

renderOrderContent();