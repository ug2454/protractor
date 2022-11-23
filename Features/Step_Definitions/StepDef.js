"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cucumber_1 = require("cucumber");
let number_1;
let number_2;
let result;
(0, cucumber_1.Given)('^Enter first number (.*)(.*)$', (number1, number2) => {
    number_1 = number1;
    number_2 = number2;
});
(0, cucumber_1.When)('^select the (.*)$', (operator) => {
    result = calculate(operator);
});
(0, cucumber_1.And)('^Click Equals Button$', () => {
    console.log('click equal button');
});
(0, cucumber_1.Then)('^the result should be (.*)', (result_calc) => {
    if (result == result_calc) {
        (0, assert_1.default)(true);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0ZXBEZWYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsdUNBQWlEO0FBRWpELElBQUksUUFBUSxDQUFDO0FBQ2IsSUFBSSxRQUFRLENBQUM7QUFDYixJQUFJLE1BQU0sQ0FBQztBQUNYLElBQUEsZ0JBQUssRUFBQywrQkFBK0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUN4RCxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQ25CLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFO0lBQ25DLE1BQU0sR0FBSSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLENBQUE7QUFFRixJQUFBLGNBQUcsRUFBQyx1QkFBdUIsRUFBQyxHQUFFLEVBQUU7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBQSxlQUFJLEVBQUMsNEJBQTRCLEVBQUMsQ0FBQyxXQUFXLEVBQUMsRUFBRTtJQUNqRCxJQUFHLE1BQU0sSUFBRSxXQUFXLEVBQUM7UUFDbkIsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxDQUFBO0tBQ2Y7QUFDRCxDQUFDLENBQUMsQ0FBQTtBQUVGLFNBQVMsU0FBUyxDQUFDLFFBQVE7SUFDdkIsUUFBUSxRQUFRLEVBQUU7UUFDZCxLQUFLLE1BQU07WUFDUCxPQUFPLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsS0FBSyxPQUFPO1lBQ1IsT0FBTyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLEtBQUssVUFBVTtZQUNYLE9BQU8sUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUMvQixLQUFLLFFBQVE7WUFDVCxPQUFPLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0I7WUFDSSxNQUFNO0tBQ2I7QUFDTCxDQUFDIn0=