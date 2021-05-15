// creating an array and passing the number, questions, answers, and answers
const questionDB = [
  {
    question: "Q1: What does HTML stand for?",

    answers: {
      a: "Hyper Text Preprocessor",
      b: "Hyper Text Markup Language",
      c: "Hyper Text Multiple Language",
      d: "Hyper Tool Multi Language",
    },
    correctAnswer: "b",
    selectedAnswer: null,
  },
  {
    question: "Q2: What does CSS stand for?",

    answers: {
      a: "Common Style Sheet",
      b: "Colorful Style Sheet",
      c: "Computer Style Sheet",
      d: "Cascading Style Sheet",
    },
    correctAnswer: "d",
    selectedAnswer: null,
  },
  {
    question: "Q3: What does PHP stand for?",

    answers: {
      a: "Hypertext Preprocessor",
      b: "Hypertext Programming",
      c: "Hypertext Preprogramming",
      d: "Hometext Preprocessor",
    },
    correctAnswer: "a",
    selectedAnswer: null,
  },
  {
    question: "Q4: What does SQL stand for?",

    answers: {
      a: "Stylish Question Language",
      b: "Stylesheet Query Language",
      c: "Statement Question Language",
      d: "Structured Query Language",
    },
    correctAnswer: "d",
    selectedAnswer: null,
  },
  {
    question: "Q5: What does XML stand for?",

    answers: {
      a: "eXtensible Markup Language",
      b: "eXecutable Multiple Language",
      c: "eXTra Multi-Program Language",
      d: "eXamine Multiple Language",
    },
    correctAnswer: "a",
    selectedAnswer: null,
  },
  {
    question: "Q6: Your Question is Here",
    answers: { a: "Option 1", b: "option 2", c: "option 3", d: "option 4" },
    correctAnswer: "b",
    selectedAnswer: null,
  },
  {
    question: "Q7: Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "wegonfkdmlsc",
    },
    correctAnswer: "c",
    selectedAnswer: null,
  },
  {
    question: "Q8: Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm",
      d: "gtfdsdv",
    },
    correctAnswer: "c",
    selectedAnswer: null,
  },
  {
    question: "Q9: Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "d",
    selectedAnswer: null,
  },
  {
    statement: `Q10: It is a paragraph type question you need to read the paragraph and answer the question.
      There was a girl name Jenny in the New York City .She lives their with her parents.
      1. Lorem ipsum dolor sit amet consectetur.
      2. Adipisicing elit. Eius fugiat natus necessitatibus.
      3. Consequuntur placeat harum quas ex non impedit.
      4. Doloribus iusto maxime sunt voluptates quam.`,
    question: "What was the name of girl?",
    answers: {
      a: "Jennifer",
      b: "Phoebs",
      c: "Joey",
      d: "Jenny",
    },
    correctAnswer: "d",
    selectedAnswer: null,
  },
];
const startbutton = document.getElementById("startbutton");
const timer = document.getElementById("timer");
const quiz = document.getElementById("quiz");

