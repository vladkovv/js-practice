const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

const result = url.reduce((prevPromise, curr) => {
    return prevPromise
    .then(data => fetch(curr)
    .then(data => data.json())
    .then(response => [...data, response])
    );
}, Promise.resolve([]));

result.then(data => console.log(data));
