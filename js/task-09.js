function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");

changeBtnColor.addEventListener('click', changeBgColor);

function changeBgColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorNameEl.textContent = randomColor;
};