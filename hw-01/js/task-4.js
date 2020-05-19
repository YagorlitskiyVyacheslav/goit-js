let credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt('Введите количество дроидов');

if (numberOfDroids === null) {
    console.log('Отменено пользователем!');
} else {
    const totalPrice = pricePerDroid*numberOfDroids;
    if (totalPrice <= credits) {
        console.log(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
    } else {
        console.log('Недостаточно средств на счету!')
    }
}

