

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
        

        const response = await fetch('http://localhost:3000/api/lockers');
        try {
            if (!response.ok) {
                throw new Error("error fetching lockers");
                
            }

            const data = await convertToJson(response);
            
          
            return data
        } catch (err) {
            console.log("error fetching", err);
        }


    }


    
}