// Проверка значения вне диапазона
// важность: 3
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

// let age = prompt('Это проверка ЗА ПРЕДЕЛЫ диапазона между 14 и 90 включительно. Введите любое число!');

// if (age < 14 || age > 90) {
// 	alert('Верно, вы попали ЗА ПРЕДЕЛЫ диапазона!')
// } else {
// 	alert('К сожалению вы не попалии ЗА ПРЕДЕЛЫ диапазона, попробуйте еще раз!')
// }; // 1 вариант, без ! 

let age = prompt('Это проверка ЗА ПРЕДЕЛЫ диапазона между 14 и 90 включительно. Введите любое число!');

if (!(age >= 14 && age <= 90)) {
	alert('Верно, вы попали ЗА ПРЕДЕЛЫ диапазона!')
} else {
	alert('К сожалению вы не попалии ЗА ПРЕДЕЛЫ диапазона, попробуйте еще раз!')
}; // вариант с !. Вариант без ! - выше (его нужно раскоментировать)