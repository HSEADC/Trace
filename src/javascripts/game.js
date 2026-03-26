const COLS = 8;
const ROWS = 8;
const BLOCK_SIZE = 50;

const boardCanvas = document.getElementById("tetris-board");
const nextCanvas = document.getElementById("next-piece");

if (boardCanvas && nextCanvas) {
  const boardCtx = boardCanvas.getContext("2d");
  const nextCtx = nextCanvas.getContext("2d");

  const goalPaperValue = document.getElementById("goal-paper-value");
  const goalPlasticValue = document.getElementById("goal-plastic-value");
  const linesValue = document.getElementById("lines-value");
  const levelValue = document.getElementById("level-value");
  const scoreValue = document.getElementById("score-value");

  const startButton = document.getElementById("start-button");
  const pauseButton = document.getElementById("pause-button");
  const menuButton = document.getElementById("menu-button");

  // LOSE MODAL
  const loseModal = document.getElementById("lose-modal");
  const loseModalMenu = document.getElementById("lose-modal-menu");
  const loseModalRestart = document.getElementById("lose-modal-restart");
  const loseModalMenuTop = document.getElementById("lose-modal-menu-top");
  const loseModalRestartTop = document.getElementById("lose-modal-restart-top");

  // WIN MODAL
  const winModal = document.getElementById("win-modal");
  const winModalMenu = document.getElementById("win-modal-menu");
  const winModalRestart = document.getElementById("win-modal-restart");
  const winModalMenuTop = document.getElementById("win-modal-menu-top");
  const winModalRestartTop = document.getElementById("win-modal-restart-top");

  const COLORS = {
    I: "#EE36B0",
    O: "#FEAAE1",
    T: "#F2F53A",
    S: "#02973B",
    Z: "#535353",
    J: "#D4D4D4",
    L: "#FEAAE1",
  };

  const SHAPES = {
    I: [[1, 1, 1, 1]],
    O: [
      [1, 1],
      [1, 1],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
    ],
  };

  let board = [];
  let currentPiece = null;
  let nextPiece = null;

  let score = 0;
  let lines = 0;
  let level = 1;

  let goalPaper = 11;
  let goalPlastic = 5;

  let dropInterval = 800;
  let dropCounter = 0;
  let lastTime = 0;
  let animationId = null;

  let isRunning = false;
  let isPaused = false;
  let isGameOver = false;

  const CELL_CONFIG = {
    radius: null,
    radiusVw: 0.15,
    shadows: {
      outer: {
        offsetX: 0,
        offsetY: 2,
        blur: 6,
        color: "rgba(0, 0, 0, 0.18)",
      },
      highlight: {
        color: "rgba(255, 255, 255, 0.24)",
        lineWidth: 2,
      },
      shade: {
        color: "rgba(0, 0, 0, 0.16)",
        lineWidth: 2,
      },
      innerGlow: {
        inset: 4,
      },
    },
  };

  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.quadraticCurveTo(x + w, y, x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.quadraticCurveTo(x, y + h, x, y + h - r);
      this.lineTo(x, y + r);
      this.quadraticCurveTo(x, y, x + r, y);
      return this;
    };
  }

  function createBoard() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  function getRandomType() {
    const types = Object.keys(SHAPES);
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  }

  function createPiece(type = getRandomType()) {
    const shape = SHAPES[type].map((row) => [...row]);

    return {
      type,
      shape,
      color: COLORS[type],
      x: Math.floor((COLS - shape[0].length) / 2),
      y: 0,
    };
  }

  function getCellRadius(size) {
    if (CELL_CONFIG.radius !== null) {
      return CELL_CONFIG.radius;
    }

    if (CELL_CONFIG.radiusVw) {
      return (window.innerWidth * CELL_CONFIG.radiusVw) / 100;
    }

    return size * 0.125;
  }

  function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
  }

  function drawEmptyCell(ctx, x, y, size = BLOCK_SIZE) {
    const radius = getCellRadius(size);
    const xPos = x * size;
    const yPos = y * size;
    const baseColor = "#E51EA2";

    ctx.save();

    drawRoundedRect(ctx, xPos, yPos, size, size, radius);
    ctx.fillStyle = baseColor;
    ctx.fill();

    ctx.clip();

    const topGrad = ctx.createLinearGradient(xPos, yPos, xPos, yPos + size);
    topGrad.addColorStop(0, "rgba(255,255,255,0.10)");
    topGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = topGrad;
    ctx.fillRect(xPos, yPos, size, size * 0.5);

    const bottomGrad = ctx.createLinearGradient(xPos, yPos, xPos, yPos + size);
    bottomGrad.addColorStop(0, "rgba(0,0,0,0)");
    bottomGrad.addColorStop(1, "rgba(0,0,0,0.12)");
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(xPos, yPos, size, size);

    ctx.beginPath();
    ctx.moveTo(xPos + radius, yPos + 1);
    ctx.lineTo(xPos + size - radius, yPos + 1);
    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + 1, yPos + radius);
    ctx.lineTo(xPos + 1, yPos + size - radius);
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + radius, yPos + size - 1);
    ctx.lineTo(xPos + size - radius, yPos + size - 1);
    ctx.strokeStyle = "rgba(0,0,0,0.10)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + size - 1, yPos + radius);
    ctx.lineTo(xPos + size - 1, yPos + size - radius);
    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.restore();
  }

  function drawBlockCell(ctx, x, y, color, size = BLOCK_SIZE) {
    const radius = getCellRadius(size);
    const xPos = x * size;
    const yPos = y * size;

    ctx.save();

    ctx.shadowColor = CELL_CONFIG.shadows.outer.color;
    ctx.shadowBlur = CELL_CONFIG.shadows.outer.blur;
    ctx.shadowOffsetX = CELL_CONFIG.shadows.outer.offsetX;
    ctx.shadowOffsetY = CELL_CONFIG.shadows.outer.offsetY;

    drawRoundedRect(ctx, xPos, yPos, size, size, radius);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();

    ctx.save();

    drawRoundedRect(ctx, xPos, yPos, size, size, radius);
    ctx.clip();

    ctx.fillStyle = color;
    ctx.fillRect(xPos, yPos, size, size);

    const mainGrad = ctx.createLinearGradient(xPos, yPos, xPos, yPos + size);
    mainGrad.addColorStop(0, "rgba(255,255,255,0.12)");
    mainGrad.addColorStop(0.45, "rgba(255,255,255,0.04)");
    mainGrad.addColorStop(1, "rgba(0,0,0,0.06)");
    ctx.fillStyle = mainGrad;
    ctx.fillRect(xPos + 1, yPos + 1, size - 2, size - 2);

    ctx.beginPath();
    ctx.moveTo(xPos + radius, yPos + 1);
    ctx.lineTo(xPos + size - radius, yPos + 1);
    ctx.strokeStyle = CELL_CONFIG.shadows.highlight.color;
    ctx.lineWidth = CELL_CONFIG.shadows.highlight.lineWidth;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + 1, yPos + radius);
    ctx.lineTo(xPos + 1, yPos + size - radius);
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + radius, yPos + size - 1);
    ctx.lineTo(xPos + size - radius, yPos + size - 1);
    ctx.strokeStyle = CELL_CONFIG.shadows.shade.color;
    ctx.lineWidth = CELL_CONFIG.shadows.shade.lineWidth;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPos + size - 1, yPos + radius);
    ctx.lineTo(xPos + size - 1, yPos + size - radius);
    ctx.strokeStyle = "rgba(0,0,0,0.14)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const inset = CELL_CONFIG.shadows.innerGlow.inset;
    const innerHighlight = ctx.createLinearGradient(
      xPos,
      yPos,
      xPos,
      yPos + size * 0.45,
    );
    innerHighlight.addColorStop(0, "rgba(255,255,255,0.18)");
    innerHighlight.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = innerHighlight;

    drawRoundedRect(
      ctx,
      xPos + inset,
      yPos + inset,
      size - inset * 2,
      size * 0.42,
      Math.max(2, radius - 2),
    );
    ctx.fill();

    ctx.restore();
  }

  function drawFilledCell(ctx, x, y, color, size = BLOCK_SIZE) {
    drawBlockCell(ctx, x, y, color, size);
  }

  function showLoseModal() {
    if (!loseModal) return;
    loseModal.classList.remove("O-GameModal-Hidden");
  }

  function hideLoseModal() {
    if (!loseModal) return;
    loseModal.classList.add("O-GameModal-Hidden");
  }

  function showWinModal() {
    if (!winModal) return;
    winModal.classList.remove("O-GameModal-Hidden");
  }

  function hideWinModal() {
    if (!winModal) return;
    winModal.classList.add("O-GameModal-Hidden");
  }

  function hideAllModals() {
    hideLoseModal();
    hideWinModal();
  }

  function resetGame() {
    board = createBoard();

    score = 0;
    lines = 0;
    level = 1;

    goalPaper = 11;
    goalPlastic = 5;

    dropInterval = 800;
    dropCounter = 0;
    lastTime = 0;

    isPaused = false;
    isGameOver = false;

    currentPiece = createPiece();
    nextPiece = createPiece();

    hideAllModals();
    updateStats();
    draw();
    drawNextPiece();
  }

  function updateStats() {
    if (goalPaperValue) goalPaperValue.textContent = goalPaper;
    if (goalPlasticValue) goalPlasticValue.textContent = goalPlastic;
    if (linesValue) linesValue.textContent = lines;
    if (levelValue) levelValue.textContent = level;
    if (scoreValue) scoreValue.textContent = score;
  }

  function drawBoard() {
    boardCtx.clearRect(0, 0, boardCanvas.width, boardCanvas.height);

    for (let y = 0; y < ROWS; y += 1) {
      for (let x = 0; x < COLS; x += 1) {
        if (board[y][x]) {
          drawFilledCell(boardCtx, x, y, board[y][x]);
        } else {
          drawEmptyCell(boardCtx, x, y);
        }
      }
    }
  }

  function drawPiece(piece, ctx, offsetX, offsetY, cellSize = BLOCK_SIZE) {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (!value) return;
        drawFilledCell(ctx, x + offsetX, y + offsetY, piece.color, cellSize);
      });
    });
  }

  function drawCurrentPiece() {
    if (!currentPiece) return;
    drawPiece(currentPiece, boardCtx, currentPiece.x, currentPiece.y);
  }

  function drawNextPiece() {
    nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);

    if (!nextPiece) return;

    const previewCellSize = 30;
    const shape = nextPiece.shape;
    const shapeWidth = shape[0].length;
    const shapeHeight = shape.length;

    const piecePixelWidth = shapeWidth * previewCellSize;
    const piecePixelHeight = shapeHeight * previewCellSize;

    const startX = (nextCanvas.width - piecePixelWidth) / 2;
    const startY = (nextCanvas.height - piecePixelHeight) / 2;

    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (!value) return;

        const drawX = startX / previewCellSize + x;
        const drawY = startY / previewCellSize + y;

        drawFilledCell(nextCtx, drawX, drawY, nextPiece.color, previewCellSize);
      });
    });
  }

  function draw() {
    drawBoard();
    drawCurrentPiece();
  }

  function collide(piece, testBoard = board) {
    for (let y = 0; y < piece.shape.length; y += 1) {
      for (let x = 0; x < piece.shape[y].length; x += 1) {
        if (!piece.shape[y][x]) continue;

        const newX = piece.x + x;
        const newY = piece.y + y;

        if (newX < 0 || newX >= COLS || newY >= ROWS) {
          return true;
        }

        if (newY >= 0 && testBoard[newY][newX]) {
          return true;
        }
      }
    }

    return false;
  }

  function merge(piece) {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (!value) return;

        const boardY = piece.y + y;
        const boardX = piece.x + x;

        if (boardY >= 0) {
          board[boardY][boardX] = piece.color;
        }
      });
    });
  }

  function handleGoalsByPiece(pieceType) {
    if (pieceType === "J" && goalPaper > 0) {
      goalPaper -= 1;
    }

    if (pieceType === "Z" && goalPlastic > 0) {
      goalPlastic -= 1;
    }

    updateStats();
  }

  function checkWin() {
    if (goalPaper <= 0 && goalPlastic <= 0) {
      isGameOver = true;
      isRunning = false;
      cancelAnimationFrame(animationId);
      showWinModal();
      return true;
    }

    return false;
  }

  function clearLines() {
    let clearedLines = 0;

    for (let y = ROWS - 1; y >= 0; y -= 1) {
      const isFull = board[y].every((cell) => cell !== 0);

      if (isFull) {
        board.splice(y, 1);
        board.unshift(Array(COLS).fill(0));
        clearedLines += 1;
        y += 1;
      }
    }

    if (clearedLines > 0) {
      const scoreMap = {
        1: 100,
        2: 300,
        3: 500,
        4: 800,
      };

      score += (scoreMap[clearedLines] || 0) * level;
      lines += clearedLines;

      const nextLevelThreshold = level * 5;

      if (lines >= nextLevelThreshold) {
        level += 1;
        dropInterval = Math.max(150, dropInterval - 80);
      }

      updateStats();
    }
  }

  function spawnNextPiece() {
    currentPiece = nextPiece;
    currentPiece.x = Math.floor((COLS - currentPiece.shape[0].length) / 2);
    currentPiece.y = 0;

    nextPiece = createPiece();
    drawNextPiece();

    if (collide(currentPiece)) {
      gameOver();
    }
  }

  function movePiece(direction) {
    if (!isRunning || isPaused || isGameOver) return;

    currentPiece.x += direction;

    if (collide(currentPiece)) {
      currentPiece.x -= direction;
      return;
    }

    draw();
  }

  function dropPiece() {
    if (!isRunning || isPaused || isGameOver) return;

    currentPiece.y += 1;

    if (collide(currentPiece)) {
      currentPiece.y -= 1;
      merge(currentPiece);
      handleGoalsByPiece(currentPiece.type);

      if (checkWin()) {
        draw();
        return;
      }

      clearLines();
      spawnNextPiece();
    }

    draw();
  }

  function hardDrop() {
    if (!isRunning || isPaused || isGameOver) return;

    while (!collide(currentPiece)) {
      currentPiece.y += 1;
    }

    currentPiece.y -= 1;
    merge(currentPiece);
    handleGoalsByPiece(currentPiece.type);

    if (checkWin()) {
      draw();
      return;
    }

    clearLines();
    spawnNextPiece();
    draw();
  }

  function rotateMatrix(matrix) {
    return matrix[0].map((_, columnIndex) =>
      matrix.map((row) => row[columnIndex]).reverse(),
    );
  }

  function rotatePiece() {
    if (!isRunning || isPaused || isGameOver) return;

    const oldShape = currentPiece.shape;
    const rotatedShape = rotateMatrix(currentPiece.shape);

    currentPiece.shape = rotatedShape;

    if (collide(currentPiece)) {
      currentPiece.x += 1;

      if (collide(currentPiece)) {
        currentPiece.x -= 2;

        if (collide(currentPiece)) {
          currentPiece.x += 1;
          currentPiece.shape = oldShape;
        }
      }
    }

    draw();
  }

  function update(time = 0) {
    if (!isRunning || isPaused || isGameOver) return;

    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;

    if (dropCounter > dropInterval) {
      dropPiece();
      dropCounter = 0;
    }

    animationId = requestAnimationFrame(update);
  }

  function startGame() {
    resetGame();
    isRunning = true;
    cancelAnimationFrame(animationId);
    animationId = requestAnimationFrame(update);
  }

  function togglePause() {
    if (!isRunning || isGameOver) return;

    isPaused = !isPaused;

    if (isPaused) {
      cancelAnimationFrame(animationId);
      return;
    }

    lastTime = 0;
    dropCounter = 0;
    animationId = requestAnimationFrame(update);
  }

  function gameOver() {
    isGameOver = true;
    isRunning = false;
    cancelAnimationFrame(animationId);
    showLoseModal();
  }

  function handleMenuAction() {
    window.alert("Переход в меню");
  }

  document.addEventListener("keydown", (event) => {
    if (!isRunning) return;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        movePiece(-1);
        break;

      case "ArrowRight":
        event.preventDefault();
        movePiece(1);
        break;

      case "ArrowDown":
        event.preventDefault();
        dropPiece();
        break;

      case "ArrowUp":
        event.preventDefault();
        rotatePiece();
        break;

      case " ":
        event.preventDefault();
        hardDrop();
        break;

      case "p":
      case "P":
        event.preventDefault();
        togglePause();
        break;

      default:
        break;
    }
  });

  if (startButton) {
    startButton.addEventListener("click", startGame);
  }

  if (pauseButton) {
    pauseButton.addEventListener("click", togglePause);
  }

  if (menuButton) {
    menuButton.addEventListener("click", handleMenuAction);
  }

  if (loseModalRestart) {
    loseModalRestart.addEventListener("click", startGame);
  }

  if (loseModalRestartTop) {
    loseModalRestartTop.addEventListener("click", startGame);
  }

  if (loseModalMenu) {
    loseModalMenu.addEventListener("click", handleMenuAction);
  }

  if (loseModalMenuTop) {
    loseModalMenuTop.addEventListener("click", handleMenuAction);
  }

  if (winModalRestart) {
    winModalRestart.addEventListener("click", startGame);
  }

  if (winModalRestartTop) {
    winModalRestartTop.addEventListener("click", startGame);
  }

  if (winModalMenu) {
    winModalMenu.addEventListener("click", handleMenuAction);
  }

  if (winModalMenuTop) {
    winModalMenuTop.addEventListener("click", handleMenuAction);
  }

  resetGame();
}
