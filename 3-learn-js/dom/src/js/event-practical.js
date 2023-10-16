const textChanger = document.querySelector("#textChanger");
const fontChanger = document.querySelector("#fontChanger");
const colorChanger = document.querySelector("#colorChanger");
const fontsizeChanger = document.querySelector("#fontsizeChanger");
const display = document.querySelector("#display");
const bold = document.querySelector("#bold");
const italic = document.querySelector("#italic");
const underline = document.querySelector("#underline");
const textLeft = document.querySelector("#textLeft");
const textCenter = document.querySelector("#textCenter");
const textRight = document.querySelector("#textRight");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");



const textChangerHandler = (event) => {
    // console.log(event.target.value);
    // display.innerText = event.target.value;

    display.innerText = textChanger.value;
}

const fontChangerHandler = (event) => {
    // console.log(event.target.value);
    display.style.fontFamily = event.target.value;
}

const colorChangerHandler = (event) => {
    display.style.color = event.target.value;
}

const fontsizeChangerHandler = (event) => {
    display.style.fontSize = event.target.value + "px";
}

const boldHandler = (event) => {
    event.target.classList.toggle("border-green-500");
    display.classList.toggle("font-bold");
    event.target.classList.add("transition", "duration-500");
}

const italicHandler = (event) => {
    event.target.classList.toggle("border-green-500");
    display.classList.toggle("italic");
    event.target.classList.add("transition", "duration-500");
}

const underlineHandler = (event) => {
    event.target.classList.toggle("border-green-500");
    display.classList.toggle("underline");
    event.target.classList.add("transition", "duration-500");
}

const textLeftHandler = (event) => {
    display.classList.remove("text-right");
    display.classList.remove("text-center");
    textCenter.classList.remove("border-blue-500");
    textRight.classList.remove("border-blue-500");
    display.classList.add("text-left");
    event.target.classList.toggle("border-blue-500");
    event.target.classList.add("transition", "duration-500");
}

const textRightHandler = (event) => {
    display.classList.remove("text-left");
    display.classList.remove("text-center");
    textCenter.classList.remove("border-blue-500");
    textRight.classList.remove("border-blue-500");
    display.classList.add("text-right");
    event.target.classList.add("border-blue-500");
    event.target.classList.add("transition", "duration-500");
}

const textCenterHandler = (event) => {
    display.classList.remove("text-left");
    display.classList.remove("text-right");
    textLeft.classList.remove("border-blue-500");
    textRight.classList.remove("border-blue-500");
    display.classList.add("text-center");
    event.target.classList.add("border-blue-500");
    event.target.classList.add("transition", "duration-500");
}

const uppercaseHandler = (event) => {
    display.classList.remove("lowercase");
    lowercase.classList.remove("border-red-500");
    display.classList.add("uppercase");
    event.target.classList.add("border-red-500");
}

const lowercaseHandler = (event) => {
    display.classList.remove("uppercase");
    uppercase.classList.remove("border-red-500");
    display.classList.add("lowercase");
    event.target.classList.add("border-red-500");
}

display.style.fontFamily = "Times New Roman";
textChanger.addEventListener("keyup", textChangerHandler);
fontChanger.addEventListener("change", fontChangerHandler);
colorChanger.addEventListener("change", colorChangerHandler);
fontsizeChanger.addEventListener("change", fontsizeChangerHandler);
bold.addEventListener("click", boldHandler);
italic.addEventListener("click", italicHandler);
underline.addEventListener("click", underlineHandler);
textLeft.addEventListener("click", textLeftHandler);
textCenter.addEventListener("click", textCenterHandler);
textRight.addEventListener("click", textRightHandler);
uppercase.addEventListener("click", uppercaseHandler);
lowercase.addEventListener("click", lowercaseHandler);