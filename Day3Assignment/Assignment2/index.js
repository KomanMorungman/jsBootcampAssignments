const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let el1 = document.getElementById("js-h3");
el1.innerText = names[0];
let loopVar = 0;
let el2 = document.getElementById("btn-prev");
let el3 = document.getElementById("btn-next");
let nextFnc = () => {
    loopVar++;
    if (loopVar < names.length) {
        el1.innerText = names[loopVar];
    }
    else {
        loopVar = 0;
        el1.innerText = names[loopVar];
    }

};
el3.onclick = nextFnc;

let prevFnc = () => {
    loopVar--;
    if (loopVar >= 0) {
        el1.innerText = names[loopVar];
    }
    else {
        loopVar = names.length - 1;
        el1.innerText = names[loopVar];
    }

};
el2.onclick = prevFnc;