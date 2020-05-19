let price;

let country = prompt('Введите страну для доставки');
country = String(country).toLowerCase();
if (country === 'null') {
    console.log('Отменено пользователем!')
}
else {
    switch (country) {
        case 'китай':
            price = 100;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;
        case 'чили':
            price = 250;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;
        case 'австралия':
            price = 170;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;
        case 'индия':
            price = 80;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;
        case 'ямайка':
            price = 120;
            console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
            break;
        default:
            alert('В вашей стране доставка не доступна')
    }
}
