let table = document.body.firstElementChild;
let rows = table.rows;
let current = 0;

for (let row of rows) {
	row.cells[current].style.backgroundColor = 'red';
	current++
}