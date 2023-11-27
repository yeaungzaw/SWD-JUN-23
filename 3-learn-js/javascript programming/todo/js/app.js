import { addTask, getTasks, removeTask } from "./todo.js";

// selectors
export const app = document.querySelector("#app");
export const textInput = document.querySelector("#textInput");
export const addBtn = document.querySelector("#addBtn");
export const listGroup = document.querySelector("#listGroup");
export const listUiTemplate = document.querySelector("#listUi");


// Functions
const createList = (text, index) => {
    const listUi = listUiTemplate.content.cloneNode(true);
    listUi.querySelector(".list-text").innerText = text;
    listUi.querySelector("li").setAttribute("list-index", index);
    
    return listUi;
}

const listsRender = (lists) => {
    listGroup.innerHTML = "";
    lists.forEach((list, index) => listGroup.append(createList(list, index)));
}

// handlers
const addBtnHandler = () => {
    addTask(textInput.value);
    textInput.value = null;
    listsRender(getTasks());
}

const listGroupHandler = (event) => {
    if (event.target.classList.contains("list-del")) {
        const currentListIndex = event.target.closest("li").getAttribute("list-index");
        removeTask(currentListIndex);
        listsRender(getTasks());
    }
}


// listeners
addBtn.addEventListener("click", addBtnHandler);
listGroup.addEventListener("click", listGroupHandler);