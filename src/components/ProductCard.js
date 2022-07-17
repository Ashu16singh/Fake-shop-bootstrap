import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <>
     <div className="col-md-3 mb-4 ">
        <div className="card h-100 text-center p-4">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="product" height="250px" width="200px" />
          </Link>
          <div className="card-body">
            <h5 className="card-title mb-0 ">
              {product.title.substring(0, 12)}
            </h5>
            <p className="card-text mt-1 py-1">₹{product.price}</p>
          </div>
          <button href="/" className="btn btn-outline-dark">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
