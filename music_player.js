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

function handlePlay() {
  document.getElementById("curr_name").innerHTML =
    songs[currently_playing].songName;
  document.getElementById("artist_name").innerHTML =
    songs[currently_playing].artistName;
  document
    .getElementById("current_img")
    .setAttribute("src", songs[currently_playing].img);
  if (music.paused) {
    music.play();
    playBtn.className = "pause";
    playBtn.innerHTML = '<i class="material-icons">pause</i>';
  } else {
    music.pause();
    playBtn.className = "play";
    playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
  }
  music.addEventListener("ended", function () {
    music.pause();
    playBtn.className = "play";
    playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
    music.currentTime = 0;
    handlePlay();
  });
  document.getElementById("testing").innerHTML = currently_playing;

  changecolor();
}

music.onloadeddata = function () {
  seekbar.max = music.duration;
  var ds = parseInt(music.duration % 60);
  var dm = parseInt((music.duration / 60) % 60);
  duration.innerHTML = dm + ":" + ds;
};
music.ontimeupdate = function () {
  seekbar.value = music.currentTime;
};
handleSeekBar = function () {
  music.currentTime = seekbar.value;
};
music.addEventListener(
  "timeupdate",
  function () {
    var cs = parseInt(music.currentTime % 60);
    var cm = parseInt((music.currentTime / 60) % 60);
    currentTime.innerHTML = cm + ":" + cs;
  },
  false
);

function write_queue() {
  queue_list = document.getElementById("queue");
  for (i = 0; i < songs.length; i++) {
    var tr = document.createElement("tr");
    tr.setAttribute("id", "tr");

    var td_img_box = document.createElement("td");
    var td_img = document.createElement("img");
    td_img.setAttribute("id", "queue_img");
    td_img.setAttribute("src", songs[i].img);
    td_img_box.appendChild(td_img);
    tr.appendChild(td_img_box);

    var td_name_box = document.createElement("td");
    var td_name = document.createElement("button");
    td_name.setAttribute("id", "queue_name");
    td_name.innerHTML = songs[i].songName;
    td_name.setAttribute("onClick", 'handlequeue( " ' + i + ' " )');
    td_name_box.appendChild(td_name);
    tr.appendChild(td_name_box);

    queue_list.appendChild(tr);
  }
}

document
  .getElementById("music-element")
  .setAttribute("src", songs[currently_playing].song);
