"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("@cucumber/cucumber");
let number_1;
let number_2;
let result;
(0, cucumber_1.Given)('Enter first and second number {int} {int}', function (number1, number2) {
    number_1 = number1;
    number_2 = number2;
});
(0, cucumber_1.When)('select the {string}', function (operator) {
    result = calculate(operator);
});
// And('Click Equals Button',function(){
//     console.log('click equal button');
// })
(0, cucumber_1.Then)('the result should be {int}', function (result_calc) {
    if (result == result_calc) {
        (0, assert_1.default)(true);
    }
    else {
        (0, assert_1.default)(false);
    }
});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QixpREFBc0Q7QUFFdEQsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksTUFBTSxDQUFDO0FBQ1gsSUFBQSxnQkFBSyxFQUFDLDJDQUEyQyxFQUFFLFVBQVMsT0FBTyxFQUFFLE9BQU87SUFDeEUsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUNuQixRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMscUJBQXFCLEVBQUMsVUFBUyxRQUFRO0lBQ3hDLE1BQU0sR0FBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFFRix3Q0FBd0M7QUFDeEMseUNBQXlDO0FBQ3pDLEtBQUs7QUFFTCxJQUFBLGVBQUksRUFBQyw0QkFBNEIsRUFBQyxVQUFTLFdBQVc7SUFDdEQsSUFBRyxNQUFNLElBQUUsV0FBVyxFQUFDO1FBQ25CLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsQ0FBQTtLQUNmO1NBQ0c7UUFDQSxJQUFBLGdCQUFNLEVBQUMsS0FBSyxDQUFDLENBQUE7S0FDaEI7QUFDRCxDQUFDLENBQUMsQ0FBQTtBQUVGLFNBQVMsU0FBUyxDQUFDLFFBQVE7SUFDdkIsUUFBUSxRQUFRLEVBQUU7UUFDZCxLQUFLLE1BQU07WUFDUCxPQUFPLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsS0FBSyxPQUFPO1lBQ1IsT0FBTyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLEtBQUssVUFBVTtZQUNYLE9BQU8sUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixLQUFLLFFBQVE7WUFDVCxPQUFPLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0I7WUFDSSxNQUFNO0tBQ2I7QUFDTCxDQUFDIn0=