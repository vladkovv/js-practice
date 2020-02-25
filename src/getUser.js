let firstResponse = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG');
let secondResponse = fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC');
firstResponse
        .then(response => response.json())
        .then(json => {
        if (json.getUsersData) {
            secondResponse
            .then(response => response.json()
            .then(json => console.log(json))
        )
        }
    })

 