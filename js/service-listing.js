import ExternalServices from "./ExternalServices.mjs";
import ServiceList from "./serviceList.mjs";
import { loadHeaderfooter } from "./utils.mjs";

loadHeaderfooter();

const dataSource = new ExternalServices();

const listElement = document.querySelector("#lockers")

const lockerList = new ServiceList('lockers', dataSource, listElement);

lockerList.init()