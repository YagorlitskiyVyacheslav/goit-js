const findLongestWord = function(string) {
    const items = string.split(' ');
    let longestWord = items[0];
    for (let i = 0; i < items.length; i += 1) {
        
        if (longestWord.length <= items[i].length) {
            longestWord = items[i];
        }
    }
    return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
