import News from "./News.mjs";
import { loadHeaderfooter } from "./utils.mjs";

loadHeaderfooter();


const newsElement = document.querySelector('.news');
const query = "Rio de Janeiro (Turismo)";
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const news = new News(newsElement, query, next, prev);
news.init();

