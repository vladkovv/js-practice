function getResolvedPromise(code) {
    let promise = new Promise((resolve,reject) => {
        if (code > 300) {
            reject('Error');
        }
        
        resolve(code);
    })

    promise.then(result => console.log(`Successfully with code: ${result}`));
    promise.catch(error => console.log(error));
    promise.finally(console.log('Good'));

}
