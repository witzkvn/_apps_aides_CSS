const box = document.getElementById("box");
const marginInput = document.getElementById("margin");
const borderInput = document.getElementById("border");
const paddingInput = document.getElementById("padding");
const sizeInput = document.getElementById("size");

marginInput.addEventListener("input", updateBox);
borderInput.addEventListener("input", updateBox);
paddingInput.addEventListener("input", updateBox);
sizeInput.addEventListener("input", updateBox);

function updateBox() {
    const marginValue = marginInput.value + "px";
    const borderValue = borderInput.value + "px solid blue";
    const paddingValue = paddingInput.value + "px";
    const sizeValue = sizeInput.value + "px";

    box.style.margin = marginValue;
    box.style.border = borderValue;
    box.style.padding = paddingValue;
    box.style.width = sizeValue;
    box.style.height = sizeValue;
}

updateBox();
