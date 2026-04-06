function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
console.log("5 + 3 =", add(5, 3));
console.log("10 - 4 =", subtract(10, 4));

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero!");
  return a / b;
}
console.log("20 / 4 =", divide(20, 4));