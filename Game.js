function Game(interfaceAnimateCallback, simulation) {
  this.interfaceAnimateCallback = interfaceAnimateCallback;
  this.simulation = simulation;
  //this.pendingEvents = new Queue();
  this.pendingEvents = [];
};

Game.prototype.enqueueEvent = function(event) {
  this.pendingEvents.push(event);
}

Game.prototype.dequeueEvent = function() {
  //return this.pendingEvents.dequeue();
  return this.pendingEvents.shift();
}

Game.prototype.getPendingEvents = function() {
  return this.pendingEvents;
}


/*
// http://gameprogrammingpatterns.com/game-loop.html
double previous = getCurrentTime();
double lag = 0.0;
while (true)
{
  double current = getCurrentTime();
  double elapsed = current - previous;
  previous = current;
  lag += elapsed;

  processInput();

  while (lag >= MS_PER_UPDATE)
  {
    update();
    lag -= MS_PER_UPDATE;
  }

  render();
}

// http://higherorderfun.com/blog/2010/08/17/understanding-the-game-main-loop/
while (running) {
    if (isTimeToUpdate()) {
        processInput();
        updateGameState();
        if (hasTimeToDraw()) drawScreen();
    } else {
        waitUntilItsTime();
    }
}
*/

Game.prototype.gameLoop = function() {
  this.simulation.processEvents(this.getPendingEvents());
  this.pendingEvents = [];
  this.simulation.simulate();
  this.interfaceAnimateCallback();
  //this.render(canvas.bytes(), this.simulation.getRenderState());
}

if (typeof module != 'undefined') {
  module.exports.Game = Game;
}
