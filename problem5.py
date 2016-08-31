# We need to find the smallest positive number that is divisible by 1 to 20

#First we'll make a function that takes a number and divides it by numbers 1 through 20 and return true if all remainders are 0.

def divBy1_20(n):
	# print n
	for i in range(1,21):
		print n, '%', i, '=', n%i
		if n % i != 0:
			return False
	return True

i = 1
while (True):
	# print i
	if divBy1_20(i):
		break
	i = i + 1

print i 
