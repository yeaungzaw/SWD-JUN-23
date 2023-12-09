import Swal from "sweetalert2";
import { products } from "../core/data";
import { cartBody, cartBodyCount, cartCostTotal, cartCountBadge, cartItem, productList } from "../core/selectors"

export const createCartItem = ({ id, image, title, price }) => {
    const clone = cartItem.content.cloneNode(true);
    const cartItemImg = clone.querySelector(".cart-item-img");
    const cartItemPrice = clone.querySelector(".cart-item-price");
    const cartItemCost = clone.querySelector(".cart-item-cost");
    const cartItemTitle = clone.querySelector(".cart-item-title");

    clone.querySelector(".cart-item").setAttribute("cart-product-id", id);

    cartItemImg.src = image;
    cartItemPrice.innerText = price;
    cartItemCost.innerText = price;
    cartItemTitle.innerText = title;

    return clone;

}

export const addToCart = (id) => {

    const currentProduct = products.find(product => product.id == id);
    // console.log(currentProduct);
    cartBody.append(createCartItem(currentProduct));

}

export const addedToCart = (btn) => {
    btn.classList.add("bg-neutral-600", "text-white");
    btn.innerText = "Added";
    btn.disabled = true;
}

export const removeFromCart = (id) => {
    const currentCartItem = cartBody.querySelector(`[cart-product-id = "${id}"]`);
    const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Confirm'
    }).then((result) => {
        if (result.isConfirmed) {
            currentCartItem.classList.add("animate__animated", "animate__hinge");
            currentCartItem.addEventListener("animationend", () => {
                currentCartItem.remove();

                const currentProductCard = app.querySelector(`[product-id='${currentCartItemId}']`);
                const currentProductCardBtn = currentProductCard.querySelector(".add-to-cart");
                currentProductCardBtn.innerText = "Add to Cart";
                currentProductCardBtn.classList.remove("bg-neutral-600", "text-white");
                currentProductCardBtn.disabled = false;
            })

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}

export const incrementQuantity = (id) => {
    // console.log("increment");

    const currentCartItem = cartBody.querySelector(`[cart-product-id='${id}']`);
    const quantity = currentCartItem.querySelector(".cart-item-quantity");
    const price = currentCartItem.querySelector(".cart-item-price");
    const cost = currentCartItem.querySelector(".cart-item-cost");

    quantity.innerText = parseInt(quantity.innerText) + 1;
    cost.innerText = (quantity.innerText * price.innerText).toFixed(2);
}

export const decrementQuantity = (id) => {
    // console.log("decrement");


    const currentCartItem = cartBody.querySelector(`[cart-product-id='${id}']`);
    const quantity = currentCartItem.querySelector(".cart-item-quantity");
    const price = currentCartItem.querySelector(".cart-item-price");
    const cost = currentCartItem.querySelector(".cart-item-cost");

    (quantity.innerText > 1) && (quantity.innerText = parseInt(quantity.innerText) - 1);
    cost.innerText = quantity.innerText * price.innerText;
}

export const cartBodyHandler = (event) => {
    if (event.target.classList.contains("cart-item-del")) {
        // console.log("remove from cart");
        const currentCartItem = event.target.closest(".cart-item");
        const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

        removeFromCart(currentCartItemId);

    } else if (event.target.classList.contains("cart-item-quantity-increment")) {
        const currentCartItem = event.target.closest(".cart-item");
        const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

        incrementQuantity(currentCartItemId);

    } else if (event.target.classList.contains("cart-item-quantity-decrement")) {
        const currentCartItem = event.target.closest(".cart-item");
        const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

        decrementQuantity(currentCartItemId);
    }
}

export const cartObserver = () => {

    const process = () => {
        // console.log("new change in cart body ");
        cartCostTotal.innerText = calculateItemInCartCostTotal().toFixed(2);
        cartBodyCount.innerText = countItemInCart();
        cartCountBadge.innerText = countItemInCart();
    }

    const options = {
        childList: true,
        subtree: true
    };

    const observer = new MutationObserver(process);
    observer.observe(cartBody, options);
}


export const calculateItemInCartCostTotal = () => {
    return [...cartBody.querySelectorAll(".cart-item-cost")].reduce(
        (prev, curr) => prev + parseFloat(curr.innerText),
        0
    );
}

export const countItemInCart = () => {
    return cartBody.querySelectorAll(".cart-item").length;
}