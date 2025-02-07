/* Создайте калькулятор
важность: 5
Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат. */

// let calculator = {
// 	read() {
// 		this.a = +prompt('Введите число номер 1');
// 		this.b = +prompt('Введите число номер 2');
// 	},
// 	sum() {
// 		return this.a + this.b;
// 	},
// 	mul() {
// 		return this.b * this.a;
// 	},
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Доделать только возможность в промпт вводить числа.

let calculator = {
  read() {
    this.a = +prompt("Введите число номер 1");
    this.b = +prompt("Введите число номер 2");

    if (isNaN(this.a) || isNaN(this.b)) {
      alert("Вы ввели строку. Вы что дурак? Это калькулятор! Введите число!");
      this.read();
    }
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    2;
    return this.b * this.a;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
