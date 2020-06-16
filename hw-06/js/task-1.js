import { users } from "./users.js";
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' 

// Наскільки зрозумів тут було потрібно написати просто функцію яка буде приймати будьякий масив об'єктів і повертати масив всіх значень властивостей name. 