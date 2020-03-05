function transform(str) {

return str.split('.').reduceRight((acc, curr) => ({[curr] : acc}), {})

}
console.log(transform('a.b.c.d'));
