// getting element of html through document
const music = document.querySelector("audio");
const playAudio = document.getElementById("play");
const musicTitle = document.getElementById("title");
const musicArtist = document.getElementById("artist");
const previousMusic = document.getElementById("back");
const forwardMusic = document.getElementById("next");
const img = document.querySelector("img");

// list of array of songs
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
  {
    name: "kgf",
    title: "Garaj Tu Baras Tu",
    artist: "Sucheta Basrur",
  },
];

let isPlayingMusic = false;

// method for pausing music
const pauseMusic = () => {
  isPlayingMusic = false;
  music.pause();
  playAudio.classList.replace("fa-pause", "fa-play");
};

// method  for playing music
const playMusic = () => {
  isPlayingMusic = true;
  music.play();
  playAudio.classList.replace("fa-play", "fa-pause");
};

// event handling for playing and pausing music
playAudio.addEventListener("click", () => {
  isPlayingMusic ? pauseMusic() : playMusic();
});

// triggering music artist, title and songs image and music
const loadSong = (songs) => {
  musicTitle.textContent = songs.title;
  musicArtist.textContent = songs.artist;
  music.src = "music/" + songs.name + ".mp3";
  img.src = "image/" + songs.name + ".jpg";
};

// initial index number of song
songIndexNum = 0;

const nextSong = () => {
  songIndexNum = (songIndexNum + 1) % songs.length; // forward music
  loadSong(songs[songIndexNum]); // load music according to index of array
  playMusic();
};
const prevSong = () => {
  songIndexNum = (songIndexNum - 1 + songs.length) % songs.length; // previous music
  loadSong(songs[songIndexNum]); // load music according to index of array
  playMusic();
};

// handling events for forward and previous of music
forwardMusic.addEventListener("click", nextSong);
previousMusic.addEventListener("click", prevSong);
