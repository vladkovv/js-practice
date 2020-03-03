function objectCreate(proto, properties) {
    function func() {}
    func.prototype = proto;
    const obj = new func();

    if (properties) {
        Object.defineProperties(obj, properties);
    }

    return obj
}

const obj1 = {
    sayHi: () => console.log(`Greetings!`)
}

const obj2 = objectCreate(obj1, {
    name: {
        value: 'Max'
    }
})

console.log(obj2);
obj2.sayHi();
