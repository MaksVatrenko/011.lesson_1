// 1. Створити сутність "Людина".
//
//     Властивості:
// імʼя;
// вік.
//     Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".
//
//     Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
//     Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
// В якості демонстраціїї створити:
//
//     декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, yearOfDischarge, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.yearOfDischarge = yearOfDischarge;
        this.licensePlate = licensePlate;
    }

    setOwner(owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner is too young");
        }
    }

    showInfo() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, year of discharge: ${this.yearOfDischarge}, license plate: ${this.licensePlate}`);
        this.owner.showInfo();
    }
}

let human1 = new Human('John', 20);
let human2 = new Human('Ben', 18);
let human3 = new Human('Peter', 16);


let car1 = new Car('BMW', 'X5', 2015, 'AA 1234 AA');
let car2 = new Car('Audi', 'A6', 2018, 'AA 4321 AA');
let car3 = new Car('Mercedes', 'S500', 2019, 'AA 1111 AA');

car1.setOwner(human1);
car2.setOwner(human2);
car3.setOwner(human3);


car1.showInfo();
car2.showInfo();
// car3.showInfo();


console.log(car1);


