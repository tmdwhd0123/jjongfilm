var player;
var youtube = [...document.querySelectorAll('.youtube')];
var play = [...document.querySelectorAll('.youtube-play')];
var video = [...document.querySelectorAll('.youtube-video')];
[]

function shineEfeect(e) {
  const x = e.pageX - this.offsetLeft;
  const y = e.pageY - this.offsetTop;
  this.style.setProperty('--x', x + 'px');
  this.style.setProperty('--y', y + 'px');
}

function onPlayerReady(e) {

  this.classList.add('video-is-open');
  setTimeout(() => {
    video[youtube.indexOf(this)].style.display = 'block';
    play[youtube.indexOf(this)].playVideo();
  }, 500);


}


for (let i = 0; i < youtube.length; i++) {
  youtube[i].addEventListener("mousemove", shineEfeect)
  youtube[i].addEventListener("click", onPlayerReady)
}

// Youtube API
function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Player Ready
/*function onPlayerReady(event) {

	play.addEventListener( 'click', function() {
	youtube.classList.add( 'video-is-open' );
		setTimeout(function() {
			video.style.display = 'block';
		player.playVideo();
		}, 500);
	});
}*/


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);