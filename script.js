const music = document.querySelector("audio");
const playAudio = document.getElementById("play");

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
