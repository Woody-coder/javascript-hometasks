/* Случайное целое число от min до max
важность: 2
Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
Можно использовать решение из предыдущей задачи. */

function randomInteger(min, max) {
  let r = min + Math.random() * (max - min);
  return Math.floor(r);
}

console.log(randomInteger(1, 5));
