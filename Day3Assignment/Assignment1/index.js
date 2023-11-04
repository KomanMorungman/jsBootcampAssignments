let obj1 = document.querySelector("html");
let getRandomColor = function () {
    let rgbArr = [];
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor((Math.random() * 256));
        rgbArr.push(rand);
    }
    return rgbArr;
};
let changeBackgroundColor = () => {
    let valColor = getRandomColor();
    console.log(valColor);
    obj1.style.backgroundColor = `rgb(${valColor[0]},${valColor[1]},${valColor[2]})`;
};

obj1.onclick = changeBackgroundColor;

