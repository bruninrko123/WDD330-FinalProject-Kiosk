import { renderListWithTemplate } from "./utils.mjs";

function lockersTemplate(locker) {
  return `
    <option value =${locker.lockerNumber}>${locker.lockerNumber} - ${locker.size}}</option>`;
}

function foodTemplate(food) {
  return `
     <ul class="food-card">
     <img src="${food.image}" alt="${food.name}" width="300" heigth="300"> 
     <h3>${food.name} - ${food.price}</h3>
            <p>${food.description}</p>
            
        </ul>
    `;
}

export default class ServiceList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const listOfServices = await this.dataSource.getData(this.category);
    console.log(listOfServices);
    this.renderService(listOfServices);
  }

  renderService(serviceList) {
    if (this.category === "lockers") {
      console.log(serviceList);
      renderListWithTemplate(lockersTemplate, this.listElement, serviceList);
    } else if (this.category === "menu") {
      renderListWithTemplate(foodTemplate, this.listElement, serviceList);
      const type = document.querySelector("#type");

      type.addEventListener("input", () => {
        if (type.value === "All") {
          renderListWithTemplate(
            foodTemplate,
            this.listElement,
            serviceList,
            "afterBegin",
            true
          );
        } else if (type.value === "Foods") {
          const filteredList = serviceList.filter(
            (item) => item.category === "food"
          );
          renderListWithTemplate(
            foodTemplate,
            this.listElement,
            filteredList,
            "afterBegin",
            true
          );
          }
          
        else if (type.value === "Drinks") {
            const filteredList = serviceList.filter(
              (item) => item.category === "drink"
            );
            renderListWithTemplate(
              foodTemplate,
              this.listElement,
              filteredList,
              "afterBegin",
              true
            );
          }
      });
    }
  }
}
