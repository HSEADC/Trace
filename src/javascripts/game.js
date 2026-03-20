const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

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

  const COLORS = {
    I: "#f4d7ee",
    O: "#f7c0ea",
    T: "#d7ff17",
    S: "#00a63a",
    Z: "#5d5d5d",
    J: "#d9d9d9",
    L: "#f2a4dc",
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

  function drawEmptyCell(ctx, x, y, size = BLOCK_SIZE) {
    ctx.fillStyle = "#ec1ba9";
    ctx.fillRect(x * size, y * size, size, size);

    ctx.strokeStyle = "rgba(120, 0, 76, 0.28)";
    ctx.lineWidth = 2;
    ctx.strokeRect(x * size, y * size, size, size);
  }

  function drawFilledCell(ctx, x, y, color, size = BLOCK_SIZE) {
    ctx.fillStyle = color;
    ctx.fillRect(x * size, y * size, size, size);

    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 2;
    ctx.strokeRect(x * size, y * size, size, size);

    ctx.strokeStyle = "rgba(0,0,0,0.08)";
    ctx.strokeRect(x * size + 1, y * size + 1, size - 2, size - 2);
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

    const previewCellSize = 30;
    const shapeWidth = nextPiece.shape[0].length;
    const shapeHeight = nextPiece.shape.length;

    const offsetX = Math.floor(
      (nextCanvas.width / previewCellSize - shapeWidth) / 2,
    );
    const offsetY = Math.floor(
      (nextCanvas.height / previewCellSize - shapeHeight) / 2,
    );

    drawPiece(nextPiece, nextCtx, offsetX, offsetY, previewCellSize);
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
    window.alert("Игра окончена");
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
    menuButton.addEventListener("click", () => {
      window.alert("Кнопка меню пока без логики");
    });
  }

  resetGame();
}
