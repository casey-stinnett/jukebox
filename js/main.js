// The Jukebox Object
function Jukebox() {
	this.music = document.getElementById('music');
	this.songName = document.getElementById('song-name');
	this.volumeBar = document.getElementById('bar');
	this.volumeHandle = document.getElementById('handle');
	this.playButton = document.getElementsByClassName('play')[0];
	this.pauseButton = document.getElementsByClassName('pause')[0];
	this.stopButton = document.getElementsByClassName('stop')[0];
	this.volumeUpButton = document.getElementsByClassName('vup')[0];
	this.volumeDownButton = document.getElementsByClassName('vdown')[0];
	this.volumeStep = .02;
	this.volumeBarLength = this.volumeBar.offsetWidth;
	this.volumeHandleShift = this.volumeBarLength/(1/this.volumeStep);
	this.playing = false;

	this.play = function(){
		this.music.play();
		this.hidePlay();
		this.showPause();
		this.songName.innerText = this.music.
		this.playing = true;
	}
	this.stop = function(){
		this.music.pause();
		this.music.currentTime = 0;
		this.showPlay();
		this.hidePause();
		this.playing = false;
	}
	this.pause = function(){
		this.music.pause();
		this.showPlay();
		this.hidePause();
		this.playing = false;
	}
	this.volumeUp = function(){
		if ((this.music.volume + this.volumeStep) < 1) {
			this.music.volume += this.volumeStep;
			this.volumeHandle.style.left = (this.volumeHandle.offsetLeft + this.volumeHandleShift) + "px";
		}else {
			this.music.volume = 1;
		}
	}
	this.volumeDown = function(){
		if ((this.music.volume - this.volumeStep) > 0) {
			this.music.volume -= this.volumeStep;
			this.volumeHandle.style.left = (this.volumeHandle.offsetLeft - this.volumeHandleShift) + "px";
		}else {
			this.music.volume = 0;
		}
	}
	this.showPlay = function(){this.volumeHandle.style.left = (this.volumeHandle.offsetLeft - this.volumeHandleShift) + "px";
		this.playButton.style.display = 'block';
	}
	this.hidePlay = function(){
		this.playButton.style.display = 'none';
	}
	this.showPause = function(){
		this.pauseButton.style.display = 'block';
	}
	this.hidePause = function(){
		this.pauseButton.style.display = 'none';
	}
}

var juke = new Jukebox();

// Helper Functions and Click events

// Adding click event listeners
// Play
document.getElementsByClassName('play')[0].addEventListener('click', function(){
	juke.play();
});

document.addEventListener('keypress', function(e){
	if(e.key === " "){
		if (juke.playing) {
			juke.pause();
		} else {
			juke.play();
		}
	}
});

// Pause
document.getElementsByClassName('pause')[0].addEventListener('click', function(){
	juke.pause();
});

// Stop
document.getElementsByClassName('stop')[0].addEventListener('click', function(){
	juke.stop();
});

//Volume Up
document.getElementsByClassName('vup')[0].addEventListener('click', function(){
	juke.volumeUp();
});

// Volume Down
document.getElementsByClassName('vdown')[0].addEventListener('click', function(){
	juke.volumeDown();
});
