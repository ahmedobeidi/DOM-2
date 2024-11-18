const text = document.getElementById("text");
const green = document.getElementById("green");
const red = document.getElementById("red");
const blue = document.getElementById("blue");

green.addEventListener("click", () => {
    text.style.color = "green";
});

red.addEventListener("click", () => {
    text.style.color = "red";
});

blue.addEventListener("click", () => {
    text.style.color = "blue";
});