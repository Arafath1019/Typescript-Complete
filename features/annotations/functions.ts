const add = (a: number, b: number): number => {
  return a + b;
};

// Inference around functions
const subtract = (a: number, b: number) => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// Annotations for Anonymous Functions
const multiply = function (a: number, b: number): number {
  return a * b;
};
