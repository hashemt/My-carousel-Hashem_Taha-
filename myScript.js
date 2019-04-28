var imageIndex = 0;
showImage(imageIndex);

var prev = document.getElementById('prev');
var next = document.getElementById('next');

function showImage(newIndex) {
  var i;
  var images = document.getElementsByClassName("image");
  if (newIndex > images.length - 1) { imageIndex = 0 }
  if (newIndex < 0) { imageIndex = images.length - 1 }
  for (i = 0; i < images.length; i++) { images[i].style.display = "none"; }
  images[imageIndex].style.display = "block";
}

prev.addEventListener('click', function () {showImage(imageIndex=imageIndex-1)});
next.addEventListener('click', function () {showImage(imageIndex=imageIndex+1)});
document.addEventListener('keydown',function (event) {
  if(event.key=="ArrowLeft"){showImage(imageIndex=imageIndex-1)}
  if(event.key=="ArrowRight"){showImage(imageIndex=imageIndex+1)}
           }); 

var timer = 0;
var playPauseBtn = document.getElementById("playPause");

function playPauseImages() {
  if (timer == 0) {
    playPauseBtn.style.backgroundPositionY = "-33px";
    timer = setInterval(function () { showImage(imageIndex=imageIndex+1) }, 2000);
  }
  else {
    clearInterval(timer);
    timer = 0;
    playPauseBtn.style.backgroundPositionY = "0px";
  }
}
playPauseBtn.addEventListener('click', playPauseImages);


