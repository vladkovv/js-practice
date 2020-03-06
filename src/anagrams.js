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

function anagram(arr) {
    const ordered = [];
    
    arr.forEach((item) => {
        let word = item.split('').sort().join('');

        if (!ordered.hasOwnProperty(word)) {
            ordered[word] = [];
        }

        ordered[word].push(item);
    })

    return ordered;
}
console.log(anagram(input))