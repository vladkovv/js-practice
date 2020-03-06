const input = [
    'вертикаль',
    'кильватер',
    'апельсин',
    'спаниель',
    'австралопитек',
    'ватерполистка',
    'кластер',
    'сталкер',
    'стрелка'
  ];
  function anagram (arr) {
    const ordered = [];

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].split('').sort().join('');

        if (!ordered.hasOwnProperty(word)) {
            ordered[word] = [];
        }

        ordered[word].push(arr[i]);
    } 

    return ordered;
}

console.log(anagram(input))
