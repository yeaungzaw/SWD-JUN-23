import Swal from "sweetalert2";
import { products } from "../core/data";
import { cartBody, cartCostTotal, cartCountBadge, cartItem, productList } from "../core/selectors"

export const createCartItem = ({ id, image, title, price }) => {
    const clone = cartItem.content.cloneNode(true);
    const cartItemImg = clone.querySelector(".cart-item-img");
    const cartItemPrice = clone.querySelector(".cart-item-price");
    const cartItemTitle = clone.querySelector(".cart-item-title");

    clone.querySelector(".cart-item").setAttribute("cart-product-id", id);

    cartItemImg.src = image;
    cartItemPrice.innerText = price;
    cartItemTitle.innerText = title;

    return clone;

}

export const addToCart = (id) => {

    const currentProduct = products.find(product => product.id == id);
    // console.log(currentProduct);
    cartBody.append(createCartItem(currentProduct));

}

export const cartBodyHandler = (event) => {
    if (event.target.classList.contains("cart-item-del")) {
        // console.log("remove from cart");
        const currentCartItem = event.target.closest(".cart-item");
        const currentCartItemId = currentCartItem.getAttribute("cart-product-id");

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                currentCartItem.remove();
                const currentProductCard = app.querySelector(`[product-id='${currentCartItemId}']`);
                const currentProductCardBtn = currentProductCard.querySelector(".add-to-cart");
                currentProductCardBtn.innerText = "Add to Cart";
                currentProductCardBtn.classList.remove("bg-neutral-600", "text-white");
                currentProductCardBtn.disabled = false;


                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
}

export const cartObserver = () => {

    const process = () => {
        // console.log("new change in cart body ");
        cartCostTotal.innerText = calculateItemInCartCostTotal();
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
    return [...cartBody.querySelectorAll(".cart-item-price")].reduce(
        (prev, curr) => prev + parseFloat(curr.innerText), 0
    );
}

export const countItemInCart = () => {
    return cartBody.querySelectorAll(".cart-item").length;
}