/* Вывод односвязного списка
важность: 5
Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Напишите функцию printList(list), которая выводит элементы списка по одному.

Сделайте два варианта решения: используя цикл и через рекурсию.

Как лучше: с рекурсией или без? */

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

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

console.log(printList(list));

function printListCycle(list) {
	let current = list;
	while (current) {
		console.log(current.value);
		current = current.next;
	}
}

console.log(printListCycle(list));
