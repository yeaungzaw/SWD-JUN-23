const speakBtn = document.querySelector("#speakBtn");
const textInput = document.querySelector("#textInput");

const speakBtnHandler = () => {
    // console.log(textInput.value);

    const config = new SpeechSynthesisUtterance(textInput.value);
    // config.rate = 0.5;
    // config.pitch = 1.5
    // config.volume = 0.2;
    speechSynthesis.speak(config);
}


speakBtn.addEventListener("click", speakBtnHandler);