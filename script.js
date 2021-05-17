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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
  },
  {
    question: "Q6: Your Question is Here",
    answers: { a: "Option 1", b: "option 2", c: "option 3", d: "option 4" },
    correctAnswer: "b",
    selectedAnswer: null,
    review: false,
    visited: false,
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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
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
    review: false,
    visited: false,
  },
  {
    question:
      "Q10: It is a paragraph type question you  need to read the paragraph and answer the question.<br>\
      There was a girl name Jenny in the New York City.She lives their with her parents.<br>\
      1. Lorem ipsum dolor sit amet consectetur.<br> \
      2. Adipisicing elit. Eius fugiat natus necessitatibus.<br>\
      3. Consequuntur placeat harum quas ex non impedit.<br>\
      4. Doloribus iusto maxime sunt voluptates quam.<br>\
     What was the name of girl?",
    answers: {
      a: "Jennifer",
      b: "Phoebs",
      c: "Joey",
      d: "Jenny",
    },
    correctAnswer: "d",
    selectedAnswer: null,
    review: false,
    visited: false,
  },
];
const startbutton = document.getElementById("startbutton");
const timer = document.getElementById("timer");
const quiz = document.getElementById("quiz");
const listyle = document.getElementsByClassName("li-style");

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
  const clearresponse = document.getElementById("clear-response");
  const reviewmark = document.getElementById("review");
  // const container = document.getElementsByClassName("container");

  //displaying the mark as review and clear Response button when start button(quiz has started) has clickeoptionD.
  checkbox.style.display = "flex";
  checkbox.style.justifyContent = "space-between";

  for (i = 0; i < 4; i++) {
    options[i].disabled = false;
  }
  for (i = 0; i < 10; i++) {
    listyle[i].style.backgroundColor = "#b3c0a4";
  }
  listyle[0].style.backgroundColor = "#DCFFFD";

  function savingResponse(x, value) {
    questionDB[x].selectedAnswer = value;
  }

  function clearalldata() {
    options[0].checked = false;
    options[1].checked = false;
    options[2].checked = false;
    options[3].checked = false;
  }

  function settingRadiobuttons(x) {
    if (questionDB[x].selectedAnswer != null) {
      var answer = questionDB[x].selectedAnswer;
      if (answer == "a") {
        options[0].checked = true;
      }
      if (answer == "b") {
        options[1].checked = true;
      }
      if (answer == "c") {
        options[2].checked = true;
      }
      if (answer == "d") {
        options[3].checked = true;
      }
    } else {
      clearalldata();
    }
  }

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

  //clearing the answer of particular question when user click clear Response button
  clearresponse.addEventListener("click", () => {
    clearalldata();
  });

  //Giving msg that quiz has been submitted on clicking submit button.
  btnsubmit.addEventListener("click", () => {
    for (i = 0; i < questionDB.length; i++) {
      if (questionDB[i].selectedAnswer == questionDB[i].correctAnswer) {
        score += 1;
      }
      // else{
      //   console.log(questionDB[i] + "=>"+ "c -> "+ questionDB[i].correctAnswer +"  y-> "+questionDB[i].selectedAnswer)
      // }
    }
    content.innerHTML =
      `Your quiz has been submitted successfully!👍
    
    SCORE : ` + score;
    content.classList.add("submitted");
  });

  function setcolor(x) {
    console.log(questionDB[x].selectedAnswer, questionDB[x].visited);
    //not visited
    // if (
    //   questionDB[x].selectedAnswer === null &&
    //   questionDB[x].visited === false
    // ) {
    //   listyle[x].style.backgroundColor = "#b3c0a4"; //grey
    // }
    //not answered
    //markforreview
    if (questionDB[x].review === true) {
      listyle[x].style.backgroundColor = "#B7C3F3"; //blue
    }
    else if (
      questionDB[x].selectedAnswer == null &&
      questionDB[x].visited === true
    ) {
      listyle[x].style.backgroundColor = "#63D471"; //green
    }

    //answered
    else if (
      questionDB[x].selectedAnswer !== null &&
      questionDB[x].visited === true
    ) {
      listyle[x].style.backgroundColor = "#F0544F"; //red
    }

    
  }

  function checkCheckbox(x) {
    // console.log(questionDB[x].review, x);

    if (questionDB[x].review == false) {
      reviewmark.checked = false;
    } else {
      reviewmark.checked = true;
    }
  }

  function setReview(x) {
    //  console.log(reviewmark.checked, x);
    if (reviewmark.checked == true) {
      questionDB[x].review = true;
    } else {
      questionDB[x].review = false;
    }
  }
  setcolor(1);

  listyle[0].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    //checkCheckbox(x);
    ques = questionDB[0].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[0].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 0;
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
    // setReview(x);

    settingRadiobuttons(x);
    checkCheckbox(x);
  });
  listyle[1].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    // checkCheckbox(x);
    ques = questionDB[1].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[1].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 1;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
    // setReview(x);
  });
  listyle[2].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }

    setcolor(x);
    //checkCheckbox(x);
    ques = questionDB[2].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[2].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 2;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
    // setReview(x);
  });
  listyle[3].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    //checkCheckbox(x);
    ques = questionDB[3].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[3].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 3;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
    // setReview(x);
  });
  listyle[4].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    // checkCheckbox(x);
    ques = questionDB[4].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[4].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 4;
    settingRadiobuttons(x);
    // setReview(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
  });
  listyle[5].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    //checkCheckbox(x);
    ques = questionDB[5].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[5].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 5;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
  });
  listyle[6].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    // checkCheckbox(x);
    ques = questionDB[6].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[6].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 6;
    settingRadiobuttons(x);
    // setReview(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
  });
  listyle[7].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    // checkCheckbox(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    ques = questionDB[7].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[7].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 7;
    settingRadiobuttons(x);
    checkCheckbox(x);
    // setReview(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
  });
  listyle[8].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    ques = questionDB[8].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[8].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 8;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD";
  });
  listyle[9].addEventListener("click", () => {
    value = getCheckAnswer();
    savingResponse(x, value);
    settingRadiobuttons(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);
    ques = questionDB[9].question;
    askedquestion.innerHTML = ques;
    ans = questionDB[9].answers;
    optionA.innerHTML = ans.a;
    optionB.innerHTML = ans.b;
    optionC.innerHTML = ans.c;
    optionD.innerHTML = ans.d;
    x = 9;
    settingRadiobuttons(x);
    checkCheckbox(x);
    //current
    listyle[x].style.backgroundColor = "#DCFFFD"; //light-blue

    //  setReview(x);
  });

  reviewmark.addEventListener("click", () => {
    setReview(x);
    setcolor(x);
  });

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

  btnnext.addEventListener("click", () => {
    selectedId = getCheckAnswer();
    savingResponse(x, selectedId);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }

    setcolor(x);
    //settingRadiobuttons(x)

    x += 1;

    if (x >= 10) {
      x = 0;
      ques = questionDB[x].question;
      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;

      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    } else {
      ques = questionDB[x].question;

      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;

      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    }

    settingRadiobuttons(x);
    checkCheckbox(x);
    listyle[x].style.backgroundColor = "#DCFFFD";

    //setReview(x);

    //checking id answer is correct or not.
  });
  btnprevious.addEventListener("click", () => {
    savingResponse(x, getCheckAnswer());
    settingRadiobuttons(x);
    // checkCheckbox(x);
    if (questionDB[x].selectedAnswer !== null) {
      questionDB[x].visited = true;
    }
    setcolor(x);

    if (x == 0) {
      x = 9;

      ques = questionDB[x].question;
      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;
      optionA.innerHTML = ans.a;

      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    } else {
      x = x - 1;
      ques = questionDB[x].question;

      askedquestion.innerHTML = ques;
      ans = questionDB[x].answers;
      optionA.innerHTML = ans.a;
      optionB.innerHTML = ans.b;
      optionC.innerHTML = ans.c;
      optionD.innerHTML = ans.d;
    }

    settingRadiobuttons(x);
    checkCheckbox(x);
    listyle[x].style.backgroundColor = "#DCFFFD";

    // setReview(x);
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
}

startbutton.onclick = function () {
  startbutton.disabled = true;
  var tenMinutes = 60 * 10;
  display = document.querySelector("#time");
  var x = startTimer(tenMinutes, display);
  start();
};

for (i = 0; i < listyle.length; i++) {
  listyle[i].style.backgroundColor = "#f7dad9";
  listyle[i].style.textColor = "black";
}
