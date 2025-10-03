import ExternalServices from "./ExternalServices.mjs";
import ServiceList from "./ServiceList.mjs";
import { loadHeaderfooter, getParam } from "./utils.mjs";

loadHeaderfooter();

const category = getParam("service");

const dataSource = new ExternalServices();


const listElement = document.querySelector(".listing")

const lockerList = new ServiceList(category , dataSource, listElement);

lockerList.init()

// menu

