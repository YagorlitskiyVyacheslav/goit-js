const formatString = function (string) {
    if (string.length >= 40) {
        const arrayString = string.split('');
        arrayString.length = 40;
        string = arrayString.join('');
        return console.log(string,'...');
    }
    return console.log(string);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
formatString('Curabitur ligula sapien, tincidunt non.');
// вернется оригинальная строка

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
// вернется форматированная строка

formatString('Curabitur ligula sapien.');
// вернется оригинальная строка

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');
// вернется форматированная строка