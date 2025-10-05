const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

let currentValue = "0";
let previousValue = "";
let operation = null;
let shouldResetOnNextInput = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => handleNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => handleOperator(button.textContent));
});

equalsButton.addEventListener("click", handleEquals);

clearButton.addEventListener("click", handleClear);

function handleNumber(num) {
  if (currentValue === "0" || shouldResetOnNextInput) {
    currentValue = num;
    shouldResetOnNextInput = false;
  } else {
    currentValue += num;
  }
  updateDisplay();
}
function handleOperator(op) {
  shouldResetOnNextInput = false;
  if (operation !== null) {
    handleEquals();
  }
  previousValue = currentValue;
  currentValue = "0";
  operation = op;
}
function handleEquals() {
  if (operation === null || previousValue === "") return;

  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  let result;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "×":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
  }

  currentValue = result.toString();
  operation = null;
  previousValue = "";
  updateDisplay();
  shouldResetOnNextInput = true;
}

function handleClear() {
  currentValue = "0";
  previousValue = "";
  operation = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentValue;
}
