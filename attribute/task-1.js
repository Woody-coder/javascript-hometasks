/* Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.

<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code */
/*   </script>
</body>
</html> */

let div = document.querySelector('[data-widget-name]');
console.log(div.getAttribute('data-widget-name'));
console.log(div.dataset.widgetName);

