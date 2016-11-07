// The Jukebox Object
function Jukebox() {
	this.play = function(){
		var music = document.getElementById('music');
		music.play();
	}
	this.stop = function(){
		var music = document.getElementById('music');
		music.pause();
		music.currentTime = 0;
		if (exists(document.getElementsByClassName('pause'))) {
			document.getElementsByClassName('pause')[0].className = 'play';
		}
	}
	this.pause = function(){
		var music = document.getElementById('music');
		music.pause();
	}
}

var exists = function(elementArray){
	return (elementArray.length > 0);
}

var juke = new Jukebox();

// Adds a click listener to an element with 
// the given class
function click(className, functionName) {
	document.getElementsByClassName(className)[0].addEventListener('click', functionName);
}

document.getElementsByClassName('play')[0].addEventListener('click', function(){
	if (this.className.indexOf('play') > -1) {
		juke.play();
		this.className = 'pause';
	} else {
		juke.pause();
		this.className = 'play';
	}
});

click('stop', juke.stop);
click('volume', juke.play);