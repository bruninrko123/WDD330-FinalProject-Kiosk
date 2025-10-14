import { setLocalStorage, getLocalStorage, convertToJson } from "./utils.mjs";

export default class OrderDetails {
  constructor(foodId, parentElement) {
    this.foodId = foodId;

    this.food = {};
  }

  async init() {
    const asNumber = parseInt(this.foodId);
    const dataSource = "../json/menu.json";
    const response = await fetch(dataSource);
    const data = await response.json();
    console.log(data);
    const specificFood = data.find((food) => food.id === asNumber);
    console.log(specificFood);
    this.food = specificFood;
    
      this.renderFoodDetails();
      
      document.querySelector('.add').addEventListener('click', () => {
        this.addFoodToOrder(this.food);
        
      });
  }

  

   addFoodToOrder() {
    const orderItems = getLocalStorage("food-cart");
    
    const found = orderItems.find(item => item.id === this.food.id);


    if (!found) {
      orderItems.push({ ...this.food, quantity: 1 });
      setLocalStorage("food-cart", orderItems);
      
    }
    else {
      found.quantity++;

      setLocalStorage("food-cart", orderItems)
    }
      
  }

  renderFoodDetails() {
    dialogtemplate(this.food);
  }

  
}

async function currency(amount) {
    
    try {
        
        
        const APIKey = "Dw9UjYZfbADgShsOYuMrgWPnnzm8WRHI";

        const url = `https://api.currencybeacon.com/v1/convert?api_key=${APIKey}&from=BRL&to=USD&amount=${amount}`;

        const response = await fetch(url);
        console.log(response);

        const data = await convertToJson(response);
        console.log(data);
        const convertedValue = data.value;
        console.log(convertedValue);
        return convertedValue;
        
    } catch (err) {
        console.log("error loading currency api", err);
    }
}


function dialogtemplate(food) {
  // return `
  // <img src="${food.image}" alt="${food.name}" width="300" height="300">
  //    <h3>${food.name} - ${food.price}</h3>
  //    <p>${food.description}</p>
  //    <p>${food.nutriononalInfo}</p>
  //    `;
  const show = document.querySelector(".show");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const ul = document.createElement("ul");
  const addButton = document.createElement("button");
  addButton.classList.add("add")  
  img.src = food.image;
  img.alt = food.name;
  h3.textContent = `${food.name} - R$${food.price}`;
  p.textContent = food.description;
  p2.innerHTML = `<strong>Nutrional info:</strong> ${food.nutritionalInfo}`;
    addButton.textContent = "Add to the order";
  p3.innerHTML = `<strong>Ingredients:</strong>`;
  food.ingredients.forEach((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    ul.appendChild(li);
  });
  show.append(img, h3, p2, p3, ul, addButton);

  
}
