const playBtn = document.querySelector("#playBtn");
const stopBtn = document.querySelector("#stopBtn");
const repeatBtn = document.querySelector("#repeatBtn");

const url = "./audios/to_the_bone.mp3";
const audio = new Audio(url);

playBtn.addEventListener("click", () => {
    audio.play();
})


stopBtn.addEventListener("click", () => {
    audio.pause();
})

audio.addEventListener("play", () => {
    console.log("U play the song");
})
    
audio.addEventListener("pause", () => {
    console.log("U pause the song");
})


repeatBtn.addEventListener("click", () => {
    audio.addEventListener("ended", () => {
        audio.play();
    })
})