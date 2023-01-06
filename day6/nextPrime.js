function isPrime(n) {
  if (n == 2) {
    return true;
  }
  if (n <= 1 || n % 2 == 0) {
    return false;
  }
  let i = 3;
  while (i <= Math.sqrt(n) + 1) {
    if (n % i == 0) {
      return false;
    }
    i += 2;
  }
  return true;
}

function nextPrime(number) {
  if (isPrime(number)) return number;

  let initialNumber = number
  let count = 0

  while (!isPrime(number++)) {
    count++
  }

  return count + initialNumber
}

nextPrime(11)
