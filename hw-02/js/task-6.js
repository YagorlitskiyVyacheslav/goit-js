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
    numbers.push(+input); 
} while (input !== null)

for (let number of numbers) {
    total += number;
}

console.log(`The totoal sum of numbers is equal to: ${total}`);