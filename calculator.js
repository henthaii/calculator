const add = function (a,b) {
    return a + b;
}

const subtract = function (a,b) {
    return a - b;
}

const one = document.getElementById('one').addEventListener("click",inputDisplay);
console.log(one);

function inputDisplay () {
    const display = document.getElementById('input');
    display.innerHTML = '';
    console.log("one");
}
