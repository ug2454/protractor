Feature: Calculator

    Scenario Outline: Test all calculator scenario

        Given Enter first and second number <number1> <number2>
        # When select the '<operator>'
        # Then the result should be <result>

        Examples:
            | number1 | number2 | operator       | result |
            | 1       | 2       | ADDITION       | 3      |
            # | 3       | 1       | SUBTRACTION    | 2      |
            # | 3       | 4       | MULTIPLICATION | 12     |
            # | 20      | 5       | DIVISION       | 4      |
            # | 20      | 5       | MODULO         | 0      |
