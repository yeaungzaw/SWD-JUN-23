import "./index.css";
import Shop from "./src/Shop";
import { categoryBtn, categoryList } from "./src/core/selectors";

const shop = new Shop();
shop.init();

// const frg = document.createDocumentFragment();

// const h1 = document.createElement("h1");
// h1.innerText = "min ga lar par";
// const p = document.createElement("p");
// p.innerText = "san kyi tar par";

// frg.append(h1, p);
// console.log(frg);


// const cat1 = categoryBtn.content.cloneNode(true);
// const btn = cat1.querySelector("button");
// btn.innerText = "hello";
// const cat2 = categoryBtn.content.cloneNode(true);
// const btn2 = cat2.querySelector("button");
// btn2.innerText = "apple";

// categoryList.append(cat1, cat2);

// console.log(cat1);
// console.log(cat2); 