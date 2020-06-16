import { users } from "./users.js";

const getNamesSortedByFriendsCount = users => {
    return users.sort((a, b) => (a.friends.length < b.friends.length) ? 1 : ((b.friends.length < a.friends.length) ? -1 : 0));
};

console.table(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dtson', 'Sheree Anthony', 'Ross Vazquez' ]