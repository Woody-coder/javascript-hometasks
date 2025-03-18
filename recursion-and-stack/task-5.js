/* Вывод односвязного списка в обратном порядке
важность: 5
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

Сделайте два решения: с использованием цикла и через рекурсию. */

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListReverse(list) {
	if (list.next) printListReverse(list.next);
	console.log(list.value);
}

printListReverse(list);

function printListCycleReverse(list) {
	let current = list;
	let values = [];
	while (current) {
		values.push(current.value);
	  current = current.next;
	}
	values.reverse();
	for (let i of values) {
		console.log(i);
	}
}
printListCycleReverse(list);
