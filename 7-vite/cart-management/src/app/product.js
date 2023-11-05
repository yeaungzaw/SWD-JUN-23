import { products } from "../core/data";
import { cartBody, productCard, productList } from "../core/selectors"
import { addToCart, createCartItem } from "./cart";

export const createProductCard = ({ id, title, price, description, image, rating: { rate, count } }) => {
    const clone = productCard.content.cloneNode(true);
    const productCardUi = clone.querySelector(".product-card");
    productCardUi.setAttribute("product-id", id);
    const productCardTitle = productCardUi.querySelector(".product-card-title");
    const productCardDescription = productCardUi.querySelector(".product-card-description");
    const productCardImg = productCardUi.querySelector(".product-card-img");
    const productCardPrice = productCardUi.querySelector(".product-card-price .price");
    const productCardRating = productCardUi.querySelector(".rating-text");
    const productCardRatingStars = productCardUi.querySelector(".rating-stars");
    const addToCart = productCardUi.querySelector(".add-to-cart");

    productCardTitle.innerText = title;
    productCardDescription.innerText = description;
    productCardImg.src = image;
    productCardPrice.innerText = price;
    productCardRating.innerText = `(${rate} / ${count})`;
    // productCardRatingStars.innerHTML = stars(rate);
    productCardRatingStars.append(stars(rate));


    return productCardUi;
}

export const productRender = (productArr) => {
    productArr.forEach(el => productList.append(createProductCard(el)));
}

export const stars = (rate) => {
    const div = document.createElement("div");
    div.classList.add("flex", "gap-1");

    for (let i = 0; i < 5; i++) {
        const clone = ratingStar.content.cloneNode(true);
        const starUi = clone.querySelector(".star");
        i < Math.round(rate) && starUi.classList.add("fill-orange-400");
        div.append(starUi);
    }
    return div;
}

// export const stars = (rate) => {
//     let starUi = "";

//     for (let i = 0; i < 5; i++) {
//         starUi += `
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//             stroke="currentColor" class="star w-6 h-6 stroke-orange-400 ${i < rate.toFixed(0) && "fill-orange-400"}">
//             <path stroke-linecap="round" stroke-linejoin="round"
//                 d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//             </svg>
//         `;
//     }

//     return starUi;
// }

export const productListHandler = (event) => {
    if (event.target.classList.contains("add-to-cart")) {
        event.target.classList.add("bg-neutral-600", "text-white", "duration-300");
        event.target.disabled = true;
        event.target.innerText = "Added";
        const currentProductCard = event.target.closest(".product-card");
        const currentProductId = currentProductCard.getAttribute("product-id");
        const currentProduct = products.find(el => el.id == currentProductId);
        // console.log(currentProductCard);
        // console.log(currentProductId);
        // console.log(currentProduct);

        addToCart(currentProductId);
    }
}