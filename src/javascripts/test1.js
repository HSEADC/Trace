console.log("tests-trace loaded");

const stages = [
  {
    type: "learn",
    label: "ЧТО ВЫ УЗНАЕТЕ",
    question: "",
    answers: [
      { text: "ГДЕ ПРИНИМАЮТ КРЫШКИ ЗА ДЕНЬГИ", correct: false },
      { text: "КАК СОБРАТЬ И ХРАНИТЬ МНОГО КРЫШЕК", correct: false },
      { text: "СКОЛЬКО ДЕЙСТВИТЕЛЬНО МОЖНО ЗАРАБОТАТЬ", correct: false },
    ],
  },
  {
    type: "quiz",
    label: "ПРОВЕРЬ СЕБЯ",
    question: "ГДЕ ВЫГОДНЕЕ СДАВАТЬ ПЛАСТИКОВЫЕ КРЫШКИ?",
    answers: [
      { text: "В ПУНКТ «ПЯТЕРОЧКА»", correct: false },
      { text: "В ПУНКТ «ПЕРЕКРЕСТОК»", correct: false },
      { text: "В ПУНКТ «ВКУСВИЛЛ»", correct: true },
      { text: "В ПУНКТ «МАГНИТ»", correct: false },
    ],
  },
];

const results = [
  {
    min: 1,
    header: "Отлично!",
    text: "Ты хорошо разобрался(лась). Попробуй другие тесты или почитай статьи.",
  },
  {
    min: 0,
    header: "Можно лучше",
    text: "Почитай статьи и попробуй снова — будет проще и быстрее.",
  },
];

const testCard = document.getElementById("testCard");
const resultCard = document.getElementById("resultCard");

const testLabel = document.getElementById("testLabel");
const testQuestion = document.getElementById("testQuestion");
const answersRoot = document.getElementById("answers");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const resultHeader = document.getElementById("resultHeader");
const resultText = document.getElementById("resultText");
const restartBtn = document.getElementById("restartBtn");

let step = 0;
let score = 0;

const picks = stages.map(() => null);

renderStep();

// events
prevBtn.addEventListener("click", () => {
  if (step === 0) return;
  step -= 1;
  renderStep();
});

nextBtn.addEventListener("click", () => {
  if (stages[step].type === "quiz" && picks[step] === null) return;

  if (step < stages.length - 1) {
    step += 1;
    renderStep();
  } else {
    showResult();
  }
});

restartBtn?.addEventListener("click", () => {
  step = 0;
  score = 0;
  for (let i = 0; i < picks.length; i++) picks[i] = null;

  resultCard.classList.add("isHidden");
  testCard.classList.remove("isHidden");
  renderStep();
});

function renderStep() {
  const stage = stages[step];

  testLabel.textContent = stage.label;

  testQuestion.textContent = stage.question || "";

  answersRoot.innerHTML = "";
  stage.answers.forEach((ans, idx) => {
    const row = document.createElement("label");
    row.className = "M_TestAnswer";

    const fake = document.createElement("span");
    fake.className = "A_TestBox";

    const text = document.createElement("span");
    text.className = "A_TestAnswerText";
    text.textContent = ans.text;

    if (picks[step] === idx) row.classList.add("isActive");

    row.addEventListener("click", () => {
      picks[step] = idx;

      renderStep();
    });

    row.appendChild(fake);
    row.appendChild(text);

    answersRoot.appendChild(row);
  });

  prevBtn.disabled = step === 0;

  if (stage.type === "quiz") {
    nextBtn.disabled = picks[step] === null;
  } else {
    nextBtn.disabled = false;
  }
}

function showResult() {
  score = 0;

  stages.forEach((stage, i) => {
    if (stage.type !== "quiz") return;
    const pick = picks[i];
    if (pick === null) return;
    if (stage.answers[pick]?.correct) score += 1;
  });

  const r = results.find((x) => score >= x.min) || results[results.length - 1];

  resultHeader.textContent = r.header;
  resultText.textContent = r.text;

  testCard.classList.add("isHidden");
  resultCard.classList.remove("isHidden");
}
