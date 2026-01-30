//Functions
const add = (a,b) => {
    return parseInt(a) + parseInt(b);
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
let num1 = "";
let operator = "";
let num2 = "";

//Setting up methods

const container = document.getElementById("container");

const resultDisplay = document.getElementById("input");

container.addEventListener("click", (event) => {
    if (event.target.matches('.number') && operator === "") {
        const clickedValue = event.target.getAttribute("data-digit");
        num1 = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(num1);
        console.log(clickedValue);
    }
    else if (event.target.matches('.operator')) {
        const clickedValue = event.target.getAttribute("data-sign");
        operator = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(operator);
        console.log(clickedValue);
    }    
    else if (operator !== '' && event.target.matches('.number')) {
        const clickedValue = event.target.getAttribute("data-digit");
        num2 = clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(num2);
        console.log(clickedValue);
    }
    else if (event.target.matches('#clear')) {
        resultDisplay.innerHTML= "";
        console.log("Display cleared.");
    }  
});

const result = document.getElementById("equal");

const operate = (event) => {
    if (operator = "+") {
        resultDisplay.textContent = add(num1,num2); //thbe logic picks up here so how do i get the add function to process
        console.log(num1);
        console.log(add(num1,num2));
    }
    else if (operator = minus) {
        subtract(num1,num2);
        return console.log(subtract(a,b));
    }
};

result.addEventListener("click",operate);
result.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";
}); //stuck here, need to get calc to reset num1 and num2 after calculating