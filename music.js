// All the songs are stored in my local pc, hence they might not be working while running the code online
// therefore, if they are not getting play by just copying my code or while trying to run the code, change the songs as per to your needs
// Sorry for the inconvenience
const songs = [
  { title: "Animal_Abrar's Entry - Jamal Kudu", artist: "HARSHVARDHAN RAMESHWAR", src: "ANIMAL_ ABRAR’S ENTRY - JAMAL KUDU(Full Video) _Ranbir Kapoor,Bobby Deol _Sandeep Vanga _Bhushan K-yt.savetube.me.mp3" },
  { title: "Nacho Nacho Audio Track", artist: "M M Kreem", src: "Naacho Naacho Audio Track - RRR _ NTR, Ram Charan _ M M Kreem _ SS Rajamouli _ Vishal Mishra & Rahul-yt.savetube.me.mp3" },
  { title: "Why This Kolaveri Di", artist: "Dhanush, Anirudh R", src: "3 - Why This Kolaveri Di Official Video _ Dhanush _ Anirudh Ravichander _ Shruti Haasan-yt.savetube.me.mp3" },
  { title: "Ultimate Mashup", artist: "minLEE", src: "Shape of minLee - The Ultimate Mashup _ WATCHING Sky x minLee x Sayyad Khan-yt.savetube.me.mp3" },
  { title: "Paisa hai toh", artist: "Vishal Dadlani", src: "Paisa Hai Toh - Farzi _Sachin-Jigar, Vishal Dadlani, MellowD _Shahid Kapoor-yt.savetube.me.mp3" },
];

let currentSong = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playPauseBtn = document.getElementById("playPauseBtn");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const duration = document.getElementById("duration");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  title.textContent = song.title;
  artist.textContent = song.artist;
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  audio.play();
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  audio.play();
}

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  const format = s => String(Math.floor(s / 60)).padStart(2, '0') + ":" + String(Math.floor(s % 60)).padStart(2, '0');
  duration.textContent = `${format(audio.currentTime)} / ${format(audio.duration)}`;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});

audio.addEventListener("ended", () => {
  nextSong(); // autoplay
});

loadSong(currentSong);
