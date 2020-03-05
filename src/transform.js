function transform(str) {
    
    const dot = '.';
    const arr = str.split(dot);
    const result = arr.reduceRight((acc, curr, index, arr) => {

       return index < arr.length - 1 ?  {[curr] : acc} : {[curr] : null}

    }, {})

    return result;
}
console.log(transform('a.b.c.d'));
