const REQUIRED_CORRECT = 5;
const MAX_LIVES = 3;

const scoreEl = document.getElementById("score");
const progressFill = document.getElementById("progressFill");
const taskEl = document.getElementById("task");

const restartBtn = document.getElementById("restartBtn");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalRestart = document.getElementById("modalRestart");
const modalClose = document.getElementById("modalClose");

const stage = document.getElementById("stage");
const items = Array.from(document.querySelectorAll(".A_Item"));
const bins = Array.from(document.querySelectorAll(".C_Bin"));

let score = 0;
let lives = MAX_LIVES;

const startPositions = [
  { x: 46, y: 8 },
  { x: 62, y: 14 },
  { x: 72, y: 24 },
  { x: 36, y: 22 },
  { x: 30, y: 10 },
  { x: 56, y: 26 },
];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function setLivesUI() {
  for (let i = 1; i <= MAX_LIVES; i++) {
    const heart = document.getElementById(`life${i}`);
    heart.classList.toggle("is-on", i <= lives);
  }
}

function setScoreUI() {
  scoreEl.textContent = String(score);
  const pct = (score / REQUIRED_CORRECT) * 100;
  progressFill.style.width = `${clamp(pct, 0, 100)}%`;
}

function openModal(type) {
  stage.classList.add("is-locked");

  modal.hidden = false;

  if (type === "win") {
    modalTitle.textContent = "Победа!";
    modalText.textContent = "Ты правильно отсортировала 5 предметов.";
  } else {
    modalTitle.textContent = "Игра окончена";
    modalText.textContent = "Жизни закончились. Попробуем ещё раз?";
  }

  requestAnimationFrame(() => {
    modalRestart?.focus();
  });
}

function closeModal() {
  modal.hidden = true;
  stage.classList.remove("is-locked");
}

function resetGame() {
  score = 0;
  lives = MAX_LIVES;
  setLivesUI();
  setScoreUI();
  taskEl.textContent = "Собери 5 правильных предметов";
  closeModal();

  items.forEach((item, idx) => {
    item.classList.remove("is-done", "is-dragging");
    item.style.left = `${startPositions[idx].x}vw`;
    item.style.top = `${startPositions[idx].y}vw`;
    item.dataset.done = "0";
  });
}

function getBinUnderPointer(clientX, clientY) {
  return bins.find((bin) => {
    const r = bin.getBoundingClientRect();
    return (
      clientX >= r.left &&
      clientX <= r.right &&
      clientY >= r.top &&
      clientY <= r.bottom
    );
  });
}

function setBinHover(bin) {
  bins.forEach((b) => b.classList.remove("is-hover"));
  if (bin) bin.classList.add("is-hover");
}

function checkDrop(item, bin) {
  if (!bin) return false;
  const need = bin.dataset.accept;
  const type = item.dataset.type;
  return need === type;
}

function snapToBin(item, bin) {
  const binRect = bin.getBoundingClientRect();
  const stageRect = stage.getBoundingClientRect();

  const xPx = binRect.left - stageRect.left + binRect.width / 2;
  const yPx = binRect.top - stageRect.top + binRect.height * 0.15;

  const leftPx = xPx - item.offsetWidth / 2;
  const topPx = yPx - item.offsetHeight / 2;

  item.style.left = `${leftPx}px`;
  item.style.top = `${topPx}px`;
}

function onCorrect(item) {
  item.classList.add("is-done");
  item.dataset.done = "1";

  score += 1;
  setScoreUI();

  if (score >= REQUIRED_CORRECT) {
    openModal("win");
  }
}

function onWrong() {
  lives -= 1;
  setLivesUI();

  if (lives <= 0) {
    openModal("lose");
  }
}

items.forEach((item, idx) => {
  item.style.left = `${startPositions[idx].x}vw`;
  item.style.top = `${startPositions[idx].y}vw`;

  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  item.addEventListener("pointerdown", (e) => {
    if (item.dataset.done === "1") return;
    if (!modal.hidden) return;

    pointerId = e.pointerId;
    item.setPointerCapture(pointerId);

    const rect = item.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    startLeft = rect.left;
    startTop = rect.top;

    item.classList.add("is-dragging");
  });

  item.addEventListener("pointermove", (e) => {
    if (pointerId === null) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    const newLeft = startLeft + dx;
    const newTop = startTop + dy;

    const stageRect = stage.getBoundingClientRect();

    const leftInStage = newLeft - stageRect.left;
    const topInStage = newTop - stageRect.top;

    item.style.left = `${leftInStage}px`;
    item.style.top = `${topInStage}px`;

    const bin = getBinUnderPointer(e.clientX, e.clientY);
    setBinHover(bin);
  });

  function endDrag(e) {
    if (pointerId === null) return;

    item.releasePointerCapture(pointerId);
    pointerId = null;

    item.classList.remove("is-dragging");

    const bin = getBinUnderPointer(e.clientX, e.clientY);
    setBinHover(null);

    if (!bin) return;

    if (checkDrop(item, bin)) {
      snapToBin(item, bin);
      onCorrect(item);
    } else {
      onWrong();
    }
  }

  item.addEventListener("pointerup", endDrag);
  item.addEventListener("pointercancel", endDrag);
});

restartBtn.addEventListener("click", resetGame);
modalRestart.addEventListener("click", resetGame);
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

resetGame();
