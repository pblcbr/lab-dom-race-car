window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    game = new Game();
    game.start();
    console.log("start game");
  }

  function handleKeyDown(event) {
    const key = event.key;
    const possibleKeystrokes = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

    if (possibleKeystrokes.includes(key)) {
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.player.directionX = -5;
          break;
        case "ArrowUp":
          game.player.directionY = -5;
          break;
        case "ArrowRight":
          game.player.directionX = 5;
          break;
        case "ArrowDown":
          game.player.directionY = 5;
          break;
      }
    }
  }
  window.addEventListener("keydown", handleKeyDown);

  window.addEventListener("keyup", function (event) {
    const key = event.key;
    switch (key) {
      case "ArrowLeft":
      case "ArrowRight":
        game.player.directionX = 0;
        break;
      case "ArrowUp":
      case "ArrowDown":
        game.player.directionY = 0;
        break;
    }
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function restartGame() {
    location.reload();
  }
};
