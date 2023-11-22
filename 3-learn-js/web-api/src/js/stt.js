const textInput = document.querySelector("#textInput");
const micLoader = document.querySelector("#micLoader");
const micBtn = document.querySelector("#micBtn");

micBtn.addEventListener("click", () => {

    const reg = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    reg.start();

    reg.addEventListener("start", () => {
        console.log("start recording");
        micLoader.classList.remove("hidden");

    })

    reg.addEventListener("result", (event) => {
        textInput.value = event.results[0][0].transcript;
    })

    reg.addEventListener("end", () => {
        console.log("end recording");
        micLoader.classList.add("hidden");
    })
})