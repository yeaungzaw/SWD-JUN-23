// selector
// const body = document.querySelector("body");

// console.dir(document);
// console.log(document.body);
// console.log(document.title);


// create p element
// const p = document.createElement("p");
// p.style.color = "red";
// p.style.backgroundColor = "black";
// p.style.padding = "10px";
// p.className = "bg-black text-red-600 p-5";
// p.classList.add("bg-black", "text-red-600", "p-5");
// p.innerText = "san kyi tar par";

// add p element to body
// body.append(p);
// document.body.append(p);


// p element to body 
// document.body.append(p);



const app = document.createElement("main");
app.classList.add("p-5", "border-4", "m-5");

const heading = document.createElement("h1");
heading.innerText = "Todo App";
heading.classList.add("font-serif", "text-3xl", "font-bold");

const para = document.createElement("p");
para.innerText = "Education Purpose only for our students";
para.classList.add("text-stone-600", "mb-5");

const lists = document.createElement("ul");
lists.classList.add("mb-10");

// DRY

const createList = (listText) => {
    const list = document.createElement("li");
    list.classList.add(
    "bg-indigo-100",
    "p-2",
    "border-l-4",
    "border-indigo-400", 
    "mb-3"
    );
    list.innerText = listText;
    return list;
}

// lists.append(createList("1. To read Documentation"));
// lists.append(createList("2. More practice"));
// lists.append(createList("3. Sleep Well"));

lists.prepend(createList("1. To read Documentation"));
lists.prepend(createList("2. More practice"));
lists.prepend(createList("3. Sleep Well"));

// const list1 = document.createElement("li");
// list1.innerText = "To read Documentation";

// const list2 = document.createElement("li");
// list2.innerText = "More practice";

// const list3 = document.createElement("li");
// list3.innerText = "Sleep Well";

// lists.append(list1);
// lists.append(list2);
// lists.append(list3);

const box = document.createElement("div");

const textInput = document.createElement("input");
textInput.classList.add("border", "mr-2", "py-2", "px-4", "rounded");

const addBtn = document.createElement("button");
addBtn.innerText = "Add New"; 
addBtn.classList.add("bg-indigo-500", "py-2", "px-4", "text-white", "rounded");

box.append(textInput);
box.append(addBtn);

document.body.append(app);
// app.append(heading);
// app.append(para);
// app.append(lists);
// app.append(box);

app.append(lists);
lists.before(heading);
heading.after(para);
lists.after(box);