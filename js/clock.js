let clock;

document.addEventListener("DOMContentLoaded", function() {
    clock = document.querySelector("#clock");

    setClock();
    setInterval(setClock, 1000);
});

function setClock() {
    const today = new Date();
    const HH = setDigit(today.getHours());
    const Mi = setDigit(today.getMinutes());
    const ss = setDigit(today.getSeconds());

    clock.innerText = `${HH}:${Mi}:${ss}`;
}

function setDigit(num) {
    return num.toString().padStart(2, "0");
}