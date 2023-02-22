const textInput = document.querySelector("#validation-input");
const dataLength = parseInt(textInput.dataset.length);

function inputBlurValidation(event) {
  const { value } = event.currentTarget;

  if (value.length === dataLength) {
    //   console.log("Yes, there are 6 symbols");
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    //   console.log("Please enter 6 symbols");
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
};

textInput.addEventListener("blur", inputBlurValidation);
