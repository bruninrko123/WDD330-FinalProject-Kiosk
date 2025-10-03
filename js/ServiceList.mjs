import { renderListWithTemplate } from "./utils.mjs";

function lockersTemplate(locker) {
    return `
    <option value =${locker.lockerNumber}>${locker.lockerNumber} - ${locker.size}}</option>`;
}

function foodTemplate(food) {
    return `
     <li class="food-card">
            <h3>${food.name} - ${food.price}</h3>
            <p>${food.description}</p>
            
        </li>
    `;
}


export default class ServiceList{

    constructor(category, dataSource, listElement){

        this.category = category;
        this.dataSource = dataSource
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
        }
        else if (this.category === "menu") {
            renderListWithTemplate(foodTemplate, this.listElement, serviceList);
            
        }
    }



}