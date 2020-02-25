fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(function (response) {
        response.json().then(function (json) {
            if (json.getUsersData) {
                fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
                    .then(function (response) {
                        response.json().then(function (json) {
                            console.log(json)
                        })
                    })
            }
        })
    })