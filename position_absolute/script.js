const objet = document.getElementById("objet-absolute");
const togglePosition = document.getElementById("togglePosition");
const xPosition = document.getElementById("xPosition");
const yPosition = document.getElementById("yPosition");

togglePosition.addEventListener("change", () => {
    if (togglePosition.checked) {
        objet.style.position = "absolute";
    } else {
        objet.style.position = "static";
    }
});

xPosition.addEventListener("input", () => {
    objet.style.left = xPosition.value + "px";
});

yPosition.addEventListener("input", () => {
    objet.style.top = yPosition.value + "px";
});
