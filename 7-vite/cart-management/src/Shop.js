import { cartBodyHandler, cartObserver } from "./app/cart";
import { categoryListHandler, categoryRender } from "./app/category";
import { productListHandler, productRender } from "./app/product";
import { categories, products } from "./core/data";
import { cartBtnHandler } from "./core/handlers";
import { cartBody, cartBtn, cartCloseBtn, categoryList, productList } from "./core/selectors";

class Shop {

    observer() {
        cartObserver();
    }

    initialRender() {
        categoryRender(categories);
        productRender(products);
    }

    listener() {
        cartBtn.addEventListener("click", cartBtnHandler);
        cartCloseBtn.addEventListener("click", cartBtnHandler);
        productList.addEventListener("click", productListHandler);
        cartBody.addEventListener("click", cartBodyHandler);
        categoryList.addEventListener("click", categoryListHandler);
    }

    init() {
        console.log("Shop App Start");
        this.observer();
        this.initialRender();
        this.listener();
    }

}

export default Shop;