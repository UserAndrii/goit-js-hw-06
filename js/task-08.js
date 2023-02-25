const formEl = document.querySelector(".login-form");

function verificationOfForm(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === "" || password.value === "") {
        alert("WARNING! All fields must be filled!");
    } else {
        const formData = {
          email: email.value,
          password: password.value,
        };
        console.log(formData);
        formEl.reset();
    };
};

formEl.addEventListener("submit", verificationOfForm);
