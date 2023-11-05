import { categoryBtn, categoryList } from "../core/selectors";

export const createCategory = (title) => {
    // const category = document.createElement("div");
    // category.innerHTML = 
    // `
    //     <button class="category-btn whitespace-nowrap active border border-neutral-600 px-4 py-1">
    //         ${title}
    //     </button>
    // `;

    const clone = categoryBtn.content.cloneNode(true);
    const category = clone.querySelector("button");
    category.innerText = title;
    return category; 
}

export const categoryRender = (categoryArr) => {
    categoryArr.forEach(el => categoryList.append(createCategory(el)));
}