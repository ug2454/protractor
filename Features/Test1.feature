Feature: Calculator

    Scenario Outline: Test all calculator scenario

        Given Enter first and second number <number1> <number2>
        When select the '<operator>'
        Then the result should be <result>

        Examples:
            | number1 | number2 | operator | result |
            | 1       | 2       | plus     | 3      |
            | 3       | 1       | minus    | 2      |
            | 3       | 4       | multiply | 12     |
            | 20      | 5       | divide   | 4      |
