const add = function (num1, num2) {
  console.log(`Adding ${num1} and ${num2}`);
  return num1 + num2;
};
console.log(add(3, 5));
const subtract = function (num1, num2) {
  console.log(`Subbing ${num1} and ${num2}`);
  return num1 - num2;
};
console.log(subtract(13, 10));

const sum = function (num, func) {

};

const multiply = function (num1, num2) {
  console.log(`Multiplying ${num1} and ${num2}`);
  return num1 * num2;
};
 
const power = function (num) {
  console.log(`To the power of ${num}`);
  return num * num;
};

const factorial = function (num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
