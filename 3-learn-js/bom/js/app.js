// window.addEventListener("resize", () => {
//     console.clear();
//     console.log(window.innerWidth, window.innerHeight);
//     console.log(window.outerWidth, window.outerHeight);
// })

// window.addEventListener("online", () => {
//     console.log("you are online");
// })

// window.addEventListener("offline", () => {
//     console.log("you are offline");
// })

// const run = () => {
//     console.log("run");
// }

// window.setTimeout(run, 3000);
// window.setInterval(run, 3000);

const clock = document.querySelector("#clock");
const stopBtn = document.querySelector("#stopBtn");

// const currentTime = () => {
//     const date = new Date();
//     return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
// }

// const runner = setInterval(() => {
//     console.log(currentTime());
//     clock.innerText = currentTime();
// }, 1000)

// stopBtn.addEventListener("click", () => {
//     console.log(currentTime());
//     clearInterval(runner);
// })

// const runner = setTimeout(() => {
//     clock.innerText = "Hello time out"
// }, 3000);

// stopBtn.addEventListener("click", () => {
//     clearTimeout(runner);
// })


// const openGoogle = document.querySelector("#openGoogle");
// openGoogle.addEventListener("click", () => {
//     console.log("open");
//     window.open("https://google.com");
// })

// const closeGoogle = document.querySelector("#closeGoogle");
// closeGoogle.addEventListener("click", () => {
//     console.log("close");
//     window.close();
// })


// console.log(window.screen);