/* Оставить уникальные элементы массива
важность: 4
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
  /* ваш код */
/* }

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
]; */

/* alert( unique(strings) ); // кришна, харе, :-O */

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

function unique(arr) {
  let uniqueeArr = [];
	arr.forEach((item) => {
		if (!uniqueeArr.includes(item)) {
			uniqueeArr.push(item);
		}
	});
	return uniqueeArr;
}

console.log(unique(strings));

