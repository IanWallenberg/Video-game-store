import "./ProductScreen.css";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

// ACTIONSSS
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({history}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => 
    state.getProductDetails);
  const {loading, error, product} = productDetails;

  // console.log(product);
  
  const {id} = useParams();
  useEffect(() => {
    
    dispatch(getProductDetails(id));
    console.log(id);
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

//   if(loading) { return (<h2>Loading</h2>);
// } else if(error) {
//   return (<h3>Error</h3>); 
// } else {
//   return ( 
  

  return (
  <div className="productscreen">
    {loading ? (
      <h2>Loading...</h2>
    ) : error ? (
      <h2>{error}</h2>
    ) : (
      <>
    
    <div className="productscreen__left">
      <div className="left__image">
<img src={product.imageUrl} 
alt={product.name} />
    </div>

    <div className="left__info">
<p className="left__name">{product.name}</p>
<p>Price: {product.price} kr</p>
<p>Description: {product.description}</p>
    </div>
    </div>
    <div className="productscreen__right">
<div className="right__info">
  <p>
    Price: <span>{product.price} kr </span>
  </p>
  <p>
    Status: {" "}
    <span>
      {product.countInStock > 0 ? "In Stock" : "Out of stock"}
      </span>
  </p>
  <p>
    Qty
    <select value={qty} onChange={(e) => setQty(e.target.value)}>
{[...Array(product.countInStock).keys()].map((x) => (
  <option key={x + 1} value={x + 1}>
  {x + 1}
  </option>
))}
{/* <option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option> */}
    </select>
  </p>
  <p>
    <button type="button" 
    onClick={addToCartHandler}
    >Add To Cart</button>
  </p>
</div>
    </div>
    </>
     )} 
 </div>
  )
};

export default ProductScreen