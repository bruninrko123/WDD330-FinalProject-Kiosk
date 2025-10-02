import { renderListWithTemplate } from "./utils.mjs";

function lockersTemplate(locker) {
    return `
    <option value =${locker.lockerNumber}>${locker.lockerNumber} - ${locker.size}}</option>`;
}



export default class ServiceList{

    constructor(category, dataSource, listElement){

        this.category = category;
        this.dataSource = dataSource
        this.listElement = listElement;

    }

    async init() {
        const listOfLockers = await this.dataSource.getData();
        console.log(listOfLockers);
        this.renderLockers(listOfLockers);
    }
    
    renderLockers(lockersList){
        console.log(lockersList);
        renderListWithTemplate(lockersTemplate, this.listElement, lockersList);
    }



}