function add(num1, num2) {
  return num1 + num2;
};

function minus(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function division(num1, num2) {
  return num1 / num2;
};

function calculator(num1, num2, oprator) {
  console.log(oprator(num1, num2));
};

calculator(2, 3, add); // 5
calculator(2, 3, multiply); // 6
calculator(2, 3, division); // 0.6666666666666666
calculator(2, 3, minus); // -1