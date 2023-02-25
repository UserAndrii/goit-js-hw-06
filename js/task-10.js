function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  divBox: document.querySelector("#boxes"),
};


refs.btnCreate.addEventListener("click", inputValue);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function inputValue() {
  createBoxes(refs.input.value);
};

function createBoxes(amount) {
  let size = 30;

  for (let i = 1; i < amount; i += 1) {
    const newEl = document.createElement('div');
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    newEl.style.marginTop = `5px`;
    size += 10;
    refs.divBox.append(newEl);
  };
};

function destroyBoxes() {
  refs.divBox.innerHTML = "";
  refs.input.value = '';
};



