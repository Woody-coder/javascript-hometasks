/* Форматирование относительной даты
важность: 4
Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
Например:

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) ); */

function formatDate(date) {
	let now = new Date();
	let diff = now - date;
	let sec = Math.floor(diff / 1000);
	let min = Math.floor(sec / 60);

	if (sec < 1) {
		return 'прямо сейчас';
	} else if (sec < 60) {
		return `${sec} сек. назад`;
	} else if (min < 60) {
		return `${min} мин. назад`;
	} else {
		let d = date;
		let day = d.getDate().toString().padStart(2, '0');
		let month = d.getMonth().toString().padStart(2, '0');
		let year = d.getFullYear().toString().slice(-2);
		let hours = d.getHours().toString().padStart(2, '0');
		let minutes = d.getMinutes().toString().padStart(2, '0');

		return `${day}.${month}.${year} ${hours}:${minutes}`;
	}
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 40 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));





