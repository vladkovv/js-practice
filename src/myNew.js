function myNew(func, ...args) {
    let obj = Object.create(func.prototype);
    func.apply(obj, args);
    
    if(obj instanceof Object) {
    return obj;
    }
}

let Cat = function (sound) {
    this.sound = sound;
}

Cat.prototype.sounds = function () {
    console.log(this.sound);
}

let myCat = myNew(Cat, 'meow');
myCat.sounds();

let mySecCat = myNew(Cat, 'meooooow!');
mySecCat.sounds();
