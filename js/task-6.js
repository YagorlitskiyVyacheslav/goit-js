let input;
let total = 0;

while (true) {
    let addNumber = prompt('Enter the number');
    
    if (addNumber === null) {
        break;
    }

    addNumber = Number(addNumber);
    const isNumber = Number.isNaN(addNumber)
    if (isNumber === true) {
        continue;
    }
    total += addNumber;
}

console.log(`Sum total ${total}`)