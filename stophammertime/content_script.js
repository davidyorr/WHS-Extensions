
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', 'http://tock.dinodns.us/sht.mp3');
      audioElement.setAttribute('preload', 'auto');
      audioElement.load();
      audioElement.play();
    }
};
