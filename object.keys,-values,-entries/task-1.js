/* Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

Если объект salaries пуст, то результат должен быть 0.

Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650 */

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
	let salariesValue = Object.values(salaries);
	let sum = 0;
	for (let num of salariesValue) {
		sum += num;
	}
	return sum;
}
console.log(sumSalaries(salaries));

//или

function sumSalReduceTest(salaries) {
	return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}

console.log(sumSalReduceTest(salaries));

