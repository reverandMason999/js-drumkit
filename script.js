
const keys = document.querySelectorAll('.key');
const snare = document.getElementById('nasty-ping');

snare.volume = 1;


window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    

});



