

function convertToJson(res) {
    const jsonData = res.json();
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

    async callNewsAPI() {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Apple&from=2025-10-04&sortBy=popularity&apiKey=c0403516282d42d1be18381f56a752d7"
        );

        console.log(response);
    }

    
}