const response = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');

response
        .then(response => response.json())
        .then(json => {
        if (json.getUsersData) {
            return fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
        }
    })
        .then(response => response.json()
        .then(json => console.log(json))       
    )

 