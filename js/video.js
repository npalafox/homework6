var video;
var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let calculatedVolume = (video.volume / 1) * 100
	volume.innerHTML = calculatedVolume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 1.1;
	console.log(video.playbackRate)
	
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime)
	console.log("Skipped ahead 5 seconds");
	if ((video.duration - video.currentTime) >= 5){
		video.currentTime += 5;
	}
	else {
		video.currentTime = 0;
	}
	
	console.log(video.currentTime)
	
});