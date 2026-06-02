console.log("learn-tests loaded");

const root = document.getElementById("ecoBusinessTest");

if (!root) {
  console.warn("ecoBusinessTest not found");
} else {
  const initialLessonId = Number(root.dataset.lessonId || 1);

  const lessons = [
    {
      id: 1,
      lessonNumber: "1 урок",
      duration: "3 мин",
      coverTitle: "Псс...это эко-бизнес,<br />хочешь заработать?",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-base",
          alt: "База с цветами",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-wallet.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-wallet",
          alt: "Кошелёк",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson1-flowers-rubles.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson1-rubles",
          alt: "Рубли",
        },
      ],
      passScore: 1,
      passed: false,
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

    {
      id: 2,
      lessonNumber: "2 урок",
      duration: "5 мин",
      coverTitle: "Как поднять денег на «зелёных» темках",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson2-phone-bg.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson2-bg",
          alt: "Фон телефона",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson2-phone-hand.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson2-phone",
          alt: "Телефон в руке",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Где принимают крышки за деньги",
            "Как собрать и хранить много крышек",
            "Сколько действительно можно заработать",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Поставь коробку под раковиной дома, в офисе/университете и дай пакет друзьям.
                за неделю собери 400 пластиковых крышек, а за два месяца — 3200.
                промой и высуши крышки. Рекомендую сдавать во «Вкусвилл» (1 ₽/крышка),
                в «пятёрочке» (0.5 ₽/крышка), в магните не принимают
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "Где выгоднее сдавать пластиковые крышки?",
          text: "",
          answers: [
            { text: "В пункт «пятёрочка»", correct: false },
            { text: "В пункт «Перекрёсток»", correct: false },
            { text: "В пункт «Вкусвилл»", correct: true },
            { text: "В пункт «магнит»", correct: false },
          ],
        },
      ],
    },

    {
      id: 3,
      lessonNumber: "3 урок",
      duration: "4 мин",
      coverTitle: "эй, Fashion killer, убьём твою бедность?",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson3-man-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson3-base",
          alt: "Мужик",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson3-man-hand.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson3-hand",
          alt: "Рука",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Как правильно устроить фэшн-геноцид",
            "Какие выложить фотографии, чтобы получить деньги",
            "Сколько можно заработать на фэшн-революции",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Проведи геноцид секонд-хенда, отбери брендовую одежду. Дальше постирай,
                отпарь, организуй фэшн-фотосессию, щёлкни лицевую, заднюю сторону вещи,
                бирку. размести своё объявление на авито.
              </p>
              <p class="A-TestTextParagraph">
                Рекомендация: напиши бренд, размер, состояние причину продажи и цену с торгом
                (Только подними сумму на 15–20%) и жди. Если продать позицию в среднем
                за 1 500 ₽ (без наценки), то за 10 вещей выручишь 10 000 ₽ чистыми
                (на закупку и доставку 5 000 ₽)
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "СКОЛЬКО МОЖНО ВЫРУЧИТЬ С ОДНОЙ ВЕЩИ С НАЦЕНКОЙ 10%?",
          text: "",
          answers: [
            { text: "1 000 ₽", correct: false },
            { text: "820 ₽", correct: false },
            { text: "1 650 ₽", correct: true },
            { text: "1 500 ₽", correct: false },
          ],
        },
      ],
    },

    {
      id: 4,
      lessonNumber: "4 урок",
      duration: "4 мин",
      coverTitle: "Пластик. Жизнь. смерть и воскрешение",
      coverLayers: [
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson4-grave-base.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson4-base",
          alt: "Надгробие",
        },
        {
          src: "https://github.com/HSEADC/Trace/blob/main/src/img/learn/Q-lesson4-branch.png?raw=true",
          className: "A-CoverLayer A-CoverLayer--lesson4-branch",
          alt: "Ветка",
        },
      ],
      passScore: 1,
      passed: false,
      stages: [
        {
          type: "learn-list",
          label: "ЧТО ВЫ УЗНАЕТЕ",
          question: "",
          text: "",
          items: [
            "Что такое эко-бизнес будущего",
            "Лидирующий участник «зеленого рынка» и его стратегия",
            "Показатели и перспективы развития",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: `
            <div class="M-TestTextContent">
              <p class="A-TestTextParagraph">
                Эко-бизнес будущего — это бизнес высоких технологий, яркий пример — CARBIOS. Компания
                изобрела фермент, расщепляющий пластик на мономеры, из которых
                можно сделать новый пластик. Зарабатывает на лицензизиировании
                своей технологии и сотрудничестве.
                Выручка компании составляет около 519 тыс. евро. Сейчас carbios успешно
                запускает заводы и масштабируется, К 2030 прогнозируется рост «зеленого
                рынка» до 1,2 млрд €, где компания займёт лидирующую позицию
              </p>
            </div>
          `,
        },
        {
          type: "quiz",
          label: "ПРОВЕРЬ СЕБЯ",
          question: "В чем суть «вечной переработки» carbios?",
          text: "",
          answers: [
            {
              text: "Пластик растирают в порошок, нагревают, из полученного вещества делают новый",
              correct: false,
            },
            {
              text: "ферменты расщепляют пластик, из которых можно синтезировать новый",
              correct: true,
            },
            {
              text: "Пластик сжигают, и делают биомассу для производства",
              correct: false,
            },
          ],
        },
      ],
    },
  ];

  const extraLessonsCount = 20;
  const extraLessonTemplate = lessons[0];

  function createTextContent(paragraphs) {
    return `
      <div class="M-TestTextContent">
        ${paragraphs
          .map(
            (paragraph) => `
              <p class="A-TestTextParagraph">${paragraph}</p>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const customLessonOverrides = {
    5: {
      duration: "6 мин",
      coverTitle: "Гринвошинг:<br />как промыть голову зелёным?",
      coverLayers: [],
      stages: [
        {
          type: "learn-list",
          label: "Что вы узнаете",
          question: "",
          text: "",
          items: [
            "Что такое гринвошинг",
            "Как распознать грин-воздуханство?",
            "Приемы зеленого камуфляжа",
            "В чем виновна компания Volkswagen",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: createTextContent([
            "Гринвошинг — это бизнес-воздуханство, когда компания тратит деньги на рекламу своей экологичности, а не на реальное устранение вреда природе.",
            "Обычно могут покрасить упаковку в зеленый цвет, наклеить неопознанные сертификаты, написать размыто о незначительных эко-улучшениях в производстве.",
            "Показателен уголовный пример компании Volkswagen. Машины рекламировались как «Clean Diesel», но в них был встроен код-обманка, скрывающий на тестах выброс оксида азота, превышающий норму в 40 раз.",
            "Что по итогу? После разоблачения агентством США EPA компания понесла штрафы в 30 млрд $, менеджеры и инженеры присели на нары.",
          ]),
        },
        {
          type: "quiz",
          label: "Проверь себя",
          question: "Что такое гринвошинг?",
          text: "",
          answers: [
            {
              text: "Упаковка зеленого цвета, листики, капельки и непонятный сертификат вместо реальных действий",
              correct: true,
            },
            { text: "Цена неоправдано высокая", correct: false },
            { text: "Из открытой упаковки дует", correct: false },
            { text: "Последствия разоблачения", correct: false },
          ],
        },
      ],
    },
    6: {
      duration: "6 мин",
      coverTitle: "3 чит-кода,<br />и ты хакнешь собственное тело",
      coverLayers: [],
      stages: [
        {
          type: "learn-list",
          label: "Что вы узнаете",
          question: "",
          text: "",
          items: [
            "Что такое эко-биохакинг",
            "Что бы сделал настоящий эко-биохакер?",
            "Сейчас будем приземляться",
            "Правило «холодрыыггаа»",
          ],
        },
        {
          type: "learn-text",
          label: "",
          question: "",
          text: createTextContent([
            "Эко-биохакинг — это взлом организма для максимальной энергии и долголетия без вреда для природы.",
            "Рекомендую начать с правила «заземления». Как проснешься, 10–20 минут пройдись босиком по траве, земле или песку, чтобы улучшить кровоток.",
            "Также ты можешь в течение 30–60 секунд поднимать ледяную воду от стоп к ногам, а затем к спине — это укрепит иммунитет.",
            "В завершение дня откажись от гаджетов и искусственного света после 21:00. Будешь спать как младенец. Надеемся, наши советы помогут обрести энергию и сохранить фокус в течение дня.",
          ]),
        },
        {
          type: "quiz",
          label: "Проверь себя",
          question: "Что бы сделал настоящий эко-биохакер?",
          text: "",
          answers: [
            { text: "Прошелся в шлепках по траве", correct: false },
            {
              text: "Помылся теплой водой, в конце 30–60 секунд ледяной",
              correct: true,
            },
            { text: "Отказался от гаджетов после полуночи", correct: false },
            { text: "Циркадный детокс отложил на выходные", correct: false },
          ],
        },
      ],
    },
  };

  function cloneLesson(source, id) {
    const lesson = {
      ...source,
      id,
      lessonNumber: `${id} урок`,
      coverTitle: `Новый урок ${id}<br />скоро настроим отдельно`,
      coverLayers: source.coverLayers.map((layer) => ({ ...layer })),
      stages: source.stages.map((stage) => ({
        ...stage,
        items: stage.items ? [...stage.items] : undefined,
        answers: stage.answers
          ? stage.answers.map((answer) => ({ ...answer }))
          : undefined,
      })),
      passed: false,
    };

    const override = customLessonOverrides[id];

    if (!override) return lesson;

    return {
      ...lesson,
      ...override,
      lessonNumber: `${id} урок`,
      passed: false,
    };
  }

  for (let i = 0; i < extraLessonsCount; i += 1) {
    const nextId = lessons.length + 1;
    lessons.push(cloneLesson(extraLessonTemplate, nextId));
  }

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

  const awardsRoot = root.querySelector(".W-Card-Swipe-Left");
  const awardPlaceholderDefault =
    "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Award-Zelenka-disable.png?raw=true";
  const awardPlaceholderComplete =
    "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Award-Zelenka-active.png?raw=true";

  function createAwardSlot(index) {
    const slot = document.createElement("div");
    slot.className = "M-AwardSlot";
    slot.dataset.awardIndex = String(index);

    const line = document.createElement("div");
    line.className = "A-Award-Line";

    const img = document.createElement("img");
    img.className = "A-Award-Img";
    img.id = `awardImg${index}`;
    img.src = awardPlaceholderDefault;
    img.alt = `Медаль урока ${index}`;
    img.dataset.default = awardPlaceholderDefault;
    img.dataset.complete = awardPlaceholderComplete;

    slot.appendChild(line);
    slot.appendChild(img);
    return slot;
  }

  if (awardsRoot) {
    for (
      let index = awardsRoot.children.length + 1;
      index <= lessons.length;
      index += 1
    ) {
      awardsRoot.appendChild(createAwardSlot(index));
    }
  }

  const awardSlots = [...root.querySelectorAll(".M-AwardSlot")];

  let currentLessonIndex = Math.min(
    Math.max(initialLessonId - 1, 0),
    lessons.length - 1,
  );
  let step = 0;
  let score = 0;
  let started = false;
  let picks = [];

  function getCurrentLesson() {
    return lessons[currentLessonIndex];
  }

  function resetLessonState() {
    step = 0;
    score = 0;
    started = false;
    picks = getCurrentLesson().stages.map(() => null);
  }

  function updateAwards() {
    awardSlots.forEach((slot, index) => {
      const lesson = lessons[index];
      const img = slot.querySelector(".A-Award-Img");

      slot.classList.remove("isCurrent", "isCompleted");

      if (!lesson || !img) return;

      if (img.dataset.default) {
        img.src = lesson.passed ? img.dataset.complete : img.dataset.default;
      }

      if (lesson.passed) {
        slot.classList.add("isCompleted");
      }

      if (index === currentLessonIndex && started) {
        slot.classList.add("isCurrent");
      }
    });
  }

  function updateProgress() {
    const stages = getCurrentLesson().stages;
    const percent = ((step + 1) / stages.length) * 100;
    progressLine.style.width = `${percent}%`;
  }

  function renderCoverLayers(lesson) {
    if (!coverImage) return;

    coverImage.innerHTML = "";

    if (!lesson.coverLayers || !lesson.coverLayers.length) return;

    lesson.coverLayers.forEach((layer) => {
      const img = document.createElement("img");
      img.src = layer.src;
      img.alt = layer.alt || "";
      img.className = layer.className || "A-CoverLayer";
      coverImage.appendChild(img);
    });
  }

  function renderCover() {
    const lesson = getCurrentLesson();

    coverTitle.innerHTML = lesson.coverTitle;
    coverLessonNumber.textContent = lesson.lessonNumber;
    coverDuration.textContent = lesson.duration;

    renderCoverLayers(lesson);

    coverScreen.classList.remove("isHidden");
    testCard.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");

    progressLine.style.width = "0%";
    updateAwards();
  }

  function renderStep() {
    const stage = getCurrentLesson().stages[step];

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
        icon.src =
          "https://github.com/HSEADC/Trace/blob/main/src/img/learn/A-Leaf-Icon.png?raw=true";
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
    updateAwards();
  }

  function showTest() {
    coverScreen.classList.add("isHidden");
    winCard.classList.add("isHidden");
    loseCard.classList.add("isHidden");
    testCard.classList.remove("isHidden");
    renderStep();
  }

  function showResult() {
    score = 0;

    getCurrentLesson().stages.forEach((stage, i) => {
      if (stage.type !== "quiz") return;
      const pick = picks[i];
      if (pick === null) return;
      if (stage.answers[pick]?.correct) score += 1;
    });

    testCard.classList.add("isHidden");

    if (score >= getCurrentLesson().passScore) {
      getCurrentLesson().passed = true;
      winCard.classList.remove("isHidden");
      loseCard.classList.add("isHidden");
    } else {
      winCard.classList.add("isHidden");
      loseCard.classList.remove("isHidden");
    }

    started = false;
    updateAwards();
  }

  function switchLesson(index) {
    currentLessonIndex = index;
    resetLessonState();
    renderCover();
  }

  startTestBtn?.addEventListener("click", () => {
    started = true;
    step = 0;
    updateAwards();
    showTest();
  });

  prevBtn?.addEventListener("click", () => {
    if (step === 0) return;
    step -= 1;
    renderStep();
  });

  nextBtn?.addEventListener("click", () => {
    const stages = getCurrentLesson().stages;
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
    step = 0;
    score = 0;
    picks = getCurrentLesson().stages.map(() => null);
    started = true;
    showTest();
  });

  continueBtn?.addEventListener("click", () => {
    const nextIndex = currentLessonIndex + 1;

    if (nextIndex < lessons.length) {
      switchLesson(nextIndex);
    } else {
      switchLesson(0);
    }
  });

  awardSlots.forEach((slot, index) => {
    slot.addEventListener("click", () => {
      switchLesson(index);
    });
  });

  resetLessonState();
  renderCover();
}
