async function delay(del) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(del);
        }, del);
    })
}

delay(1000).then(value => console.log(`Done with ${value}`));
