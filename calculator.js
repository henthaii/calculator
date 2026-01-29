//Functions
const add = (a,b) => {
    return a + b;
}

const subtract = (a,b) => {
    return a - b;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => {
    return a / b;
}

//Variables
let num1 = "" //needs to take a number input
let operator = [add, subtract, multiply, divide] //will call one of the functions above
let num2 = "" //needs to take a number input

//const operators = [add,subtract,multiply,divide];

//Setting up methods

const container = document.getElementById("container");

const resultDisplay = document.getElementById("input");

container.addEventListener("click", (event) => {
    if (event.target.matches('.number')) {
        const clickedValue = event.target.getAttribute("data-digit");
        let num1 = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(clickedValue);
    }
    else if (event.target.matches('.operator')) {
        const clickedValue = event.target.getAttribute("data-sign");
        let operator = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(clickedValue);
    }    
    else if (event.target.matches('#clear')) {
        resultDisplay.innerHTML= "";
        console.log("Display cleared.");
    }    
    else if (operator === '' && event.target.matches('.number')) {
        const clickedValue = event.target.getAttribute("data-digit");
        let num2 = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(clickedValue);
    }
});

const result = document.getElementById("equal");

function operate(num1,operator,num2) {
    if (operator = "+") {
        add(num1,num2);
        return console.log(add(num1,num2));
    }
    else if (operator = minus) {
        subtract(num1,num2);
        return console.log(subtract(a,b));
    }
};

result.addEventListener("click",operate);

//Limbo

//Defining the consts
// const one = document.getElementById('one').addEventListener("click",inputDisplay);
// console.log(one);

// const two = document.getElementById('two').addEventListener("click",inputDisplay);
// console.log(two);

// const three = document.getElementById('three').addEventListener("click",inputDisplay);
// console.log(three);

// const four = document.getElementById('four').addEventListener("click",inputDisplay);
// console.log(four);

// const five = document.getElementById('five').addEventListener("click",inputDisplay);
// console.log(five);

// const six = document.getElementById('six').addEventListener("click",inputDisplay);
// console.log(six);

// const seven = document.getElementById('seven').addEventListener("click",inputDisplay);
// console.log(seven);

// const eight = document.getElementById('eight').addEventListener("click",inputDisplay);
// console.log(eight);

// const nine = document.getElementById('nine').addEventListener("click",inputDisplay);
// console.log(nine);

// const zero = document.getElementById('zero').addEventListener("click",inputDisplay);
// console.log(zero);

// const plus = document.getElementById('add').addEventListener("click",inputDisplay);
// console.log("+");

// const minus = document.getElementById('sub').addEventListener("click",inputDisplay);
// console.log("-");

// const times = document.getElementById('multiply').addEventListener("click",inputDisplay);
// console.log("*");

// const division = document.getElementById('divide').addEventListener("click",inputDisplay);
// console.log("/");

// function inputDisplay () {
//     const display = document.getElementById('input');
//     display.innerHTML = '';
//     console.log("one");
// }

//if statement, depending on operator then a diff logic needs to be used.
//loop through each operator with else
//create another const that can hold values from input
//inputdisplay, does this need to consider the order of number and operator
//reduce is not needed here