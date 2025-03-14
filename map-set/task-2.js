/* Отфильтруйте анаграммы
важность: 4
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

Например:

nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// function aclean(arr) {
// 	let cleanWords = arr.map(element => {
// 		return element
// 			.toLowerCase()
// 			.split('')
// 			.sort()
// 			.join('');
// 	});
// 	return Array.from(new Set(cleanWords));
// }

// console.log(aclean(arr)); Написал неверно. Возвращает уникальные слова, но буквы отсортированы

function aclean(arr) {
	let map = new Map();

	arr.forEach(element => {
    let sortedWord = element.toLowerCase().split('').sort().join('');
		map.set(sortedWord, element);
	});
	return Array.from(map.values());
}

console.log(aclean(arr));
