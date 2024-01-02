const music = document.querySelector("audio");
const playAudio = document.getElementById("play");
const musicTitle = document.getElementById("title");
const musicArtist = document.getElementById("artist");
const previousMusic = document.getElementById("previous");
const forwardMusic = document.getElementById("next");
const img = document.querySelector("img");

const songs = [
  {
    name: "bolona",
    title: "Bolona",
    artist: "Medha Shankar",
  },
  {
    name: "salaar",
    title: "Sooraj Hi Chhaon Banke",
    artist: "Menuka Poudel",
  },
];

let isPlayingMusic = false;
const pauseMusic = () => {
  isPlayingMusic = false;
  music.pause();
  playAudio.classList.replace("fa-pause", "fa-play");
};
const playMusic = () => {
  isPlayingMusic = true;
  music.play();
  playAudio.classList.replace("fa-play", "fa-pause");
};

playAudio.addEventListener("click", () => {
  isPlayingMusic ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
  musicTitle.textContent = songs.title;
  musicArtist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "image/" + songs.name + ".jpg";
};

loadSong[songs[0]];
