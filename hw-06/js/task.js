import { users } from "./users.js";

//TODO task-01

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' 

//TODO task-02

const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.table(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//TODO task-03

const getUsersWithGender = (users, gender) => {
    return users
        .filter(user => user.gender === gender)
        .map(obgectOnGender => obgectOnGender.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//TODO task-04

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//TODO task-05

const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//TODO task-06

const getUsersWithAge = (users, min, max) => users.filter(user => user.age >= min && user.age <= max);

console.table(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.table(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//TODO task-07

const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

//TODO task-08

const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.includes(friendName))
    .map(user => user.name);


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//TODO task-09

const getNamesSortedByFriendsCount = users => {
    return users
    .sort((a, b) => (a.friends.length - b.friends.length))
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dtson', 'Sheree Anthony', 'Ross Vazquez' ]

//TODO task-10

const getSortedUniqueSkills = users => {
    const allSkills = users.reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    const uniqueSkills = [];
    allSkills.forEach(skill => {
        if (!uniqueSkills.includes(skill)) {
            uniqueSkills.push(skill);
        }
    })
    return uniqueSkills.sort()
};
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]