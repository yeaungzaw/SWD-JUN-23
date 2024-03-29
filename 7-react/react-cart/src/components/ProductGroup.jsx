import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import Product from "./Product";
import { productApi } from "../api/product";
import ProductLoader from "./ProductLoader";
import { DataContext } from "../context/DataContext";

const ProductGroup = () => {
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const productLoaders = Array.from({ length: 6 }, (_, index) => index);
  const { currentCategory, input } = useContext(DataContext);

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await productApi.get("/");
      setProducts(res.data);
      setReady(true);
    };
    fetchProductData();
  }, []);

  return (
    <section className="product-list mb-10">
      <Container>
        <div
          id="productList"
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {!ready &&
            productLoaders.map((loader) => <ProductLoader key={loader} />)}

          {ready &&
            products
              .filter(
                (product) =>
                  (currentCategory === "All" ||
                    product.category === currentCategory) &&
                  (input.trim() === "" ||
                    product.title.toLowerCase().search(input) != -1 ||
                    product.description.toLowerCase().search(input) != -1)
              )
              .map((product) => <Product key={product.id} product={product} />)}
        </div>
      </Container>
    </section>
  );
};

export default ProductGroup;
