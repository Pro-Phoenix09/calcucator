const display = document.getElementById("display");

function SendToDisplay(velu) {
    display.value += velu;
}

function clearDisplay() {
    display.value = "";
}

function Operate() {
    try {
        display.value = eval(display.value);
    }

    catch(erar){
        display.value = "Erororor";
    }
}