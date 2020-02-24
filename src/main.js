async function delay(del) {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve(del), del)
    })

    let value = await promise;
    return value;
}

delay(1000).then(value => console.log(`Done with ${value}`));