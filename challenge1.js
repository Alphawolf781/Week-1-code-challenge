const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function gradeGenerator() {
    rl.question("Enter student's marks (0-100): ", function(answer) {
        let mark = parseFloat(answer);
        
        
        if (isNaN(mark) || mark < 0 || mark > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            rl.close();
            return;
        }
        
        let grade;
        if (mark > 79) {
            grade = 'A';
        } else if (mark >= 60) {
            grade = 'B';
        } else if (mark >= 50) {
            grade = 'C';
        } else if (mark >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
        
        console.log(`Hello, the grade for your mark ${mark} is ${grade}`);
        
        rl.close();
    });
}


gradeGenerator();
