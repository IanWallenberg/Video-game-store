import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({click}) => {
    // if clicked open up sidedrawer

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }
    return (
    <nav className="navbar">
    <div className="navbar__logo">
    <Link to="/">
        <h2>Ian's Old School Games</h2></Link> 
</div>

<ul className="navbar__links">
    <li>
        <Link to="/cart" className="cart__link">
           <i className="fas fa-shopping-cart"></i>
           <span>Cart
            <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
        </Link>
    </li>
</ul>

<div className="hamburger__menu" onClick={click}>
    <div></div>
    <div></div>
    <div></div>
    </div>
        </nav>
    )
}

export default Navbar;