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
const manageProduct = app.querySelector("#manageProduct");
const manageProductBox = app.querySelector("#manageProductBox");
const closeManageProductBox = app.querySelector("#closeManageProductBox");

// function
// const createOption = (content, value) => {
//     const option = document.createElement("option");
//     option.innerText = content;
//     option.value = value;
//     return option;
// }


const createRecordRow = (id, productName, productPrice, quantity) => {
    const recordRow = document.createElement("tr");
    recordRow.className = "border-b border-neutral-200 group";
    recordRow.classList.add("record-row");
    recordRow.setAttribute("product-id", id);
    recordRow.innerHTML = 
    `
        <td class="p-3"></td>
        <td class="p-3">${productName}</td>
        <td class="text-end p-3 record-row-price">${productPrice}</td>
        <td class="text-end p-3 align-middle">
            <button class="record-row-decrement-q bg-neutral-500 aspect-square h-4 leading-4 text-white opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>     
            </button>
            <span class="record-row-q mx-1">${quantity}</span>
            <button class="record-row-increment-q bg-neutral-500 aspect-square h-4 leading-4 text-white opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </td>
        <td class="text-end p-3 relative">
            <span class="record-row-cost">
                ${productPrice * quantity}
            </span>
            <button class="record-row-del opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-x-full duration-300 bg-neutral-500 p-2 aspect-square flex justify-center items-center absolute top-0 bottom-0 right-0 translate-x-[120%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"      stroke="currentColor" class="w-4 h-4 stroke-white pointer-events-none">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg> 
            </button>
        </td>
    `;

    // const recordRowDel = recordRow.querySelector(".record-row-del");
    // recordRowDel.addEventListener("click", recordRowDelHandler);

    return recordRow;
}

const recordTotal = () => {
    const recordRowCosts = app.querySelectorAll(".record-row-cost");
    // console.log(recordRowCosts);
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

const recordRowQuantityIncrement = (productId, quantity = 1) => {
    const currentRecordRow = app.querySelector(`[product-id = '${productId}']`);
    const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
    const currentRecordRowCost = currentRecordRow.querySelector(".record-row-cost");
    const currentRecordRowPrice = currentRecordRow.querySelector(".record-row-price");
    currentRecordQuantity.innerText = parseInt(currentRecordQuantity.innerText) + parseInt(quantity);
    currentRecordRowCost.innerText = currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
    recordTotal();
    calcTax(costTotal.innerText, 5);
    calcNetCost();
}

const recordRowQuantityDecrement = (event) => {
    const currentRecordRow = event.target.closest(".record-row");
    const currentRecordQuantity = currentRecordRow.querySelector(".record-row-q");
    const currentRecordRowCost = currentRecordRow.querySelector(".record-row-cost");
    const currentRecordRowPrice = currentRecordRow.querySelector(".record-row-price");
    currentRecordQuantity.innerText = parseInt(currentRecordQuantity.innerText) - 1;
    currentRecordRowCost.innerText = currentRecordQuantity.innerText * currentRecordRowPrice.innerText;
    recordTotal();
    calcTax(costTotal.innerText, 5);
    calcNetCost();
}



const recordRowDelHandler = (event) => {
    const recordRow = event.target.closest(".record-row");
    if (confirm("Are you sure to delete this row?")) {
        recordRow.remove();
        recordTotal();
        calcTax(costTotal.innerText, 5);
        calcNetCost();
    }
}

const addRecordHandler = (event) => {
    event.preventDefault();

    // collect form data
    const formData = new FormData(addRecord);

    // find product
    // console.log(formData.get("product_id"), formData.get("quantity"));
    const {id, name, price} = products.find(product => product.id == formData.get("product_id"));

    const isExistedRow = [...app.querySelectorAll("[product-id]")].find((el) =>  {
        return el.getAttribute("product-id") == formData.get("product_id");
    }); 

    if (isExistedRow) {
        // console.log("update quantity");
        recordRowQuantityIncrement(formData.get("product_id"), formData.get("quantity"));        
    } else {
        // console.log("Add new row");
        recordList.append(createRecordRow(id, name, price, formData.get("quantity")));
    }

    addRecord.reset();
    recordTotal();
    calcTax(costTotal.innerText, 5);
    calcNetCost();
}

const manageProductHandler = () => {
    manageProductBox.classList.toggle("translate-x-full");
    manageProductBox.classList.add("duration-300");
}

// render
products.forEach(({name, id} )=> {
    productSelect.append(new Option(name, id));
})


// listener
addRecord.addEventListener("submit", addRecordHandler);
recordList.addEventListener("click", (event) => {
    // console.log("U click record List");

    const currentRecordRow = event.target.closest(".record-row");

    if (event.target.classList.contains("record-row-del")) {
        recordRowDelHandler(event);
    } else if (event.target.classList.contains("record-row-increment-q")) {
        recordRowQuantityIncrement(currentRecordRow.getAttribute("product-id"));
    } else if (event.target.classList.contains("record-row-decrement-q")) {
        recordRowQuantityDecrement(event);
    }
});

manageProduct.addEventListener("click", manageProductHandler);

closeManageProductBox.addEventListener("click", manageProductHandler);