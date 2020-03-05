const intersection = (arr1, arr2) => [...arr1.filter(x => new Set(arr2).has(x))]

console.log(intersection([1,2,3], [4, 3, 2]))