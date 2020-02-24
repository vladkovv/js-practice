class Universe {
    constructor() {
        if (Universe.instance instanceof Universe) {
            return Universe.instance;
        }

        this.size = 100;
        Universe.instance = this;
        return this;
    }

    getSize() {
        return this.size;
    }

    setSize(number) {
        return this.size = number;
    }
}

let a = new Universe();
let b = new Universe();

console.log(a.getSize(), b.getSize());
a.setSize(200);
console.log(a.getSize(), b.getSize());
b.setSize(300);
console.log(a.getSize(), b.getSize());
console.log(a === b);