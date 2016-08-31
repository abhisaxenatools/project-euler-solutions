// This problem is solved in JS as specified in the TOP.

var sum = 0;
for (var i = 0; i < 1000; i++) {
	if ( i % 3 === 0 || i % 5 === 0) {
		sum = sum + 1;
	}
}
console.log(sum);