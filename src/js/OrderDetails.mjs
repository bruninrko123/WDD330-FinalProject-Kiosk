import { setLocalStorage, getLocalStorage } from "./utils.mjs";

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
  const ul = document.createElement("ul");
  const addButton = document.createElement("button");
  addButton.classList.add("add")  
  img.src = food.image;
  img.alt = food.name;
  h3.textContent = `${food.name} - ${food.price}`;
  p.textContent = food.description;
  p2.textContent = food.nutritionalInfo;
    addButton.textContent = "Add to the order";

  food.ingredients.forEach((ingredient) => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    ul.appendChild(li);
  });
  show.append(img, h3, p, p2, ul, addButton);
}
