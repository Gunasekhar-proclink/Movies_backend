const sum = (a, b) => a + b;
// console.log(sum(4, 5));

const [, , num1, num2] = process.argv;
console.log(sum(+num1, +num2));
