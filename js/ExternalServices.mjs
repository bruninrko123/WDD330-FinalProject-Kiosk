

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
    


    async getData() {
        const response = await fetch('../json/lockers.json');
        const data = await convertToJson(response);
        return data;

       



    }


    
}