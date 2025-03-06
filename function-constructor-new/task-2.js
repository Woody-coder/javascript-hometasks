/* Создайте калькулятор при помощи конструктора, new Calculator
важность: 5
Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.
Например:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

function Calculator() {
  this.read = function () {
    this.a = +prompt("Введите число № 1.");
    this.b = +prompt("Введите число № 2.");

    if (isNaN(this.a) || isNaN(this.b)) {
      alert("Пожалуйста введите число. Вы ошибочно ввели строку.");
      this.read();
    }
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log("Sum : " + calculator.sum());
console.log("Mul : " + calculator.mul());
