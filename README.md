## challenge 1
## Explanation:
## Readline Module:

const readline = require('readline');: This imports Node.js's built-in readline module.

### Interface Creation:

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });: This sets up the readline interface to read from stdin (standard input) and write to stdout (standard output).

### Prompting User Input:

rl.question("Enter student's marks (0-100): ", function(answer) { ... });: This prompts the user to enter a mark and executes the callback function with the user's input (answer).

### Input Validation:

Converts the user input to a float (parseFloat(answer)) and checks if it's a valid number between 0 and 100 using isNaN(mark) || mark < 0 || mark > 100. If invalid, it prints an error message and exits (rl.close()).

### Grade Assignment:

Uses conditional statements (if, else if, else) to determine which grade corresponds to the input mark.

### Output:

console.log(Hello, the grade for your mark ${mark} is ${grade});: Prints the corresponding grade to the console using template literals for clear output.

### Close the Interface:

rl.close();: Closes the readline interface once all operations are complete.

## Explanation for challenge2:

### Variables Initialization:

speedLimit: Defines the speed limit (70 km/h).
kmPerDemeritPoint: Specifies how many kilometers over the limit earn one demerit point (5 km/h).
pointsPerKmOver: Each km/h over the speed limit beyond kmPerDemeritPoint contributes to additional demerit points.

### Function speedDetector (speed):

Takes speed as an argument, representing the speed of the car.
Checks if speed is less than speedLimit (70 km/h). If true, it prints "Ok" and exits.

### Calculating Demerit Points:

If speed exceeds speedLimit, calculates demeritPoints based on how much speed exceeds speedLimit. This is done using:
let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
Math.floor is used to ensure we get the whole number of demerit points.

### License Suspension Check:

If demeritPoints exceed 12, it prints "License suspended".
Output:

If within demerit point limits, it prints "Points: ${demeritPoints}".


## Explanation for challenge3:

Constants: PAYE_RATES, NHIF_RATES, and NSSF_RATES arrays hold the tax rates and deductions thresholds as sourced from the provided links.

Gross Salary Calculation: Sum of basicSalary and benefits.

Tax Calculation (PAYE): Based on the taxable income calculated using the rates specified in PAYE_RATES.

NHIF Deduction: Based on the gross salary using the rates specified in NHIF_RATES.

NSSF Deduction: Based on the gross salary using the rates specified in NSSF_RATES.

Net Salary Calculation: Gross salary minus the total deductions (tax, NHIF, NSSF).

Output: Logs the results including gross salary, deductions (PAYE, NHIF, NSSF), and net salary to the console.

