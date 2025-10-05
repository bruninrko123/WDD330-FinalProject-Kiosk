import ExternalServices from "./ExternalServices.mjs";
import { loadHeaderfooter } from "./utils.mjs";

loadHeaderfooter();

const news = new ExternalServices()

news.callNewsAPI();