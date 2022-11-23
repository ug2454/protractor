"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    Capabilities: {
        browserName: 'chrome'
    },
    specs: ['../Features/Test1.feature'],
    cucumberOpts: {
        require: 'Features/Step_Definitions/StepDef.js'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRVcsUUFBQSxNQUFNLEdBQVM7SUFDdEIsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFDLFFBQVE7SUFDbEIsYUFBYSxFQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFOUQsWUFBWSxFQUFDO1FBQ1QsV0FBVyxFQUFDLFFBQVE7S0FDdkI7SUFDRCxLQUFLLEVBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUVuQyxZQUFZLEVBQUM7UUFDVCxPQUFPLEVBQUMsc0NBQXNDO0tBQ2pEO0NBRUosQ0FBQSJ9