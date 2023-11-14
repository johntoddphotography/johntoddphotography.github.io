// Slider1
var video1 = document.getElementById("video1");
var seekBar1 = document.getElementById("seek-bar1");
// Event listener for the seek bar
seekBar1.addEventListener("change", function() {
// Calculate the new time
  var time = video1.duration * (seekBar1.value / 100);
// Update the video time
  video1.currentTime = time;
});
// Update the seek bar as the video plays
video1.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video1.duration) * video1.currentTime;
// Update the slider value
  seekBar1.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar1.addEventListener("mousedown", function() {
  video1.pause();
});
// Play the video when the slider handle is dropped
seekBar1.addEventListener("mouseup", function() {
  video1.play();
});
// Slider2
var video2 = document.getElementById("video2");
var seekBar2 = document.getElementById("seek-bar2");
// Event listener for the seek bar
seekBar2.addEventListener("change", function() {
// Calculate the new time
  var time = video2.duration * (seekBar2.value / 100);
// Update the video time
  video2.currentTime = time;
});
// Update the seek bar as the video plays
video2.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video2.duration) * video2.currentTime;
// Update the slider value
  seekBar2.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar4.addEventListener("mousedown", function() {
  video4.pause();
});
// Play the video when the slider handle is dropped
seekBar4.addEventListener("mouseup", function() {
  video4.play();
});
// Slider3
var video3 = document.getElementById("video3");
var seekBar3 = document.getElementById("seek-bar3");
// Event listener for the seek bar
seekBar3.addEventListener("change", function() {
// Calculate the new time
  var time = video3.duration * (seekBar3.value / 100);
// Update the video time
  video3.currentTime = time;
});
// Update the seek bar as the video plays
video3.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video3.duration) * video3.currentTime;
// Update the slider value
  seekBar3.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar3.addEventListener("mousedown", function() {
  video3.pause();
});
// Play the video when the slider handle is dropped
seekBar3.addEventListener("mouseup", function() {
  video3.play();
});
// Slider4
var video4 = document.getElementById("video4");
var seekBar4 = document.getElementById("seek-bar4");
// Event listener for the seek bar
seekBar4.addEventListener("change", function() {
// Calculate the new time
  var time = video4.duration * (seekBar4.value / 100);
// Update the video time
  video4.currentTime = time;
});
// Update the seek bar as the video plays
video4.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video4.duration) * video4.currentTime;
// Update the slider value
  seekBar4.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar4.addEventListener("mousedown", function() {
  video4.pause();
});
// Play the video when the slider handle is dropped
seekBar4.addEventListener("mouseup", function() {
  video4.play();
});
// Slider5
var video5 = document.getElementById("video5");
var seekBar5 = document.getElementById("seek-bar5");
// Event listener for the seek bar
seekBar5.addEventListener("change", function() {
// Calculate the new time
  var time = video5.duration * (seekBar5.value / 100);
// Update the video time
  video5.currentTime = time;
});
// Update the seek bar as the video plays
video5.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video5.duration) * video5.currentTime;
// Update the slider value
  seekBar5.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar5.addEventListener("mousedown", function() {
  video5.pause();
});
// Play the video when the slider handle is dropped
seekBar5.addEventListener("mouseup", function() {
  video5.play();
});
// Slider6
var video6 = document.getElementById("video6");
var seekBar6 = document.getElementById("seek-bar6");
// Event listener for the seek bar
seekBar6.addEventListener("change", function() {
// Calculate the new time
  var time = video6.duration * (seekBar6.value / 100);
// Update the video time
  video6.currentTime = time;
});
// Update the seek bar as the video plays
video6.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video6.duration) * video6.currentTime;
// Update the slider value
  seekBar6.value = value;
});
// Pause the video when the slider handle is being dragged
seekBar6.addEventListener("mousedown", function() {
  video6.pause();
});
// Play the video when the slider handle is dropped
seekBar6.addEventListener("mouseup", function() {
  video6.play();
});