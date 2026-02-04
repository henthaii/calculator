//Functions
const add = (a,b) => {
    return parseInt(a) + parseInt(b);
}

const subtract = (a,b) => {
    return parseInt(a) - parseInt(b);
}

const multiply = (a,b) => {
    return parseInt(a) * parseInt(b);
}

const divide = (a,b) => {
    return parseInt(a) / parseInt(b);
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
        num1 += clickedValue;
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
        num2 += clickedValue;
        resultDisplay.textContent += clickedValue;
        console.log(num2);
        console.log(clickedValue);
    }
    else if (event.target.matches('#clear')) {
        resultDisplay.innerHTML= "";
        num1 = "";
        num2 = "";
        operator = "";
        console.log("Display cleared.");
    }  
});

const result = document.getElementById("equal");

const operate = (event) => {
    if (operator === "+") {
        resultDisplay.textContent = add(num1,num2);
        console.log(add(num1,num2));
    }
    else if (operator === "-") {
        resultDisplay.textContent = subtract(num1,num2);
        console.log(subtract(num1,num2));
    }
    else if (operator === "*") {
        resultDisplay.textContent = multiply(num1,num2);
        console.log(multiply(num1,num2));
    }
    else if (operator === "/" && num2 === "0") {
        alert("Are you an idiot, you can't divide by 0 here!");
        console.log("Baka")
    }
    else if (operator === "/") {
        resultDisplay.textContent = divide(num1,num2);
        resultDisplay.textContent = parseFloat(resultDisplay.textContent).toFixed(5);
        console.log(divide(num1,num2));
    } 
    
};

result.addEventListener("click",operate)

// if (operator === "/" && num2 === "0") {
//         alert("Are you an idiot, you can't divide by 0 here!");
//         console.log("Baka")
//     };


result.addEventListener("click", () => {
    num1 = ""
    num2 = "";
    operator = "";
    console.log(num1);
    console.log(num2);
    console.log(operator);
}); 