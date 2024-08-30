const allQuestions = [
    {
        "question": "What is the derivative of x^2?",
        "options": ["2x", "x^2", "2", "x"],
        "answer": "2x"
    },
    {
        "question": "What is the integral of 1/x?",
        "options": ["ln(x)", "1/x", "x^2", "1"],
        "answer": "ln(x)"
    },
    {
        "question": "What is the value of pi?",
        "options": ["3.14", "2.71", "1.41", "1.61"],
        "answer": "3.14"
    },
    {
        "question": "What is the square root of 16?",
        "options": ["2", "4", "8", "16"],
        "answer": "4"
    },
    {
        "question": "What is the quadratic formula?",
        "options": ["x = (-b ± √(b² - 4ac)) / 2a", "x = (-b ± √(b² + 4ac)) / 2a", "x = (b ± √(a² - 4bc)) / 2a", "x = (-b ± √(b² - 4ac)) / a"],
        "answer": "x = (-b ± √(b² - 4ac)) / 2a"
    },
    {
        "question": "What is the sum of the angles in a triangle?",
        "options": ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
        "answer": "180 degrees"
    },
    {
        "question": "What is the formula for the area of a circle?",
        "options": ["πr²", "2πr", "πd", "πr"],
        "answer": "πr²"
    },
    {
        "question": "What is the value of sin(90 degrees)?",
        "options": ["1", "0", "-1", "0.5"],
        "answer": "1"
    },
    {
        "question": "What is the Pythagorean theorem?",
        "options": ["a² + b² = c²", "a² - b² = c²", "a + b = c", "a² + b² = 2c²"],
        "answer": "a² + b² = c²"
    },
    {
        "question": "What is the area of a rectangle with width 5 and height 10?",
        "options": ["50", "15", "25", "30"],
        "answer": "50"
    },
    {
        "question": "What is the base-10 value of the binary number 1010?",
        "options": ["10", "8", "12", "20"],
        "answer": "10"
    },
    {
        "question": "What is the derivative of sin(x)?",
        "options": ["cos(x)", "sin(x)", "-cos(x)", "-sin(x)"],
        "answer": "cos(x)"
    },
    {
        "question": "What is the value of log₁₀(100)?",
        "options": ["2", "10", "100", "1"],
        "answer": "2"
    },
    {
        "question": "What is the product of 7 and 9?",
        "options": ["63", "72", "81", "56"],
        "answer": "63"
    },
    {
        "question": "What is the sum of the first 10 natural numbers?",
        "options": ["55", "45", "50", "60"],
        "answer": "55"
    },
    {
        "question": "What is the slope of the line y = 3x + 2?",
        "options": ["3", "2", "1", "0"],
        "answer": "3"
    },
    {
        "question": "What is the formula for the volume of a sphere?",
        "options": ["(4/3)πr³", "4πr²", "πr²h", "2πr³"],
        "answer": "(4/3)πr³"
    },
    {
        "question": "What is the first prime number?",
        "options": ["2", "1", "3", "5"],
        "answer": "2"
    },
    {
        "question": "What is the distance between the points (1,2) and (4,6)?",
        "options": ["5", "4", "3", "6"],
        "answer": "5"
    },
    {
        "question": "What is the result of 8 ÷ 2(2 + 2)?",
        "options": ["16", "8", "4", "1"],
        "answer": "16"
    },
    {
        "question": "What is the coefficient of x² in the polynomial 3x² - 5x + 7?",
        "options": ["3", "-5", "7", "0"],
        "answer": "3"
    },
    {
        "question": "What is the result of 5 factorial (5!)?",
        "options": ["120", "60", "30", "24"],
        "answer": "120"
    },
    {
        "question": "What is the sum of the angles in a hexagon?",
        "options": ["720 degrees", "360 degrees", "540 degrees", "180 degrees"],
        "answer": "720 degrees"
    },
    {
        "question": "What is the value of e (Euler's number) approximately?",
        "options": ["2.718", "3.141", "1.618", "1.414"],
        "answer": "2.718"
    },
    {
        "question": "What is the least common multiple of 6 and 8?",
        "options": ["24", "48", "12", "36"],
        "answer": "24"
    },
    {
        "question": "What is the distance formula between two points (x1, y1) and (x2, y2)?",
        "options": ["√((x2 - x1)² + (y2 - y1)²)", "√((x1 + x2)² + (y1 + y2)²)", "((x2 - x1) + (y2 - y1))²", "((x2 - x1)² + (y2 - y1)²)"],
        "answer": "√((x2 - x1)² + (y2 - y1)²)"
    },
    {
        "question": "What is the root of the polynomial x³ - 2x² - 5x + 6?",
        "options": ["1", "-1", "2", "-2"],
        "answer": "1"
    },
    {
        "question": "What is the area of a triangle with base 10 and height 5?",
        "options": ["25", "50", "15", "30"],
        "answer": "25"
    },
    {
        "question": "What is the value of 2 raised to the power of 3?",
        "options": ["8", "6", "9", "7"],
        "answer": "8"
    },
    {
        "question": "What is the median of the set {2, 4, 6, 8, 10}?",
        "options": ["6", "4", "8", "10"],
        "answer": "6"
    },
    {
        "question": "What is the sum of the interior angles of a pentagon?",
        "options": ["540 degrees", "360 degrees", "720 degrees", "180 degrees"],
        "answer": "540 degrees"
    },
    {
        "question": "What is the perimeter of a square with side length 4?",
        "options": ["16", "12", "20", "8"],
        "answer": "16"
    },
    {
        "question": "What is the result of the expression 3 + 2 × (8 ÷ 4)?",
        "options": ["7", "11", "13", "10"],
        "answer": "11"
    },
    {
        "question": "What is the angle sum property of a quadrilateral?",
        "options": ["360 degrees", "180 degrees", "90 degrees", "270 degrees"],
        "answer": "360 degrees"
    },
    {
        "question": "What is the value of the expression (3 + 5)²?",
        "options": ["64", "56", "48", "25"],
        "answer": "64"
    },
    {
        "question": "What is the derivative of x³?",
        "options": ["3x²", "x²", "2x", "3x³"],
        "answer": "3x²"
    },
    {
        "question": "What is the value of 9 ÷ 3 + 2 × 5?",
        "options": ["13", "14", "17", "20"],
        "answer": "13"
    },
    {
        "question": "What is the angle between the hour and minute hand of a clock at 3:00?",
        "options": ["90 degrees", "180 degrees", "60 degrees", "120 degrees"],
        "answer": "90 degrees"
    },
    {
        "question": "What is the LCM of 4 and 5?",
        "options": ["20", "15", "12", "25"],
        "answer": "20"
    },
    {
        "question": "What is the solution to the equation 2x - 4 = 6?",
        "options": ["5", "6", "2", "4"],
        "answer": "5"
    },
    {
        "question": "What is the factorial of 4 (4!)?",
        "options": ["24", "20", "16", "12"],
        "answer": "24"
    },
    {
        "question": "What is the coefficient of x in the expression 7x + 2?",
        "options": ["7", "2", "1", "0"],
        "answer": "7"
    },
    {
        "question": "What is the result of 3³?",
        "options": ["27", "9", "12", "15"],
        "answer": "27"
    },
    {
        "question": "What is the surface area of a cube with side length 3?",
        "options": ["54", "27", "18", "36"],
        "answer": "54"
    },
    {
        "question": "What is the value of 5² - 3²?",
        "options": ["16", "25", "9", "4"],
        "answer": "16"
    },
    {
        "question": "What is the third Fibonacci number?",
        "options": ["2", "1", "3", "5"],
        "answer": "2"
    },
    {
        "question": "What is the square of 12?",
        "options": ["144", "124", "144", "156"],
        "answer": "144"
    },
    {
        "question": "What is the result of 7 × 6 ÷ 3?",
        "options": ["14", "12", "21", "18"],
        "answer": "14"
    },
    {
        "question": "What is the sum of 7 and 9?",
        "options": ["16", "15", "17", "14"],
        "answer": "16"
    },
    {
        "question": "What is the base of the natural logarithm?",
        "options": ["e", "π", "2", "10"],
        "answer": "e"
    },
    {
        "question": "What is the square root of 81?",
        "options": ["9", "8", "7", "10"],
        "answer": "9"
    },
    {
        "question": "What is the integral of x with respect to x?",
        "options": ["x²/2", "x", "x³/3", "2x"],
        "answer": "x²/2"
    },
    {
        "question": "What is the result of 15 ÷ (3 + 2)?",
        "options": ["3", "5", "7", "6"],
        "answer": "3"
    },
    {
        "question": "What is the area of a circle with radius 4?",
        "options": ["50.27", "25.12", "16π", "32"],
        "answer": "16π"
    },
    {
        "question": "What is the result of 10 - (2 × 3)?",
        "options": ["4", "2", "6", "8"],
        "answer": "4"
    },
    {
        "question": "What is the root of the polynomial x² - 4?",
        "options": ["2", "-2", "0", "-4"],
        "answer": "2"
    },
    {
        "question": "What is the sum of the squares of 3 and 4?",
        "options": ["25", "16", "20", "12"],
        "answer": "25"
    },
    {
        "question": "What is the volume of a cube with side length 5?",
        "options": ["125", "25", "30", "50"],
        "answer": "125"
    },
    {
        "question": "What is the result of 8 ÷ 2 × (2 + 2)?",
        "options": ["16", "8", "4", "1"],
        "answer": "16"
    },
    {
        "question": "What is the result of 7 - 3 × 2?",
        "options": ["4", "8", "2", "6"],
        "answer": "1"
    },
    {
        "question": "What is the perimeter of a rectangle with length 6 and width 3?",
        "options": ["18", "24", "12", "15"],
        "answer": "18"
    },
    {
        "question": "What is the result of 2³ - 1?",
        "options": ["7", "8", "5", "6"],
        "answer": "7"
    },
    {
        "question": "What is the result of (4 + 3) × 2?",
        "options": ["14", "16", "12", "10"],
        "answer": "14"
    },
    {
        "question": "What is the area of a right triangle with base 6 and height 8?",
        "options": ["24", "30", "48", "40"],
        "answer": "24"
    },
    {
        "question": "What is the result of 5 × (2 + 3)?",
        "options": ["25", "20", "15", "10"],
        "answer": "25"
    },
    {
        "question": "What is the coefficient of x in the expression 2x + 7?",
        "options": ["2", "7", "1", "0"],
        "answer": "2"
    },
    {
        "question": "What is the result of 6 × 3 ÷ 2?",
        "options": ["9", "12", "18", "8"],
        "answer": "9"
    },
    {
        "question": "What is the square root of 49?",
        "options": ["7", "6", "5", "8"],
        "answer": "7"
    },
    {
        "question": "What is the perimeter of a circle with radius 7?",
        "options": ["44", "14", "22", "20"],
        "answer": "44"
    },
    {
        "question": "What is the result of 9 - 4 + 3?",
        "options": ["8", "7", "6", "5"],
        "answer": "8"
    },
    {
        "question": "What is the area of a square with side length 5?",
        "options": ["25", "20", "30", "35"],
        "answer": "25"
    },
    {
        "question": "What is the result of (7 - 3) × 2?",
        "options": ["8", "10", "12", "14"],
        "answer": "8"
    },
    {
        "question": "What is the sum of 4 and 8 divided by 2?",
        "options": ["6", "12", "8", "10"],
        "answer": "6"
    },
    {
        "question": "What is the square of 7?",
        "options": ["49", "42", "56", "64"],
        "answer": "49"
    },
    {
        "question": "What is the result of 5 ÷ (1 + 1)?",
        "options": ["2.5", "5", "4", "2"],
        "answer": "2.5"
    },
    {
        "question": "What is the perimeter of a triangle with sides 3, 4, and 5?",
        "options": ["12", "14", "15", "16"],
        "answer": "12"
    },
    {
        "question": "What is the sum of 2 + 2 × 3?",
        "options": ["8", "10", "12", "7"],
        "answer": "8"
    },
    {
        "question": "What is the result of 10 - 2 × (4 - 1)?",
        "options": ["4", "6", "8", "10"],
        "answer": "4"
    },
    {
        "question": "What is the area of a parallelogram with base 5 and height 6?",
        "options": ["30", "25", "35", "40"],
        "answer": "30"
    },
    {
        "question": "What is the result of (8 + 2) ÷ 2?",
        "options": ["5", "6", "8", "4"],
        "answer": "5"
    },
    {
        "question": "What is the result of 12 × 2 ÷ 6?",
        "options": ["4", "6", "8", "10"],
        "answer": "4"
    },
    {
        "question": "What is the sum of the first 5 even numbers?",
        "options": ["30", "20", "25", "15"],
        "answer": "30"
    },
    {
        "question": "What is the result of 6² - 4?",
        "options": ["32", "36", "28", "24"],
        "answer": "32"
    },
    {
        "question": "What is the perimeter of a rectangle with length 10 and width 4?",
        "options": ["28", "20", "24", "30"],
        "answer": "28"
    },
    {
        "question": "What is the result of 9 ÷ (3 × 2)?",
        "options": ["1.5", "2", "3", "4"],
        "answer": "1.5"
    },
    {
        "question": "What is the sum of the angles in a hexagon?",
        "options": ["720 degrees", "540 degrees", "360 degrees", "180 degrees"],
        "answer": "720 degrees"
    },
    {
        "question": "What is the result of 4 × (2 + 1)?",
        "options": ["12", "10", "8", "6"],
        "answer": "12"
    },
    {
        "question": "What is the area of a triangle with base 8 and height 3?",
        "options": ["12", "24", "16", "20"],
        "answer": "12"
    },
    {
        "question": "What is the result of 7 × 2 + 3?",
        "options": ["17", "14", "21", "19"],
        "answer": "17"
    },
    {
        "question": "What is the value of 5 to the power of 3?",
        "options": ["125", "150", "100", "75"],
        "answer": "125"
    },
    {
        "question": "What is the result of 8 - (2 + 2)?",
        "options": ["4", "6", "8", "10"],
        "answer": "4"
    },
    {
        "question": "What is the square root of 64?",
        "options": ["8", "7", "9", "6"],
        "answer": "8"
    },
    {
        "question": "What is the result of 2 × (5 - 3)?",
        "options": ["4", "6", "8", "10"],
        "answer": "4"
    },
    {
        "question": "What is the value of 10 - 5 × 2?",
        "options": ["0", "5", "10", "15"],
        "answer": "0"
    },
    {
        "question": "What is the area of a square with side length 6?",
        "options": ["36", "30", "40", "24"],
        "answer": "36"
    },
    {
        "question": "What is the result of (7 + 3) ÷ 2?",
        "options": ["5", "6", "7", "8"],
        "answer": "5"
    },
    {
        "question": "What is the result of 2 × (3 + 5)?",
        "options": ["16", "14", "10", "12"],
        "answer": "16"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function getRandomQuestions() {
    // Shuffle and select 8 random questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    questionElement.textContent = question.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    question.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option-btn';
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    const resultMessage = getResultMessage();
    document.getElementById('result-message').textContent = resultMessage;
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('retry-btn').style.display = 'block';
}

function getResultMessage() {
    let message = '';
    if (score <= 3) {
        message = `😓 Your score is ${score} out of 8. Better try next time!`;
    } else if (score <= 6) {
        message = `👍 Your score is ${score} out of 8. Keep it up!`;
    } else {
        message = `🎉 Excellent! You scored ${score} out of 8. You're doing great!`;
    }
    return message;
}

document.getElementById('retry-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    questions = getRandomQuestions();
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('retry-btn').style.display = 'none';
    showQuestion();
});

// Initial setup
questions = getRandomQuestions();
showQuestion();
