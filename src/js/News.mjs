import { convertToJson } from "./utils.mjs";


export default class News {

    constructor(newsElement, query, nextButton, prevButton) {
        this.newsElement = newsElement;
        this.query = query;
        this.counter = 0;
        this.news = [];
        this.nextButton = nextButton;
        this.prevButton = prevButton;
        this.text = [];
    }

    async init() {
        this.news = await this.callNewsAPI();   
        this.displayNews(this.news);
        
    }

    async callNewsAPI() {
      const news = [];
      const date = new Date();
      console.log(date.toISOString().split("T")[0].slice(0, 7));
      const newsDate = date.toISOString().split("T")[0].slice(0, 7);
      // const query = 'Rio de Janeiro (Turismo)';
      
        // const APIKey = "c0403516282d42d1be18381f56a752d7";
      
      // const url = `https://newsapi.org/v2/everything?q=${this.query}&from=${newsDate}&sortBy=popularity&apiKey=${APIKey}`;
      
      try {
        const APIKey = "kMAugHN4pUx8LaT98AqMx1j0XyBRredM0WP5M2g4FvH583ZB";
        const url =
          "https://api.currentsapi.services/v1/latest-news?" +
          "language=pt&" +
          `apiKey=${APIKey}`;

        const response = await fetch(url);
        console.log(response);
        const data = await convertToJson(response);
        console.log(data);
        data.news.forEach((article) => {
          news.push(article);
          // news.push(article.title);
          // this.text.push(article.content);
        });
        return news;
      } catch (err) {
        console.log("something went wrong fetching from the API",err);
      }
    }

    displayNews(news) {
      console.log(news);
      // console.log(this.news);
      const h2 = document.createElement("h2");
      h2.textContent = news[this.counter].title;
      this.newsElement.appendChild(h2);

      // content
      const img = document.createElement("img");
        img.src = news[this.counter].image;
        img.style.width = "600px";
        this.newsElement.appendChild(img);
        
        //source 
        const source = document.createElement('p');
        // source.innerHTML = `Source: ${news[this.counter].source.name} <br> 
        source.innerHTML = `<a href="${news[this.counter].url}">${news[this.counter].url}</a>`;
        this.newsElement.appendChild(source);

      this.nextButton.addEventListener("click", () => {
        if (this.counter < news.length - 1) {
          this.newsElement.innerHTML = ``;
          this.counter++;

          // creating and filling news elements
          const h2 = document.createElement("h2");
          h2.textContent = news[this.counter].title;
          this.newsElement.appendChild(h2);

          // content
          const img = document.createElement("img");
          img.src = news[this.counter].image;
          img.style.width = "600px";
          this.newsElement.appendChild(img);

          //source
          const source = document.createElement("p");
          // source.innerHTML = `Source: ${news[this.counter].source.name} <br>
          source.innerHTML = `<a href="${news[this.counter].url}">${
            news[this.counter].url
          }</a>`;
          this.newsElement.appendChild(source);
        }
      });
      this.prevButton.addEventListener("click", () => {
        if (this.counter > 0) {
          this.newsElement.innerHTML = ``;
          this.counter--;

          // creating and filling news elements
          const h2 = document.createElement("h2");
          h2.textContent = news[this.counter].title;
          this.newsElement.appendChild(h2);

          // content
          const img = document.createElement("img");
          img.src = news[this.counter].image;
          img.style.width = "600px";
          this.newsElement.appendChild(img);

          //source
          const source = document.createElement("p");
          // source.innerHTML = `Source: ${news[this.counter].source.name} <br>
          source.innerHTML = `<a href="${news[this.counter].url}">${
            news[this.counter].url
          }</a>`;
          this.newsElement.appendChild(source);
        }
      });
    }
}