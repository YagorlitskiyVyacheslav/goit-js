let input;
let total = 0;

do {
    input = prompt('Enter the number');
    const isNumber = Number.isNaN(+input);
    if (isNumber === true) {
        continue;
    }
    total += +input;
}while (input !== null)

console.log(`Sum total ${total}`)