function changeBackgroundColor() {
    var colorInput = document.getElementById("color-input");
    var colorOutput = document.getElementById("color-output");
    var color = colorInput.value;
    colorOutput.style.backgroundColor = color;
}