let input;
let total = 0;

do {
    input = prompt('Enter the number');
    input = Number(input);
    const isNumber = Number.isNaN(input);
    if (isNumber === true) {
        continue;
    }
    total += input;
}while (input !== 0)

console.log(`Sum total ${total}`)