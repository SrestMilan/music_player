const music = document.querySelector("audio");
const playAudio = document.getElementById("play");
const img = document.querySelector("img");

playAudio.addEventListener("click", () => {
  music.play();
  playAudio.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
});
