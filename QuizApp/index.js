const quizData = [
    {
        question: 'Which of the following is not a programming language?',
        a: 'java',
        b: 'HTML',
        c: 'C',
        d: 'python',
        correct: "b",
    },
    {
        question: 'When was javascript launched?',
        a: '1996',
        b: '1998',
        c: '2000',
        d: 'None of the above',
        correct: "d",
    },
    {
        question: 'What is the height of sania',
        a: '5,5',
        b: '5,6',
        c: '5,3',
        d: '5,8',
        correct: "b",
    },
    {
        question: 'My fav tv show',
        a: 'Euphoria',
        b: 'TVD',
        c: 'Dark',
        d: 'Stranger Things',
        correct: "a",
    },
    {
        question: 'How old am I',
        a: '17',
        b: '19',
        c: '20',
        d: '21',
        correct: "c",
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer);

    if (answer) {


        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // alert("Your score is "+ score)
            quiz.innerHTML = `<h2> Your score is ${score}</h2>`;
        }

    }


})
