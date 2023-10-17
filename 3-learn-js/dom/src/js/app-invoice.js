// data
const products = [
    {
        id: 1,
        name: "Domain",
        price: 13,
    },

    {
        id: 2,
        name: "Hosting",
        price: 60,
    },


    {
        id: 3,
        name: "Design Package",
        price: 250,
    },


    {
        id: 4,
        name: "Web Development",
        price: 500,
    },
];



// selector

const app = document.querySelector("#app");
const addRecord = app.querySelector("#addRecord");
const recordList = app.querySelector("#recordList");
const productSelect = app.querySelector("[name='product_id']");
const costTotal = app.querySelector("#costTotal");
const costTax = app.querySelector("#costTax");
const netCost = app.querySelector("#netCost");

// function
// const createOption = (content, value) => {
//     const option = document.createElement("option");
//     option.innerText = content;
//     option.value = value;
//     return option;
// }


const createRecordRow = (id, productName, productPrice, quantity) => {
    const recordRow = document.createElement("tr");
    recordRow.className = "border-b border-neutral-200";
    recordRow.classList.add("record-row");
    recordRow.innerHTML = 
    `
        <td class="p-3"></td>
        <td class="p-3">${productName}</td>
        <td class="text-end p-3">${productPrice}</td>
        <td class="text-end p-3">${quantity}</td>
        <td class="text-end p-3 record-row-costs">${productPrice * quantity}</td>
    `;
    return recordRow;
}

const recordTotal = () => {
    const recordRowCosts = app.querySelectorAll(".record-row-costs");
    // let total = 0;
    // recordRowCosts.forEach((el) => total += parseFloat(el.innerText));
    // costTotal.innerText = total;
    costTotal.innerText = [...recordRowCosts].reduce((prev, curr) => prev + parseFloat(curr.innerText), 0);
}

const calcTax = (total, tax) => {
    costTax.innerText = (total * (tax / 100)).toFixed(2);
}

const calcNetCost = () => {
    netCost.innerText = parseFloat(costTotal.innerText) - parseFloat(costTax.innerText);
}

// handlers
const addRecordHandler = (event) => {
    event.preventDefault();

    // collect form data
    const formData = new FormData(addRecord);

    // find product
    // console.log(formData.get("product_id"), formData.get("quantity"));
    const {id, name, price} = products.find(product => product.id == formData.get("product_id"));
    recordList.append(createRecordRow(id, name, price, formData.get("quantity")));
    addRecord.reset();
    recordTotal();
    calcTax(costTotal.innerText, 5);
    calcNetCost();
}

// render
products.forEach(({name, id} )=> {
    productSelect.append(new Option(name, id));
})


// listener
addRecord.addEventListener("submit", addRecordHandler)