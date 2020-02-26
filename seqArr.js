const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

let promise = Promise.resolve();
let results = [];

url.forEach(url => {
    promise = promise
        .then(url => fetch(url))
        .then(data => data.json())
        .then(data => results.push(data))       
})

promise.then(results => console.log(results));
    