function start() {
  //referencing required HTML elements.
  const askedquestion = document.getElementById("question");
  const optionA = document.getElementById("optionA");
  const optionB = document.getElementById("optionB");
  const optionC = document.getElementById("optionC");
  const optionD = document.getElementById("optionD");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");
  const btnnext = document.getElementById("next");
  const btnprevious = document.getElementById("previous");
  const btnsubmit = document.getElementById("submit");
  const options = document.getElementsByClassName("options");
  const checkbox = document.getElementById("checkbox");
  const content = document.getElementById("content");
  const quesnos = document.getElementsByClassName("quesnos");
  const clearresponse = document.getElementById("clear-response");
  const container = document.getElementsByClassName("container");
  quesnos[0].addEventListener("click", () => {
    ques = questionDB[0].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[0].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[1].addEventListener("click", () => {
    ques = questionDB[1].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[1].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[2].addEventListener("click", () => {
    ques = questionDB[2].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[2].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[3].addEventListener("click", () => {
    ques = questionDB[3].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[3].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[4].addEventListener("click", () => {
    ques = questionDB[4].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[4].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[5].addEventListener("click", () => {
    ques = questionDB[5].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[5].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[6].addEventListener("click", () => {
    ques = questionDB[6].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[6].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[7].addEventListener("click", () => {
    ques = questionDB[7].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[7].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[8].addEventListener("click", () => {
    ques = questionDB[8].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[8].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });
  quesnos[9].addEventListener("click", () => {
    ques = questionDB[9].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[9].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
  });

  //clearing the answer of particular question when user click clear Response button
  clearresponse.addEventListener("click", () => {
    options[0].checked = false;
    options[1].checked = false;
    options[2].checked = false;
    options[3].checked = false;
  });

  //displaying the mark as review and clear Response button when start button(quiz has started) has clickeoptionD.
  checkbox.style.display = "flex";
  checkbox.style.justifyContent = "space-between";

  //extraction the id of the radiobutton user selected

  const getCheckAnswer = () => {
    let option;
    for (i = 0; i < options.length; i++) {
      if (options[i].checked) {
        option = options[i].id;
        break;
      }
    }
    return option;
  };

  //displaying the first question when quiz starts

  var x = 0;
  var score = 0;

  var ques = questionDB[x].question;
  askedquestion.innerHTML = ques;
  var ans = questionDB[x].answers;
  optionA.innerHTML = ans.a;
  optionB.innerHTML = ans.b;
  optionC.innerHTML = ans.c;
  optionD.innerHTML = ans.d;

  //Giving msg that quiz has been submitted on clicking submit button.
  btnsubmit.addEventListener("click", () => {
    for (i = 0; i < questionDB.length; i++) {
      if (questionDB[i].selectedAnswer == questionDB[i].correctAnswer) {
        console.log(
          "Correct " +
            questionDB[i].correctAnswer +
            "   " +
            questionDB[i].selectedAnswer +
            " " +
            questionDB[i]
        );
        score += 1;
      } else {
        console.log(
          "wrong " +
            questionDB[i].correctAnswer +
            "   " +
            questionDB[i].selectedAnswer +
            " " +
            questionDB[i]
        );
      }
    }
    content.innerHTML =
      `Your quiz has been submitted successfully!👍
    
    SCORE : ` + score;
    content.classList.add("submitted");
  });

  btnnext.addEventListener("click", () => {
    x += 1;
    if (x >= 10) {
      x = 0;
      ques = questionDB[x].question;
      questionDB[x].selectedAnswer = getCheckAnswer();
      console.log(questionDB[x].selectedAnswer);
      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;

      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    } else {
      ques = questionDB[x].question;
      questionDB[x].selectedAnswer = getCheckAnswer();
      console.log(questionDB[x].selectedAnswer);
      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;

      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;

      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    }

    //checking id answer is correct or not.
  });
  btnprevious.addEventListener("click", () => {
    if (x == 0) {
      x = 9;
      ques = questionDB[x].question;
      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;
      optionA.innerHTML = ans.a;
      
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
      questionDB[x].selectedAnswer = getCheckAnswer();
      console.log(questionDB[x].selectedAnswer);
    } else {
      x = x - 1;
      ques = questionDB[x].question;

      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;
      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
      questionDB[x].selectedAnswer = getCheckAnswer();
      console.log(questionDB[x].selectedAnswer);
    }
  });
}
function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  var id = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      //   timer = duration;
      clearInterval(id);
      display.textContent = "00:00";
      quiz.innerHTML = `Times UP!!⌛`;
      quiz.classList.add("finished");
    }
  }, 1000);
  // if(timer<0){
  //     console.log("hi")
  // }
}

startbutton.onclick = function () {
  startbutton.disabled = true;
  var tenMinutes = 60 * 10;
  display = document.querySelector("#time");
  var x = startTimer(tenMinutes, display);
  start();
};




