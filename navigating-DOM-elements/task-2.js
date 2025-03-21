/* Вопрос о соседях
важность: 5
Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null?
Правда, что elem.children[0].previousSibling всегда равен null ? */

// 1 вариант - да. Всегда равен налл, потому что налл в ДОМе - значит что элемента не существует. А не может быть следующего соседа, если мы обращаемся к последнему.
// 2 вариант так же да, но ответ не верный. Автор пишет что :

// Нет. Неверно. Потому что elem.children[0] – потомок-элемент. Но перед ним могут быть другие узлы. Например, previousSibling может быть текстовым узлом.
/* Обратите внимание, что в обоих случаях, если детей нет, то будет ошибка. При этом elem.lastChild равен null, а значит – ошибка при попытке доступа к elem.lastChild.nextSibling. */