import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../utility/cartSlice";
import ItemList from "./ItemList";

const Cart = ()=>{
    const itemsData = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(emptyCart());
    }
    
    return(
        <div className="text-center m-4 p-4">
            <div className="text-2xl font-bold">Cart</div>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>{handleClick()}}>Clear Cart</button>
                <ItemList items={itemsData} />
            </div>
        </div>
    )
}

export default Cart;