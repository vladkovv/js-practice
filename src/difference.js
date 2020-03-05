const difference = (arr1, arr2) => [...arr1.filter(x => !new Set(arr2).has(x))];

console.log(difference([1,2,3,7,9],[4,5,7,2,1,5]));
