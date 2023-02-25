const fontSizeControl = document.querySelector("#font-size-control");
const magicOfText = document.querySelector("#text");

function fontSizeChange() {
    // console.log(fontSizeControl.value);
    magicOfText.style.fontSize = `${fontSizeControl.value}px`;
};

fontSizeControl.addEventListener("input", fontSizeChange);
