const checkForSpam = function (message) {
    message = message.toLowerCase();
    const items = message.split(' ');
        for (let item of items) {
            if (item.includes('sale') || item.includes('spam')) {
                return true;
            }
        }
        return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true