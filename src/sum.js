function sum(a) {

    let currSum = a;

    function f(b = 0) {
        currSum += b;
        return f;
    }

    f.toString = () => currSum;

    return f;
}

console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4) + 1);
console.log(sum(1)(2)(3)(4)(5) + 1);
