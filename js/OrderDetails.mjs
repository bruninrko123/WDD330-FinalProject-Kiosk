import { setLocalStorage } from "./utils.mjs";



export default class OrderDetails {
    constructor(foodId, parentElement) {
        this.foodId = foodId;
        
        this.food = {};

    }

    async init() {
        const asNumber = parseInt(this.foodId);
;        const dataSource = '../json/menu.json';
        const response = await fetch(dataSource);
        const data = await response.json();
        console.log(data);
       const specificFood = data.find(food => food.id === asNumber );
        console.log(specificFood);
        this.food = specificFood;
        this.renderFoodDetails();

    }
 

    addFoodToCart() {
        setLocalStorage('food-cart', food);


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

  img.src = food.image;
  img.alt = food.name;
  h3.textContent = `${food.name} - ${food.price}`;
  p.textContent = food.description;
  p2.textContent = food.nutritionalInfo;

  food.ingredients.forEach((ingredient) => {
    let li = document.createElement("li");
    ul.appendChild(li);
  });
  show.append(img, h3, p, p2, ul);
}