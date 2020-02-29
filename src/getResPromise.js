function getResolvedPromise(code) {
    new Promise((resolve, reject) => {
            if (code > 300) {
                reject('Error');
            }

            resolve(code);
        })
        .then(result => console.log(`Successfully with code: ${result}`))
        .catch(error => console.log(error))
        .finally(console.log('Good'));

}
