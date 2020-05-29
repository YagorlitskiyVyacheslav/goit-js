let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Enter the Number');
    const isNumber = Number.isNaN(+input);
    if (isNumber === true) {
        alert('No number wes entered. Please try again.');
        continue;
    }
    if (input !== null) {
        numbers.push(+input);
    }
} while (input !== null)

if (numbers.length !== 0) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`The total sum of numbers is equal to: ${total}`);
} else if (numbers.length === 0) {
    console.log ('The array is empty');
}

