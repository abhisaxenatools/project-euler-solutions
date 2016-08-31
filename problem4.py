# We need to find the largest palindrome made from the product of two 3 digit numbers.
# First we need to make a function to check whether a number is a palindrome or not.

def palin(x):
	string = str(x)
	if (string == string[-1: -len(string)-1: -1]):
		return True
	return False

list_of_pal_numbers = []
for i in range(111, 1000):
	for j in range(111, 1000):
		n = i * j
		if (palin(n)):
			list_of_pal_numbers.append(n)

print list_of_pal_numbers[-1]
