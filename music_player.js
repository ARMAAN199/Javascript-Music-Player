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

function chooseartist(artist_name_from_above) {
  if (artist_name_from_above == "chainsmoker_songs") {
    clean_queue_part1();
    songs = chainsmokers_songs;
    clean_queue_part2();
  }

  if (artist_name_from_above == "coldpla_songs") {
    clean_queue_part1();
    songs = coldplay_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "neffe_songs") {
    clean_queue_part1();
    songs = neffex_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "e_songs") {
    clean_queue_part1();
    songs = ed_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "arian_songs") {
    clean_queue_part1();
    songs = ariana_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "ann_songs") {
    clean_queue_part1();
    songs = anne_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "camil_songs") {
    clean_queue_part1();
    songs = camila_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "elli_songs") {
    clean_queue_part1();
    songs = ellie_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "emine_songs") {
    clean_queue_part1();
    songs = eminem_songs;
    clean_queue_part2();
  }
  if (artist_name_from_above == "mi_songs") {
    clean_queue_part1();
    songs = mix_songs;
    clean_queue_part2();
  }
}

music.volume = 0.5;

function next_song() {
  if (currently_playing + 1 == songs.length) currently_playing = 0;
  else currently_playing++;
  document.getElementById("curr_name").innerHTML =
    songs[currently_playing].songName;
  document.getElementById("artist_name").innerHTML =
    songs[currently_playing].artistName;
  document
    .getElementById("current_img")
    .setAttribute("src", songs[currently_playing].img);
  document
    .getElementById("music-element")
    .setAttribute("src", songs[currently_playing].song);
  handlePlay();
}

function prev_song() {
  if (currently_playing == 0) currently_playing = songs.length - 1;
  else currently_playing--;
  document.getElementById("curr_name").innerHTML =
    songs[currently_playing].songName;
  document.getElementById("artist_name").innerHTML =
    songs[currently_playing].artistName;
  document
    .getElementById("current_img")
    .setAttribute("src", songs[currently_playing].img);
  document
    .getElementById("music-element")
    .setAttribute("src", songs[currently_playing].song);
  handlePlay();
}

function handlequeue(curr) {
  currently_playing = curr;
  currently_playing++;
  prev_song();
}

function changecolor() {
  document.getElementById("testing2").innerHTML = currently_playing;
  var rows = document.getElementById("queue").children;
  for (i = 0; i < rows.length; i++) {
    rows[i].style.boxShadow = "none";
  }
  rows[currently_playing].style.boxShadow = "5px 5px 5px #ec008c";
}
