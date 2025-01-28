function showSum(elem, x, y) {
  document.querySelector(elem).textContent = x + y;
}
showSum(".out-2", 10, 2);

function showSum2(elem, x, y) {
  elem.textContent = x + y;
}
showSum2(document.querySelector(".out-1"), 12, 6);

function showSum3(elem, x, y) {
  elem.textContent = x + y;
}
const out3 = document.querySelector(".out-3");
showSum3(out3, 27, 6);

function showSum4(elem = ".out-1", x, y) {
  document.querySelector(elem).textContent = x + y;
}
showSum(".out-2", 10, 2);
