const addListBtn = document.querySelector("#addListBtn");
const runTaskBtn = document.querySelector("#runTaskBtn");
const listGroup = document.querySelector("#listGroup");

const worker = new Worker("./js/worker.js");
// console.log(worker);

const createList = () => {
    const li = document.createElement("li");
    li.innerText = "List - " + Math.random();
    return li;
}

const addListBtnHandler = () => {
    listGroup.append(createList());
}

addListBtn.addEventListener("click", addListBtnHandler);

runTaskBtn.addEventListener("click", () => {
    // console.log(intensiveTask());
    worker.postMessage("haha");
})

worker.addEventListener("message", (message) => {
    console.log(message.data);
}) 