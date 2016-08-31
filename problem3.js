// function to check whether a number is prime or not 
var isItPrime = function (x) {
	if (x === 1) return false;
	else if (x === 2) return true;
	else {
		for (var i = 3; i < x; i++) {
			if (x % i === 0) return false;
		}
		return true;
	}
}

// function to generate an array of prime factors of a number.

var primeFactors = function (num) {
	ar = [];
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			if (isItPrime(i)) {
				ar.push(i);	
			}
			
		}
	}
	return ar;
}

// funtion to find the largest prime factor
var largestPrimeFactor = function (arrayOfPF) {
	return arrayOfPF[arrayOfPF.length - 1];
}

console.log(largestPrimeFactor(primeFactors(256)));
