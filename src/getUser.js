fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(response => {
        response.json()
        .then(json => {
            if (json.getUsersData) {
            fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
            .then(response => {
             response.json()
            .then(json => {
             console.log(json)
             })
        })
        }
    })
 })
 