// disable scrollbars
document.body.style.overflow = 'hidden';
document.body.style.height = '100%';

var degrees = 0;

document.onkeydown = function(evt) {
    evt = evt || window.event;
    // right
    if (evt.keyCode == 39) {
      degrees++;
    }
    // left
    else if (evt.keyCode == 37) {
      degrees--;
    }
    document.body.style.webkitTransform = 'rotate('+degrees+'deg)';
};