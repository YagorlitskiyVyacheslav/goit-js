class Car {
    static getSpecs(obj) {
        console.log(`maxSpeed: ${obj.maxSpeed}, speed: ${obj.speed}, isOn: ${obj.isOn}, distance: ${obj.distance}, price: ${obj.price}`);
    }
    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() {
        this.isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) {
        if (this.speed < this.maxSpeed) {
            this.speed += value;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) {
        if (this.speed > 0) {
            this.speed -= value;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance += hours*this.speed;
        }
    }
}

const mustang = new Car({maxSpeed: 200, price: 2000});
console.log(mustang);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000