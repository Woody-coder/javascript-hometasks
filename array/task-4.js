/* Сумма введённых чисел
важность: 4
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0». */

function sumInput() {
	let data = [];
	let sum = 0;

	while (true) {
		let valueUsers = prompt("Введите значение");
		if (valueUsers == "" || valueUsers == null || valueUsers == isNaN(valueUsers)) {
			break;
		}
		data.push(+valueUsers);
		sum += +valueUsers;
	}
	return sum;
}



console.log(sumInput());
