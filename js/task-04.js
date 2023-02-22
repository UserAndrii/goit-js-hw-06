const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let result = 0;

decrementButton.addEventListener("click", () => {
  result -= 1;
  counterValue.textContent = result;
});

incrementButton.addEventListener("click", () => {
  result += 1;
  counterValue.textContent = result;
});
