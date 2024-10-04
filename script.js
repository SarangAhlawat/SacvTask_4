// script.js

// Define team data
const teamData = {
    1: {
        pcs: [1, 2, 3, 4],
        questions: {
            1: { question: "What is 2 + 3 * 4?", answer: "14", room: "Room A", passcodeChar: "X" },
            2: { question: "What is (8 / 2) + 5?", answer: "9", room: "Room B", passcodeChar: "Y" },
            3: { question: "What is 7 - 3 + 2 * 5?", answer: "14", room: "Room C", passcodeChar: "Z" },
            4: { question: "What is 12 / (3 + 1)?", answer: "3", room: "Room D", passcodeChar: "W" }
        }
    },
    2: {
        pcs: [5, 6, 7, 8],
        questions: {
            5: { question: "What is 5 * 6 - 4?", answer: "26", room: "Room E", passcodeChar: "A" },
            6: { question: "What is 9 + 2 * 3?", answer: "15", room: "Room F", passcodeChar: "B" },
            7: { question: "What is (10 - 2) * 3?", answer: "24", room: "Room G", passcodeChar: "C" },
            8: { question: "What is 16 / 4 + 5?", answer: "9", room: "Room H", passcodeChar: "D" }
        }
    },
    3: {
        pcs: [9, 10, 11, 12],
        questions: {
            9: { question: "What is 3 + 4 * 2?", answer: "11", room: "Room I", passcodeChar: "E" },
            10: { question: "What is 14 / 2 - 3?", answer: "4", room: "Room J", passcodeChar: "F" },
            11: { question: "What is (5 + 3) * 2?", answer: "16", room: "Room K", passcodeChar: "G" },
            12: { question: "What is 20 - 5 * 3?", answer: "5", room: "Room L", passcodeChar: "H" }
        }
    },
    4: {
        pcs: [13, 14, 15, 16],
        questions: {
            13: { question: "What is 6 + 2 * 5?", answer: "16", room: "Room M", passcodeChar: "I" },
            14: { question: "What is (12 / 4) + 7?", answer: "10", room: "Room N", passcodeChar: "J" },
            15: { question: "What is 9 - 3 + 4 * 2?", answer: "14", room: "Room O", passcodeChar: "K" },
            16: { question: "What is 18 / 3 - 2?", answer: "4", room: "Room P", passcodeChar: "L" }
        }
    },
    5: {
        pcs: [17, 18, 19, 20],
        questions: {
            17: { question: "What is 7 * 3 - 5?", answer: "16", room: "Room Q", passcodeChar: "M" },
            18: { question: "What is (8 + 2) * 3?", answer: "30", room: "Room R", passcodeChar: "N" },
            19: { question: "What is 15 / 3 + 4?", answer: "9", room: "Room S", passcodeChar: "O" },
            20: { question: "What is 10 - 2 * 4?", answer: "2", room: "Room T", passcodeChar: "P" }
        }
    },
    6: {
        pcs: [1, 5, 9, 13],
        questions: {
            1: { question: "What is 4 + 5 * 2?", answer: "14", room: "Room U", passcodeChar: "Q" },
            5: { question: "What is (9 / 3) + 6?", answer: "9", room: "Room V", passcodeChar: "R" },
            9: { question: "What is 12 - 4 + 3 * 2?", answer: "14", room: "Room W", passcodeChar: "S" },
            13: { question: "What is 16 / 4 + 5?", answer: "9", room: "Room X", passcodeChar: "T" }
        }
    },
    7: {
        pcs: [2, 6, 10, 14],
        questions: {
            2: { question: "What is 5 * 4 - 6?", answer: "14", room: "Room Y", passcodeChar: "U" },
            6: { question: "What is (10 / 2) + 7?", answer: "12", room: "Room Z", passcodeChar: "V" },
            10: { question: "What is 8 - 3 + 2 * 5?", answer: "12", room: "Room AA", passcodeChar: "W" },
            14: { question: "What is 20 / 5 + 3?", answer: "7", room: "Room AB", passcodeChar: "X" }
        }
    },
    8: {
        pcs: [3, 7, 11, 15],
        questions: {
            3: { question: "What is 6 + 7 * 2?", answer: "20", room: "Room AC", passcodeChar: "Y" },
            7: { question: "What is (14 / 2) + 5?", answer: "12", room: "Room AD", passcodeChar: "Z" },
            11: { question: "What is 9 - 4 + 3 * 3?", answer: "14", room: "Room AE", passcodeChar: "A" },
            15: { question: "What is 24 / 6 - 2?", answer: "2", room: "Room AF", passcodeChar: "B" }
        }
    },
    9: {
        pcs: [4, 8, 12, 16],
        questions: {
            4: { question: "What is 7 * 2 + 5?", answer: "19", room: "Room AG", passcodeChar: "C" },
            8: { question: "What is (16 / 4) + 6?", answer: "10", room: "Room AH", passcodeChar: "D" },
            12: { question: "What is 10 - 3 + 4 * 2?", answer: "15", room: "Room AI", passcodeChar: "E" },
            16: { question: "What is 18 / 3 + 4?", answer: "10", room: "Room AJ", passcodeChar: "F" }
        }
    },
    10: {
        pcs: [5, 9, 13, 17],
        questions: {
            5: { question: "What is 8 + 9 * 2?", answer: "26", room: "Room AK", passcodeChar: "G" },
            9: { question: "What is (20 / 5) + 7?", answer: "11", room: "Room AL", passcodeChar: "H" },
            13: { question: "What is 12 - 5 + 3 * 3?", answer: "16", room: "Room AM", passcodeChar: "I" },
            17: { question: "What is 30 / 5 - 2?", answer: "4", room: "Room AN", passcodeChar: "J" }
        }
    }
};

// Initialize team progress in localStorage if not already present
function initializeProgress() {
    for (let team = 1; team <= 10; team++) {
        if (!localStorage.getItem(`team_${team}_answered`)) {
            localStorage.setItem(`team_${team}_answered`, JSON.stringify([]));
        }
        if (!localStorage.getItem(`team_${team}_passcode`)) {
            localStorage.setItem(`team_${team}_passcode`, "");
        }
    }
}

// Call initializeProgress on script load
initializeProgress();

// Handle Team Form Submission
document.getElementById('team-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const teamNumber = parseInt(document.getElementById('team-number').value);
    const pcNumber = parseInt(document.getElementById('pc-number').value);

    // Validate team number
    if (teamNumber < 1 || teamNumber > 10) {
        alert("Please enter a valid team number between 1 and 10.");
        return;
    }

    // Validate PC number
    if (pcNumber < 1 || pcNumber > 20) {
        alert("Please enter a valid PC number between 1 and 20.");
        return;
    }

    // Check if the PC number is assigned to the team
    if (!teamData[teamNumber].pcs.includes(pcNumber)) {
        alert("This PC number is not assigned to your team.");
        return;
    }

    // Check if the question for this PC has already been answered
    // let answeredPCs = JSON.parse(localStorage.getItem(`team_${teamNumber}_answered`));
    // if (answeredPCs.includes(pcNumber)) {
    //     alert("You have already answered the question for this PC.");
    //     return;
    // }

    // Store current team and PC number in localStorage
    localStorage.setItem('currentTeam', teamNumber);
    localStorage.setItem('currentPC', pcNumber);

    // Load the question
    loadQuestion(teamNumber, pcNumber);
});

function loadQuestion(teamNumber, pcNumber) {
    const questionObj = teamData[teamNumber].questions[pcNumber];
    if (!questionObj) {
        alert("No question available for this PC number.");
        return;
    }

    // Hide entry form and show question section
    document.getElementById('entry-form').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';

    // Display the question
    document.getElementById('question-text').textContent = questionObj.question;

    // Store the correct answer
    localStorage.setItem('correctAnswer', questionObj.answer);
}

// Handle Answer Submission
document.getElementById('answer-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = localStorage.getItem('correctAnswer');
    const teamNumber = localStorage.getItem('currentTeam');
    const pcNumber = parseInt(localStorage.getItem('currentPC'));

    if (userAnswer === correctAnswer) {
        // Retrieve question details
        const questionObj = teamData[teamNumber].questions[pcNumber];

        // Store room number and passcode character
        localStorage.setItem('roomNumber', questionObj.room);
        localStorage.setItem('passcodeChar', questionObj.passcodeChar);

        // Mark this PC as answered
        let answeredPCs = JSON.parse(localStorage.getItem(`team_${teamNumber}_answered`));
        answeredPCs.push(pcNumber);
        localStorage.setItem(`team_${teamNumber}_answered`, JSON.stringify(answeredPCs));

        // Append the passcode character to the team's passcode
        let currentPasscode = localStorage.getItem(`team_${teamNumber}_passcode`);
        currentPasscode += questionObj.passcodeChar;
        localStorage.setItem(`team_${teamNumber}_passcode`, currentPasscode);

        // Redirect to result page
        window.location.href = 'result.html';
    } else {
        // If incorrect, show feedback
        document.getElementById('feedback').textContent = "Incorrect answer. Please try again.";
        document.getElementById('feedback').style.color = 'red';
    }
});
