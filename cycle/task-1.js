/* Последнее значение цикла
Какое последнее значение выведет этот код? Почему? */
let i = 3;

while (i) {
  alert(i--);
} // Начнет с 3, закончит 1. Потому что декремент будет работать до того момента пока не встретит 0 - которое будет значением фолс. Как только он им станет, цикл остановит работу и алерт не выведет число.


/* 
Какие значения выведет цикл while?

Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

Оба цикла выводят alert с одинаковыми значениями или нет? */

// Префиксный вариант ++i:

let s = 0;
while (++s < 5) alert(s); // Выведет от 1 до 4. 4 - будет последняя, потому что потом инкремент поднимает до 5, и встретиться с условием когда 5=5 - ложным. И вывода через алерт не произойдет.

// Постфиксный вариант i++

let q = 0;
while (q++ < 5) alert(q); // Выведет от 1 до 5. То есть разница между перфиксным инкрементом, что тут происходит сперва проверка условия, а потом увелечение на еденицу. То есть последнее трушное условия 4 меньше 5 - цикл подтверждает, потом происходит инкремент (увелечение с 4 до 5), и выводиться алертом 5. 