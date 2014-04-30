(function() {
  function animateInterface() {
    // draw menus, etc?
  }

  var simulation = new Simulation();
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');
  var renderer = new CanvasRenderer(imageData, width, height);
  var game = new Game(animateInterface, simulation, renderer);
  var gameLoop = game.gameLoop.bind(game);

  function run() {
    requestAnimationFrame(run);
    gameLoop();
    canvasContext.putImageData(imageData);
  }

  var registerEvent = game.enqueueEvent.bind(game);
  function keyPressCallback() {
    switch (keyPressValue) {
      case 'up':
      registerEvent(PLAYER_MOVE_UP);
      break;
    }
  }

  run();
}());
