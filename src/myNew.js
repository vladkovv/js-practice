function myNew(func) {
    let obj = Object.create(func.prototype);
    let args = Array.from(arguments);
    func.apply(obj, args.slice(1));
    return obj;
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