/* Ввод числового значения
важность: 5
Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

Функция должна возвращать числовое значение.

Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null. */

// function readNumber() {
// 	let a = prompt('Введите любое числовое значение');
// 	if (isNaN(a)) {
// 		alert('Вы ввели не число, повторите.');
// 		readNumber();
// 	} else if (a === null || a === "") {
// 		return null;
// 	}
// 	return a;
// }

// console.log(`Число : ${readNumber()}`);  Решил не верно! Пошел повторять цикл и перечитывать статью, вернусь к 3 задаче позже.


function readNumber() {
	let num;
	do {
		num = prompt('Vvedite chislo');
	} while (!isFinite(num));
	if (num === null || num === "") return null;
	return +num;
}

console.log(readNumber());
