import { getParam, loadHeaderfooter } from "./utils.mjs";
import OrderDetails from "./OrderDetails.mjs";


loadHeaderfooter();

const foodId = getParam('food');

const parentElement = document.querySelector('.show');

const food = new OrderDetails(foodId, parentElement);

food.init();