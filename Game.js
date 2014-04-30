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
  simulation.processEvents(getPendingEvents());
  simulation.update();
  interfaceAnimateCallback();
  render(canvas.bytes(), simulation.getRenderState());
}
