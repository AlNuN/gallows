function createSprite (selector) {
  var elem = document.querySelector(selector);
  var i = 0;
  return {
    nextFrame: function () {
      if (i>9) return;
      elem.className = 'sprite frame' + i;
      i += 1;
    }
  } 
}

