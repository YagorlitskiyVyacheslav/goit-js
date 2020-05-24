let country = prompt('Введите страну для доставки').toLowerCase();
if (country === 'null') {
    console.log('Отменено пользователем!')
}
else {
    switch ((country)) {
        case 'китай':
            console.log(`Доставка в ${country} будет стоить 100 кредитов`)
            break;
        case 'чили':
            console.log(`Доставка в ${country} будет стоить 250 кредитов`)
            break;
        case 'австралия':
            console.log(`Доставка в ${country} будет стоить 170 кредитов`)
            break;
        case 'индия':
            console.log(`Доставка в ${country} будет стоить 80 кредитов`)
            break;
        case 'ямайка':
            console.log(`Доставка в ${country} будет стоить 12 кредитов`)
            break;
        default:
            alert('В вашей стране доставка не доступна')
    }
}
