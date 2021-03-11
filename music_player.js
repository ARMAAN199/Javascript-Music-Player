var songs = coldplay_songs;
write_queue();

var currently_playing = 0;

var music = document.querySelector(".music-element");
var playBtn = document.querySelector(".play");
var seekbar = document.querySelector(".seekbar");
var currentTime = document.querySelector(".current-time");
var duration = document.querySelector(".duration");

function clean_queue_part1() {
  var tb = document.getElementById("queue");
  while (tb.rows.length > 0) {
    tb.deleteRow(0);
  }
}
function clean_queue_part2() {
  write_queue();
  currently_playing = 0;
  document
    .getElementById("music-element")
    .setAttribute("src", songs[currently_playing].song);
  music.pause();
  handlePlay();
}
