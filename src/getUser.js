const firstResponse = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
let secondResponse = null;

firstResponse
        .then(response => response.json())
        .then(json => {
        if (json.getUsersData) {
            secondResponse = fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
        }
 secondResponse
        .then(response => response.json()
        .then(json => console.log(json))       
    )
    })

 