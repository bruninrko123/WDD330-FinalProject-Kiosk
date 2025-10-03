

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


    
}