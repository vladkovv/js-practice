const transform = (str) => str.split('.').reduceRight((acc, curr) => ({[curr] : acc}), {})

console.log(transform('a.b.c.d'));
