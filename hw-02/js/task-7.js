const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    return (login.length >= 4 && login.length <= 16 ? true : false);
};
const isLoginUnique = function (allLogins, login) {
    return (allLogins.indexOf(login) ? true : false);
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
        allLogins.push(login);
        console.log('Логин успешно добавлен');
    } else if (isLoginValid(login) === false) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (isLoginUnique(allLogins, login) === false) {
        console.log('Такой логин уже используется!');
    }
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'Mango'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'