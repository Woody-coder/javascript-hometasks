/* Скопирован ли массив?
важность: 3
Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ? */

//Длинна будет 4. Мы создали новую "ссылку" на массив в виде новой переменной, и добавили Банан. То есть длина стала 4, только мы обращаемся к первой ссылке массива.