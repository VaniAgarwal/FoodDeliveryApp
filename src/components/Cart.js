import { useDispatch, useSelector } from "react-redux";
import ItemLists from "./ItemLists";
import { clearCart } from "../reduxToolkit/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    //dispatch an action
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());

    }
    return (
    <div className="text-center m-5 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 bg-black rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>No items Added. Add items to cart</h1>}
        <ItemLists items={cartItems}/>

        </div>
    </div>
    );
};
export default Cart;