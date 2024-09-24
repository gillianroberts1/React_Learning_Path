function calculateRectangleArea(width, height) {
  return width * height;
}

const isEven = function(number) {
  return number % 2 === 0;
}

const multiply = (a, b) => a * b;

const calculateTotal = (price, taxRate = 0.05) => price + (price * taxRate);

const concatenateStrings = (...strings) => strings.join(" ");