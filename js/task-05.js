const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener('input', onInputChange);

function onInputChange() {
    nameOutputEl.textContent =
      event.currentTarget.value === ""
        ? "Anonimous"
        : event.currentTarget.value;
};