import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(" https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewellery</button>
        <button className="btn btn-outline-dark me-2">Electronic</button>
      </div>
      <div className="container py-5 ">
        <div className="row">
          <div className="col-12 mb-5">
            <h2 className="text-center">Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
