import assert from "assert";
import { Given, When, Then, } from "@cucumber/cucumber";

let number_1;
let number_2;
let result;
Given('Enter first and second number (.*) (.*)', (number1, number2) => {
    number_1 = number1;
    number_2 = number2;
});

When('select the (.*)', (operator) => {
    result = calculate(operator);
})


Then('the result should be (.*)', (result_calc) => {
    if (result == result_calc) {
        assert(true)
    }
    else {
        assert(false)
    }
})

function calculate(operator) {
    switch (operator) {
        case 'plus':
            return number_1 + number_2;
        case 'minus':
            return number_1 - number_2;
        case 'multiply':
            return number_1 * number_2;
        case 'divide':
            return number_1 / number_2;
        default:
            break;
    }
}