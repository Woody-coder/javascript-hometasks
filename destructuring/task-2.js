/* Максимальная зарплата
важность: 5
У нас есть объект salaries с зарплатами:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение. */

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {

	let maxSalarie = 0;
	let maxName = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (maxSalarie < salary) {
			maxSalarie = salary;
			maxName = name;
		}
	}
	return maxName;
}

console.log(topSalary(salaries));
