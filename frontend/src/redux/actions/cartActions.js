import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);

    //Notes about Thunk: The only thing I left out of that little code snippet is that 
    // Redux will pass two arguments to thunk functions: dispatch, so 
    // that they can dispatch new actions if they need to; and getState, 
    // so they can access the current state. So you can do things like this:



    // - You use axios. get(url) with a URL from an API endpoint
    //  to get a promise which returns a response object. Inside 
    //  the response object, there is data that is then assigned 
    //  the value of person . You can also get other information 
    //  about the request, such as the status code under res


    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cart', 
    JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) =>
{ dispatch ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id
})

localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}
