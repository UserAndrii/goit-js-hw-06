function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const widgetEl = document.querySelector(".widget");
const colorNameEl = document.querySelector(".color");
const changeBtnColor = document.querySelector(".change-color");

changeBtnColor.addEventListener('click', changeBgColor);

function changeBgColor() {
  widgetEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = widgetEl.style.backgroundColor;
};