const list = (text) => {
    const li = document.createElement("li");
    const textNode = document.createTextNode(text);
    const delBtn = document.createElement("button");
    delBtn.innerText = "Del";

    li.append(delBtn);
    li.append(textNode);

    // delBtn.addEventListener("click", listDelHandler);
    delBtn.classList.add("del-list");

    return li;
}

// const listDelHandler = (event) => {
//     const currentList = event.target.closest("li");
//     confirm("Are you sure?") && currentList.remove();
// }

export default list;