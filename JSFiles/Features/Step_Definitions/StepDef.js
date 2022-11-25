"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Given, When, Then, } from "@cucumber/cucumber";
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Given)('Enter first and second number (\d+) (\d+)', { timeout: 60 * 1000 }, (number1, number2) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('inside given');
    yield protractor_1.browser.get('https://juliemr.github.io/protractor-demo/');
    // element(by.model('first')).sendKeys(number1);
    // element(by.model('second')).sendKeys(number2);
}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUEyRDtBQUMzRCxpREFBaUQ7QUFDakQsMkNBQWlEO0FBR2pELElBQUEsZ0JBQUssRUFBQywyQ0FBMkMsRUFBRSxFQUFDLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFDLEVBQUUsQ0FBTyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFFaEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMzQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7SUFFL0QsZ0RBQWdEO0lBQ2hELGlEQUFpRDtBQUlyRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsMENBQTBDO0FBQzFDLGlFQUFpRTtBQUNqRSx1Q0FBdUM7QUFDdkMsS0FBSztBQUdMLHVEQUF1RDtBQUN2RCw0Q0FBNEM7QUFDNUMsOEVBQThFO0FBQzlFLDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFDdkIsUUFBUTtBQUNSLGFBQWE7QUFDYix3QkFBd0I7QUFDeEIsUUFBUTtBQUNSLEtBQUs7QUFFTCxpQ0FBaUM7QUFDakMsMEJBQTBCO0FBQzFCLHVCQUF1QjtBQUN2QiwwQ0FBMEM7QUFDMUMsd0JBQXdCO0FBQ3hCLDBDQUEwQztBQUMxQywyQkFBMkI7QUFDM0IsMENBQTBDO0FBQzFDLHlCQUF5QjtBQUN6QiwwQ0FBMEM7QUFDMUMsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixRQUFRO0FBQ1IsSUFBSSJ9