// requestAnim shim layer by Paul Irish
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  

// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

var canvas, context;

function init() {
    canvas = document.getElementById( 'pixelsCanvas' );
    context = canvas.getContext( '2d' );
}

function animate() {
  requestAnimFrame( animate );
  draw();
}

function draw() {
  var now = new Date().getTime() * 0.002;
  context.font = "30px Arial";
  context.fillText(now.toDateString(),10,50);
}
