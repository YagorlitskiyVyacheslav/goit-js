import { users } from "./users.js";

const getSortedUniqueSkills = users => {
    return users
    .reduce((allSkills, user) => {
        allSkills.push(...user.skills);

        return allSkills;
    }, [])
    .filter((user, index, array) => array.indexOf(user) === array.lastIndexOf(user))
    .sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]