function PrimeNumberOrNot(number) {
  let original = number;
  if (number < 2) {
    console.log("not a prime");
    return;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log("not a prime");
      return;
    }
  }
  console.log("prime number");
}
PrimeNumberOrNot(23);
