/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        if (type === 'deposit') {
           return this.transactions.push({deposit: amount})
        }
        if (type === 'withdraw') {
           return this.transactions.push({withdraw: amount})
        }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.createTransaction(amount, Transaction.DEPOSIT);
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.createTransaction(amount, Transaction.WITHDRAW);
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        for (let transaction of this.transactions) {
            if (transaction.deposit) {
                this.balance += transaction.deposit;
            }
            if (transaction.withdraw) {
                this.balance -= transaction.withdraw;
            }
        }
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        return this.transactions[id];
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (let transaction of this.transactions) {
            console.log(transaction.type);
            if (transaction.type) {
                total += transaction.type;
            }
        }
        return total;
    },
};


account.deposit(2000);
account.withdraw(1000);
account.deposit(25000);
account.withdraw(3500);
account.getBalance();
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account)