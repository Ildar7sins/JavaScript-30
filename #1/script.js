
window.addEventListener('keydown', function(e) {
			const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
			const key = document.querySelector(`.drum__key[data-key="${e.keyCode}"]`);
			if (!audio) return;
			audio.currentTime = 0;
			audio.play();
			key.classList.add('drum__key--play');
			
			const fn = removeAnimate.bind(null, key)
	        key.removeEventListener('transitionend', fn, false)
	        key.addEventListener('transitionend', fn, false)
		});
function removeAnimate(key) {
        key.classList.remove('drum__key--play')
    }
