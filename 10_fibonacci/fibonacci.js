const fibonacci = function (num) {
  num = parseInt(num);
  if (num <= 1) return "OOPS";

  let first = 0;
  let second = 1;

  for (let i = 2; i <= num; i++) {
    let next = first + second;
    first = second;
    second = next;
  }

  return second;
};

// console.log("30");

// Do not edit below this line
module.exports = fibonacci;
