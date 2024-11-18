const image = document.getElementById("image1");

image.addEventListener("mouseover", handleImageBorderOver);
image.addEventListener("mouseout", handleImageBorderOut);

function handleImageBorderOver(event) {
    event.target.style.border = "3px solid red";
}

function handleImageBorderOut(event) {
    event.target.style.border = "0px";
}