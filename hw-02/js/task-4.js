const formatString = function (string) {
    return (string.length <= 40 ? string : `${string.slice(0, 40)}...`);

    // if (string.length >= 40) {
    //     const arrayString = string.split('');
    //     arrayString.length = 40;
    //     string = arrayString.join('');
    //     return console.log(string,'...');
    // }
    // return console.log(string);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка