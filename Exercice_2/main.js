const afficherButton = document.getElementById("afficherButton");
const masquerButton = document.getElementById("masquerButton");
const text = document.getElementById("text");

afficherButton.addEventListener("click", () => {
    text.style.display = "block";
});
masquerButton.addEventListener("click", () => {
    text.style.display = "none";
});

