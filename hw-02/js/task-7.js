const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    if (login.length >= 4 && login.length <= 16) {
        return true;
    }
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
};

const isLoginUnique = function (allLogins, login) {
    for (let oneLogin of allLogins) {
        if (oneLogin === login) {
            console.log('Такой логин уже используется!');
            return false;
        }
    }
    return true;
};


const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === true && isLoginUnique(allLogins, login) === true) {
        allLogins.push(login);
        console.log('Логин успешно добавлен');
    }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'Mango'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'