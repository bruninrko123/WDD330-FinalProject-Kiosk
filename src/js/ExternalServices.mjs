

async function convertToJson(res) {
    const jsonData = await res.json();
    if (res.ok) {
        return jsonData;
    }
    else{
        throw { name: 'External Services Error:', message: jsonData }
    }
}





export default class ExternalServices {

    constructor() { }
    


    async getData(category) {
        

         const response = await fetch(`../json/${category}.json`);
         const data = await convertToJson(response);
         return data;

    }

    // async callNewsAPI(newsElement, query) {
    //     const news = [];
    //     // const query = 'Rio de Janeiro (Turismo)';
    //     const APIKey = "c0403516282d42d1be18381f56a752d7";
    //     const url = `https://newsapi.org/v2/everything?q=${query}&from=2025-10&sortBy=popularity&apiKey=${APIKey}`;
    //     const response = await fetch(url);
        
    //     const data = await convertToJson(response);
    //     console.log(data);
    //     data.articles.forEach(article => {
    //         console.log(article.title);
    //         let p = document.createElement('p');
    //         p.textContent = article.title;
    //         newsElement.appendChild(p);

    //         // nice one

    //         news.push(article.title);

    //         return news;

    //     });

        
                
            
    // }

    // displayNews(news){
            
    //     const counter = 0;



    //     // news.forEach(article => {
    //     //     console.log(article.title);
    //     //     let p = document.createElement('p');
    //     //     p.textContent = article.title;
    //     //     newsElement.appendChild(p);


            

        
    //     };

    
    // }
}