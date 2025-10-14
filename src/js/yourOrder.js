import { loadHeaderfooter, getLocalStorage, convertToJson } from "./utils.mjs";

loadHeaderfooter();

async function renderOrderContent(){
    const orderItems = getLocalStorage("food-cart");
    
    
    const HTMLItems = orderItems.map(orderItemTemplate);
    document.querySelector('.orderItems').innerHTML = HTMLItems.join('');

}

function calculateTotal() {
    const orderItems = getLocalStorage("food-cart");
    let total = 0;
    orderItems.forEach(item => {
        total += item.price  * (item.quantity);
    });

    return total;
}

async function renderTotal() {
    const total = calculateTotal();

    const usd = await currency(total);

    document.querySelector(".total").innerHTML = `
    <p>Total: R$${total}<br> Total in USD: $${usd.toFixed(2)}</p>`;

}


function orderItemTemplate(item) {
    

    return `
    <section class="foodCard">
    <img class="image" src="${item.image}" alt="${item.name}" width="300" height="300"> 
     <h3 class="foodName">${item.name} - R$${item.price} </h3>
     <p class="description">${item.description}</p>
     <p class="quantity">Portions: ${item.quantity}</p>
     </section>`;
    
    
    
}   

async function currency(amount) {
    
    try {
        
        
        const APIKey = "Dw9UjYZfbADgShsOYuMrgWPnnzm8WRHI";

        const url = `https://api.currencybeacon.com/v1/convert?api_key=${APIKey}&from=BRL&to=USD&amount=${amount}`;

        const response = await fetch(url);
        

        const data = await convertToJson(response);
        
        const convertedValue = data.value;
        
        return convertedValue;
        
    } catch (err) {
        console.log("error loading currency api", err);
    }
}


renderOrderContent();
//total thing
renderTotal();
currency('100');