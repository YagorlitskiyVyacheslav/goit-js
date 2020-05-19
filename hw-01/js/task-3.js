const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let password = prompt('Введите пароль');

// ELSE IF

if (password === null) {
    message = 'Отменено пользователем!';
    alert(message);
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}