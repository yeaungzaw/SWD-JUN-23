// const textInput = document.querySelector('#textInput');
// console.log(textInput);

// textInput.onfocus = () => {
//     console.log('focus');
// }

// textInput.onblur = () => {
//     console.log('blur');
// }

// textInput.addEventListener('focus', () => {
//     console.log('focus');
// })

// textInput.addEventListener('blur', () => {
//     console.log('blur');
// })

// const heading = document.querySelector('#heading');

// heading.addEventListener('mouseover', () => {
//     console.log('mouse over');
// })

// heading.addEventListener('mouseout', () => {
//     console.log('mouse out');
// })

// heading.addEventListener('mousemove', () => {
//     console.log('mouse move');
// })

// const fileInput = document.querySelector("#fileInput");

// fileInput.addEventListener("change", () => {
//     console.log(fileInput.files);
// })

// const testForm = document.querySelector('#testForm');
// const mmsLink = document.querySelector('#mmsLink');
// // console.log(testForm);

// testForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // console.log(event);
//     // console.log('U submit');

//     const formData = new FormData(testForm);
//     console.log(formData);

//     formData.append("salary", 1200);

//     console.log(formData.get("your_name"));
//     console.log(formData.get("your_bd"));
//     console.log(formData.get("salary"));

//     console.log(formData.has("your_name"));

//     testForm.reset();
// })

// mmsLink.addEventListener('click', (event) => {
//     console.log(event);
//     event.preventDefault();
//     console.log('U click link');
// })


// window.addEventListener("scroll", () => {
//     console.log("U scroll");
//     console.log(window.scrollY);
// })


// document.addEventListener("mousemove", (event) => {
//     console.clear(event);
//     console.log(event);
// })


// document.addEventListener("click", (event) => {
//     console.log(event.target);
// })

const btn = document.querySelector("#btn");

// const displayConsole = () => {
//     console.log("Hello Hello");
// }

// btn.addEventListener("click", displayConsole);
// btn.addEventListener("dblclick", () => {
//     console.log("remove event listener");
//     btn.removeEventListener("click", displayConsole);
// });

const layer1 = document.querySelector("#layer1");
const layer2 = document.querySelector("#layer2");
const layer3 = document.querySelector("#layer3");



layer1.addEventListener("click", () => {
    console.log("U click layer1");
})

layer2.addEventListener("click", () => {
    console.log("U click layer2");
})

layer3.addEventListener("click", () => {
    console.log("U click layer3");
})

btn.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("U click btn");
})