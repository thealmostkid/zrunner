function PlayerHTMLRenderer() {
}

PlayerHTMLRenderer.prototype.update = function(element, player, coordToPixel) {
  element.style['top'] = coordToPixel(player.Y);
  element.style['left'] = coordToPixel(player.X);
}

if (typeof module !== 'undefined') {
  module.exports.PlayerHTMLRenderer = PlayerHTMLRenderer;
}
