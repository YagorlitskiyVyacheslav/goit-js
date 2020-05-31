const findBestEmployee = function (employees) {
    let numberOfTasks = 0;
    for (let value of Object.values(employees)) {
        if (numberOfTasks < value) {
            numberOfTasks = value;
        }
        
    }
    const entries = Object.entries(employees)
    for (let entrie of entries) {
        if (entrie.includes(numberOfTasks)) {
            return entrie[0];
        }
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux