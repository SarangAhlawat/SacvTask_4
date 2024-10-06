const teamData = {
    D1: {
        pcs: [3, 7, 13, 19],
        questions: {
            3: { question: "What is 8+(6×3)−9÷3 = x, x×2−5?", answer: "41", room: "404", passcodeChar: "1st Character Revealed: Q" },
            7: { question: "What is (15÷3)+12−(4×2) = x, x+6÷2?", answer: "12", room: "405", passcodeChar: "2nd Character Revealed: X" },
            13: { question: "What is 24−(4×3)+(18÷3) = x, x÷2+4?", answer: "13", room: "412", passcodeChar: "3rd Character Revealed: J" },
            19: { question: "What is 5×(6+2)−10÷2 = x, x÷5+7?", answer: "14", room: "613", passcodeChar: "4th Character Revealed: V" }
        }
    },
    D2: {
        pcs: [5, 9, 15, 1],
        questions: {
            5: { question: "What is (30÷5)+(8×3)−9 = x, x−4×2?", answer: "13", room: "405", passcodeChar: "1st Character Revealed: Z" },
            9: { question: "What is 16+(7×4)−(12÷3) = x, x÷2+5?", answer: "25", room: "412", passcodeChar: "2nd Character Revealed: W" },
            15: { question: "What is 50÷(5+5)+(3×4) = x, x×2−5?", answer: "29", room: "402", passcodeChar: "3rd Character Revealed: L" },
            1: { question: "What is (6×5)−8+4÷2 = x, x÷3+6?", answer: "14", room: "613", passcodeChar: "4th Character Revealed: P" }
        }
    },
    D3: {
        pcs: [7, 11, 17, 3],
        questions: {
            7: { question: "What is 9×(4+1)−8÷2 = x, x−14÷2?", answer: "34", room: "412", passcodeChar: "1st Character Revealed: G" },
            11: { question: "What is (18+6)÷4+12×2 = x, x+4−3?", answer: "31", room: "402", passcodeChar: "2nd Character Revealed: R" },
            17: { question: "What is (8×3)−9+12÷4 = x, x÷3×2?", answer: "12", room: "404", passcodeChar: "3rd Character Revealed: K" },
            3: { question: "What is 42÷(8−2)+(3×6) = x, x+5×2?", answer: "35", room: "613", passcodeChar: "4th Character Revealed: C" }
        }
    },
    D4: {
        pcs: [9, 13, 19, 5],
        questions: {
            9: { question: "What is (30÷5)×4+20−3 = x, x−4÷2?", answer: "39", room: "402", passcodeChar: "1st Character Revealed: H" },
            13: { question: "What is (50÷5)+10×3−7 = x, x×2+3?", answer: "69", room: "404", passcodeChar: "2nd Character Revealed: T" },
            19: { question: "What is 8+(27÷3)+4×6 = x, x−6÷2?", answer: "38", room: "405", passcodeChar: "3rd Character Revealed: F" },
            5: { question: "What is (45÷9)×6−8+4 = x, x+4×2?", answer: "34", room: "613", passcodeChar: "4th Character Revealed: M" }
        }
    },
    D5: {
        pcs: [11, 15, 1, 7],
        questions: {
            11: { question: "What is 60÷(5×2)+(9×3) = x, x−3×4?", answer: "21", room: "404", passcodeChar: "1st Character Revealed: V" },
            15: { question: "What is (12+8)×3−5÷5+1 = x, x÷4−3?", answer: "12", room: "405", passcodeChar: "2nd Character Revealed: X" },
            1: { question: "What is 6+(15÷3)×4−8 = x, x+7×2?", answer: "32", room: "412", passcodeChar: "3rd Character Revealed: N" },
            7: { question: "What is (21÷7)×5+12−8÷2 = x, x−2×4?", answer: "15", room: "613", passcodeChar: "4th Character Revealed: D" }
        }
    },
    D6: {
        pcs: [13, 17, 3, 9],
        questions: {
            13: { question: "What is (36÷6)+(5×4)−7 = x, x×2−8?", answer: "30", room: "405", passcodeChar: "1st Character Revealed: B" },
            17: { question: "What is 50−(6×5)+(16÷4) = x, x+6÷3?", answer: "26", room: "412", passcodeChar: "2nd Character Revealed: Y" },
            3: { question: "What is (8×4)−15+9÷3 = x, x÷2+7?", answer: "17", room: "402", passcodeChar: "3rd Character Revealed: Z" },
            9: { question: "What is 9+(7×5)−10÷2 = x, x÷3+9?", answer: "22", room: "613", passcodeChar: "4th Character Revealed: H" }
        }
    },
    D7: {
        pcs: [15, 19, 5, 11],
        questions: {
            15: { question: "What is (45÷9)+18×2−11 = x, x−6÷3?", answer: "28", room: "412", passcodeChar: "1st Character Revealed: D" },
            19: { question: "What is 16+(12÷4)+5×3 = x, x×2−7?", answer: "61", room: "402", passcodeChar: "2nd Character Revealed: J" },
            5: { question: "What is (30÷6)+(4×7)−5 = x, x+4×3?", answer: "40", room: "404", passcodeChar: "3rd Character Revealed: P" },
            11: { question: "What is 15+(18÷6)×5−7 = x, x×2+3?", answer: "49", room: "613", passcodeChar: "4th Character Revealed: Q" }
        }
    },
    D8: {
        pcs: [17, 1, 7, 13],
        questions: {
            17: { question: "What is (50÷5)×3+12−8 = x, x−9÷3?", answer: "31", room: "402", passcodeChar: "1st Character Revealed: M" },
            1: { question: "What is 24−(8÷4)+7×3 = x, x×2-26?", answer: "60", room: "404", passcodeChar: "2nd Character Revealed: W" },
            7: { question: "What is 15×(5+1)−8÷4 = x, x÷2+12?", answer: "56", room: "405", passcodeChar: "3rd Character Revealed: F" },
            13: { question: "What is (21÷7)+5×6−9÷3 = x, x−2×5?", answer: "20", room: "613", passcodeChar: "4th Character Revealed: K" }
        }
    },
    D9: {
        pcs: [19, 3, 9, 15],
        questions: {
            19: { question: "What is 6+(7×6)−10÷2 = x, x+4÷2?", answer: "45", room: "404", passcodeChar: "1st Character Revealed: C" },
            3: { question: "What is 8×(4+3)−6÷3 = x, x÷3−5?", answer: "13", room: "405", passcodeChar: "2nd Character Revealed: T" },
            9: { question: "What is 40−(12÷6)+5×4 = x, x+10÷5?", answer: "60", room: "412", passcodeChar: "3rd Character Revealed: L" },
            15: { question: "What is (35÷7)×5+10−7 = x, x×2+1?", answer: "57", room: "613", passcodeChar: "4th Character Revealed: S" }
        }
    },
    D10: {
        pcs: [1, 5, 11, 17],
        questions: {
            1: { question: "What is 12+(9×5)−25÷5 = x, x−3÷3?", answer: "51", room: "405", passcodeChar: "1st Character Revealed: K" },
            5: { question: "What is (30÷5)×4+9−7 = x, x÷2+6?", answer: "19", room: "412", passcodeChar: "2nd Character Revealed: R" },
            11: { question: "What is 25−(5×2)+(24÷4) = x, x×3+8?", answer: "71", room: "402", passcodeChar: "3rd Character Revealed: Q" },
            17: { question: "What is 60÷(8−2)+(4×7) = x, x−8÷4?", answer: "36", room: "613", passcodeChar: "4th Character Revealed: X" }
        }
    }
};

document.getElementById('team-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const teamNumber = document.getElementById('team-number').value;
    const pcNumber = parseInt(document.getElementById('pc-number').value);
    
    const validTeams = [
        "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"
    ];
    
    if (!validTeams.includes(teamNumber)) {
        alert("Please enter a valid team number between D1 and D10 (capital 'D').");
        return;
    }
    

    if (pcNumber < 1 || pcNumber > 20) {
        alert("Please enter a valid PC number between 1 and 20.");
        return;
    }

    // pc assigned
    if (!teamData[teamNumber].pcs.includes(pcNumber)) {
        alert("This PC number is not assigned to your team.");
        return;
    }


    loadQuestion(teamNumber, pcNumber);
});

function loadQuestion(teamNumber, pcNumber) {
    const questionObj = teamData[teamNumber].questions[pcNumber];
    if (!questionObj) {
        alert("No question available for this PC number.");
        return;
    }

    localStorage.setItem('correctAnswer', questionObj.answer);
    localStorage.setItem('passcodeChar', questionObj.passcodeChar);
    localStorage.setItem('roomNumber', questionObj.room);

    console.log("Stored Room Number: ", questionObj.room);

    document.getElementById('entry-form').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';

    // question
    document.getElementById('question-text').textContent = questionObj.question;

}


document.getElementById('answer-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const userAnswer = document.getElementById('answer').value.trim();
    const correctAnswer = localStorage.getItem('correctAnswer');

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct answer.";
        document.getElementById('feedback').style.color = 'green';

        window.location.href = 'result.html';  // Redirect if correct
    } else {
        document.getElementById('feedback').textContent = "Incorrect answer. Please try again.";
        document.getElementById('feedback').style.color = 'red';
    }
});
