const fibonacci = function(number) {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;
  number = parseInt(number);

  if (number === 0) return 0;
  if (number === 1 || number === 2) return 1;
  if (number < 0) return "OOPS";

  for (let i = 2; i < number; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
