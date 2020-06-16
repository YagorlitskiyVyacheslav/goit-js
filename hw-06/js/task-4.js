import { users } from "./users.js";

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.table(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]