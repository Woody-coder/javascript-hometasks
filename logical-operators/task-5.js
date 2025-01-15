let login = prompt("Введите свой логин!");
let pass;

if (login == "Админ") {
  pass = prompt("Введите свой пароль!");

  if (pass == "Я Главный") {
    alert("Здравствуйте!");
  } else if (pass == null || pass == "") {
    alert("Отмена");
  } else {
    alert("Неверный пароль");
  }
} else if (login == null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
