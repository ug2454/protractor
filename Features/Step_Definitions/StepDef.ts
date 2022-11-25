// import { Given, When, Then, } from "@cucumber/cucumber";
import { Given, When } from "@cucumber/cucumber";
import { browser, element, by } from "protractor"


Given('Enter first and second number (\d+) (\d+)', {timeout: 60 * 1000}, async (number1, number2) => {

    console.log('inside given')
    await browser.get('https://juliemr.github.io/protractor-demo/')

    // element(by.model('first')).sendKeys(number1);
    // element(by.model('second')).sendKeys(number2);



});

// When('select the (.*)', (operator) => {
//     element(by.cssContainingText('option', operator)).click();
//     // result = calculate(operator);
// })


// Then('the result should be (.*)', (result_calc) => {
//     element(by.className('btn')).click();
//     let output = element(by.cssContainingText('.ng-binding', result_calc));
//     if (output.getText() == result_calc) {
//         assert(true)
//     }
//     else {
//         assert(false)
//     }
// })

// function calculate(operator) {
//     switch (operator) {
//         case 'plus':
//             return number_1 + number_2;
//         case 'minus':
//             return number_1 - number_2;
//         case 'multiply':
//             return number_1 * number_2;
//         case 'divide':
//             return number_1 / number_2;
//         default:
//             break;
//     }
// }