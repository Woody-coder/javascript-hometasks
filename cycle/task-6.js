
let n;
let j;

nextNumber :
for (n = 2; n <= 200; n++) {
	for (j = 2; j < n; j++) {
		if (n % j == 0) continue nextNumber;
	}
	console.log(n);
}
