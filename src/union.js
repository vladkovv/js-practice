const union = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

console.log(union([4,5,7,2,1,5],[1,2,3,7,9]));
