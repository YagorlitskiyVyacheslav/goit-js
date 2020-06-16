import { users } from "./users.js";

const calculateTotalBalance = users => users.map(user => user.balance)
.reduce((acc, balance) => acc + balance, 0);

console.log(calculateTotalBalance(users)); // 20916