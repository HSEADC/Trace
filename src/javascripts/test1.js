console.log("learn-tests loaded");

const root = document.getElementById("ecoBusinessTest");

if (!root) {
  console.warn("ecoBusinessTest not found");
} else {
  const currentLessonId = Number(root.dataset.lessonId || 2);

  const lessons = {
    1: {
      lessonNumber: "1 урок",
      duration: "3 мин",
      coverTitle: "Псс...это эко-бизнес,<br />хочешь заработать?",
      coverImage: "../img/learn/A-Cover-Lesson-1.png",
      nextLessonUrl: "./lesson-2.html",
      passScore: 1,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "ЧТО ТАКОЕ ЭКО-БИЗНЕС",
            "НА ЧЕМ ЗАРАБАТЫВАЮТ В «ЗЕЛЕНОМ БИЗНЕСЕ»",
            "РИСКИ И ВОЗМОЖНОСТИ",
            "ГЛАВНЫЙ СЕКРЕТ УСПЕХА",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес — это бизнес, который зарабатывает на решении экологических проблем.
              </p>
              <p class="A-TestTextParagraph">
                Деньги здесь делают на переработке отходов, чистой энергии, новых материалах и экологичных технологиях.
              </p>
              <p class="A-TestTextParagraph">
                Да, вход может быть дорогим, но спрос на такие решения растёт, а рынок становится сильнее.
              </p>
              <p class="A-TestTextParagraph">
                Выигрывает тот, кто быстрее находит полезное решение и умеет превратить его в устойчивый продукт.
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "НА ЧЕМ ЗАРАБАТЫВАЕТ «ЗЕЛЁНЫЙ БИЗНЕС»?",
          text: "",
          answers: [
            { text: "НА ЗЕЛЁНКЕ", correct: false },
            {
              text: "НА РАЗВИТИИ ЭКО-ТЕХНОЛОГИЙ И ПЕРЕРАБОТКЕ",
              correct: true,
            },
            { text: "НА ЗАГРЯЗНЕНИИ ВОДОХРАНИЛИЩ", correct: false },
            { text: "НА СЖИГАНИИ ПОЛЕЗНЫХ РЕСУРСОВ", correct: false },
          ],
        },
      ],
    },

    2: {
      lessonNumber: "2 урок",
      duration: "3 мин",
      coverTitle: "Псс...это эко-бизнес,<br />хочешь заработать?",
      coverImage: "../img/learn/A-Finger-Img.png",
      nextLessonUrl: "./lesson-3.html",
      passScore: 1,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "ЧТО ТАКОЕ ЭКО-БИЗНЕС",
            "НА ЧЕМ ЗАРАБАТЫВАЮТ В «ЗЕЛЕНОМ БИЗНЕСЕ»",
            "РИСКИ И ВОЗМОЖНОСТИ",
            "ГЛАВНЫЙ СЕКРЕТ УСПЕХА",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес — такая штука модная, прибыльная, направлена на решение
                экологических проблем. Из чего здесь можно сделать деньги?
                переработка отходов, чистая энергия, кредиты карбоновые, эко-материалы.
              </p>
              <p class="A-TestTextParagraph">
                Однако стартануть дорого, законы в странах разные и проч. и проч.),
                все же спрос на такое у потребителя растёт да ещё господдержка,
                рынок развивается.
              </p>
              <p class="A-TestTextParagraph">
                Например, знаешь, углеродный след сегодня продают, кожа из грибов
                и вечный пластик уже существуют.
              </p>
              <p class="A-TestTextParagraph">
                В общем, тут главное скорость и ум, кто быстрее научится делать
                дорогое из мусора, у того все будет на мази!
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "НА ЧЕМ ЗАРАБАТЫВАЕТ «ЗЕЛЁНЫЙ БИЗНЕС»?",
          text: "",
          answers: [
            { text: "НА ЗЕЛЁНКЕ", correct: false },
            { text: "НА РАЗВИТИИ ТЕХНОЛОГИЙ", correct: false },
            { text: "НА ЗАГРЯЗНЕНИИ ВОДОХРАНИЛИЩ", correct: false },
            { text: "НА ПЕРЕРАБОТКЕ ОТХОДОВ", correct: true },
          ],
        },
      ],
    },

    3: {
      lessonNumber: "3 урок",
      duration: "4 мин",
      coverTitle: "А РИСКИ ВООБЩЕ ЕСТЬ?<br />ИЛИ ТОЛЬКО ДЕНЬГИ?",
      coverImage: "../img/learn/A-Cover-Lesson-3.png",
      nextLessonUrl: "./lesson-4.html",
      passScore: 1,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "ПОЧЕМУ ЭКО-БИЗНЕС МОЖЕТ БЫТЬ СЛОЖНЫМ",
            "КАКИЕ ЕСТЬ ФИНАНСОВЫЕ РИСКИ",
            "ПОЧЕМУ ВАЖНЫ ТЕХНОЛОГИИ И ЛОГИСТИКА",
            "КАК СНИЖАТЬ РИСКИ НА СТАРТЕ",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                У эко-бизнеса есть не только возможности, но и риски: дорогой запуск,
                сложная логистика и зависимость от технологий.
              </p>
              <p class="A-TestTextParagraph">
                Иногда идея хорошая, но без поставщиков, переработки и понятной экономики
                она быстро ломается.
              </p>
              <p class="A-TestTextParagraph">
                Поэтому важно заранее считать расходы, тестировать спрос и начинать
                с модели попроще.
              </p>
              <p class="A-TestTextParagraph">
                Самый устойчивый путь — запускать не «идею мечты», а решение,
                которое реально можно собрать и продать.
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "ЧТО ИЗ ЭТОГО МОЖНО СЧИТАТЬ РИСКОМ ДЛЯ ЭКО-БИЗНЕСА?",
          text: "",
          answers: [
            { text: "ПОНЯТНАЯ ЭКОНОМИКА ПРОЕКТА", correct: false },
            { text: "СТАБИЛЬНЫЙ СПРОС", correct: false },
            { text: "ДОРОГОЙ ЗАПУСК И СЛОЖНАЯ ЛОГИСТИКА", correct: true },
            { text: "ГОТОВАЯ ИНФРАСТРУКТУРА", correct: false },
          ],
        },
      ],
    },

    4: {
      lessonNumber: "4 урок",
      duration: "4 мин",
      coverTitle: "ЧТО БУДЕТ ДАЛЬШЕ:<br />БУДУЩЕЕ ЭКО-БИЗНЕСА",
      coverImage: "../img/learn/A-Cover-Lesson-4.png",
      nextLessonUrl: "./lesson-5.html",
      passScore: 1,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "КАК МЕНЯЕТСЯ ЭКО-РЫНОК",
            "КАКИЕ ПРОДУКТЫ БУДУТ РАСТИ",
            "ПОЧЕМУ ВАЖНЫ НОВЫЕ МАТЕРИАЛЫ",
            "КТО БУДЕТ ВЫИГРЫВАТЬ В БУДУЩЕМ",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес будет расти там, где экологичность соединяется с удобством,
                ценой и понятной пользой для человека.
              </p>
              <p class="A-TestTextParagraph">
                Будут усиливаться переработка, новые материалы, ремонт,
                повторное использование и сервисы снижения отходов.
              </p>
              <p class="A-TestTextParagraph">
                Выиграют не просто «зелёные» проекты, а те, кто умеет делать
                экологичное решение массовым и выгодным.
              </p>
              <p class="A-TestTextParagraph">
                Будущее — за теми, кто превращает экологию не в лозунг,
                а в работающую систему.
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "КТО БУДЕТ ВЫИГРЫВАТЬ В БУДУЩЕМ ЭКО-БИЗНЕСА?",
          text: "",
          answers: [
            {
              text: "ТЕ, КТО ДЕЛАЕТ ЭКОЛОГИЧНОЕ РЕШЕНИЕ УДОБНЫМ И МАССОВЫМ",
              correct: true,
            },
            { text: "ТЕ, КТО ИГНОРИРУЕТ СПРОС", correct: false },
            { text: "ТЕ, КТО ДЕЛАЕТ ДОРОГО И НЕПОНЯТНО", correct: false },
            { text: "ТЕ, КТО НЕ УЧИТЫВАЕТ ПОЛЬЗУ ДЛЯ ЛЮДЕЙ", correct: false },
          ],
        },
      ],
    },
  };

  const lesson = lessons[currentLessonId] || lessons[2];
  const stages = lesson.stages;

  const coverScreen = document.getElementById("coverScreen");
  const testCard = document.getElementById("testCard");
  const winCard = document.getElementById("winCard");
  const loseCard = document.getElementById("loseCard");

  const coverTitle = document.getElementById("coverTitle");
  const coverLessonNumber = document.getElementById("coverLessonNumber");
  const coverDuration = document.getElementById("coverDuration");
  const coverImage = document.getElementById("coverImage");

  const startTestBtn = document.getElementById("startTestBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const restartBtn = document.getElementById("restartBtn");
  const continueBtn = document.getElementById("continueBtn");

  const testLabel = document.getElementById("testLabel");
  const testQuestion = document.getElementById("testQuestion");
  const testText = document.getElementById("testText");
  const learnList = document.getElementById("learnList");
  const answersRoot = document.getElementById("answers");
  const progressLine = document.getElementById("testProgressLine");

  const awardSlots = root.querySelectorAll(".M-AwardSlot");

  let step = 0;
  let score = 0;
  let started = false;
  const picks = stages.map(() => null);

  initLesson();
  setInitialState();

  startTestBtn?.addEventListener("click", () => {
    started = true;
    step = 0;

    coverScreen.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");
    testCard.classList.remove("isHidden");

    updateAwardState();
    renderStep();
  });

  prevBtn?.addEventListener("click", () => {
    if (step === 0) return;
    step -= 1;
    renderStep();
  });

  nextBtn?.addEventListener("click", () => {
    const stage = stages[step];

    if (stage.type === "quiz" && picks[step] === null) return;

    if (step < stages.length - 1) {
      step += 1;
      renderStep();
    } else {
      showResult();
    }
  });

  restartBtn?.addEventListener("click", () => {
    resetTest();
    started = true;

    coverScreen.classList.add("isHidden");
    loseCard.classList.add("isHidden");
    winCard.classList.add("isHidden");
    testCard.classList.remove("isHidden");

    updateAwardState();
    renderStep();
  });

  continueBtn?.addEventListener("click", () => {
    window.location.href = lesson.nextLessonUrl;
  });

  function initLesson() {
    coverTitle.innerHTML = lesson.coverTitle;
    coverLessonNumber.textContent = lesson.lessonNumber;
    coverDuration.textContent = lesson.duration;
    coverImage.src = lesson.coverImage;

    awardSlots.forEach((slot) => {
      const idx = Number(slot.dataset.awardIndex);
      const img = slot.querySelector(".A-Award-Img");

      slot.classList.remove("isCurrent", "isCompleted");

      if (img?.dataset.default) {
        img.src = img.dataset.default;
      }

      if (idx < currentLessonId && img?.dataset.complete) {
        img.src = img.dataset.complete;
        slot.classList.add("isCompleted");
      }
    });
  }

  function setInitialState() {
    coverScreen.classList.remove("isHidden");
    testCard.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");
    progressLine.style.width = "0%";
    updateAwardState();
  }

  function resetTest() {
    step = 0;
    score = 0;

    for (let i = 0; i < picks.length; i++) {
      picks[i] = null;
    }

    const currentAwardImg = root.querySelector(
      `[data-award-index="${currentLessonId}"] .A-Award-Img`,
    );

    const currentAwardSlot = root.querySelector(
      `[data-award-index="${currentLessonId}"]`,
    );

    if (currentAwardImg?.dataset.default) {
      currentAwardImg.src = currentAwardImg.dataset.default;
    }

    currentAwardSlot?.classList.remove("isCompleted");
  }

  function renderStep() {
    const stage = stages[step];

    testLabel.textContent = stage.label || "";
    testQuestion.textContent = stage.question || "";
    testText.innerHTML = stage.text || "";

    learnList.innerHTML = "";
    answersRoot.innerHTML = "";

    learnList.classList.add("isHidden");
    answersRoot.classList.add("isHidden");

    if (stage.type === "learn-list") {
      learnList.classList.remove("isHidden");

      stage.items.forEach((item) => {
        const row = document.createElement("div");
        row.className = "M-TestLearnRow";

        const icon = document.createElement("img");
        icon.className = "A-TestLeafIcon";
        icon.src = "../img/learn/A-Leaf-Icon.svg";
        icon.alt = "";

        const text = document.createElement("div");
        text.className = "A-TestLearnText";
        text.textContent = item;

        row.appendChild(icon);
        row.appendChild(text);
        learnList.appendChild(row);
      });
    }

    if (stage.type === "quiz") {
      answersRoot.classList.remove("isHidden");

      stage.answers.forEach((ans, idx) => {
        const row = document.createElement("label");
        row.className = "M-TestAnswer";

        const fake = document.createElement("span");
        fake.className = "A-TestBox";

        const text = document.createElement("span");
        text.className = "A-TestAnswerText";
        text.textContent = ans.text;

        if (picks[step] === idx) {
          row.classList.add("isActive");
        }

        row.addEventListener("click", () => {
          picks[step] = idx;
          renderStep();
        });

        row.appendChild(fake);
        row.appendChild(text);
        answersRoot.appendChild(row);
      });
    }

    prevBtn.disabled = step === 0;
    nextBtn.disabled = stage.type === "quiz" ? picks[step] === null : false;

    updateProgress();
    updateAwardState();
  }

  function updateProgress() {
    const percent = ((step + 1) / stages.length) * 100;
    progressLine.style.width = `${percent}%`;
  }

  function updateAwardState() {
    awardSlots.forEach((slot) => slot.classList.remove("isCurrent"));

    if (started) {
      const currentSlot = root.querySelector(
        `[data-award-index="${currentLessonId}"]`,
      );
      currentSlot?.classList.add("isCurrent");
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

    testCard.classList.add("isHidden");

    const currentAwardImg = root.querySelector(
      `[data-award-index="${currentLessonId}"] .A-Award-Img`,
    );
    const currentAwardSlot = root.querySelector(
      `[data-award-index="${currentLessonId}"]`,
    );

    currentAwardSlot?.classList.remove("isCurrent");

    if (score >= lesson.passScore) {
      if (currentAwardImg?.dataset.complete) {
        currentAwardImg.src = currentAwardImg.dataset.complete;
      }
      currentAwardSlot?.classList.add("isCompleted");
      winCard.classList.remove("isHidden");
      loseCard.classList.add("isHidden");
    } else {
      if (currentAwardImg?.dataset.default) {
        currentAwardImg.src = currentAwardImg.dataset.default;
      }
      currentAwardSlot?.classList.remove("isCompleted");
      loseCard.classList.remove("isHidden");
      winCard.classList.add("isHidden");
    }
  }
}
