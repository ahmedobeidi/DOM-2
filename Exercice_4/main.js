const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    if (password.value == confirmPassword.value) {
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
    }
    else {
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
    }
});