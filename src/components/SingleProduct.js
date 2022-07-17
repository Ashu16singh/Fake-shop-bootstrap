import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  {FontAwesomeIcon }from "@fortawesome/react-fontawesome";

const SingleProduct = () => {
  const [product, setProducts] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((product) => {
   setProducts(product);
      });
  }, [params.id]);

  return (
    <div className="container mx-auto mt-12">
      <a href="/" className=" btn btn-outline-dark mb-12 mt-5">
        Back
      </a>
      <div className="row">
        <div className="col flex">
          <img
            className="m-2 p-5"
            src={product.image}
            alt="product"
            height="500px"
            width="450px"
          />
        </div>
        <div className="col">
          <div className="mt-1 py-5">
          <h4>{product.title}</h4>
            <ul>
              <li className="mb-1">
                <h5>Category</h5><span style={{color:"#5F7161"}}>{product.category}</span> 
              </li>
              <li className="mb-1">
                <h5>Rating </h5>
               <span style={{color:"#5F7161"}}> {product.rating && product.rating.rate}</span> 
               <FontAwesomeIcon icon="solid star-sharp" />
              </li>
              <li>
                <h5>Description </h5>
                <span style={{color:"#5F7161"}}> {product.description}</span> 
              </li>
            </ul>
          </div>
          <div className="card p-1" style={{backgroundColor:"#F7EDDB"}}>
            <div className="mb-2 d-flex justify-content-around ">
              <h4>Price :</h4>
              <div>₹{product.price}</div>
            </div>
            <div className="text-center">
              <button  type="button" className="btn btn-outline-dark mb-2 ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
