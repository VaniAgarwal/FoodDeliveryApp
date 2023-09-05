import { useDispatch } from "react-redux";
import { addItem } from "../reduxToolkit/cartSlice";
import { CDN_URL } from "../utils/constants";


const ItemLists = ({items,dummyData})=> {
    // console.log(items);
    // console.log(dummyData);
    const dispatch = useDispatch();

    const addItemsToCart = (item)=>{
        //dispatch an action
        dispatch(addItem(item));
    }
    console.log(addItemsToCart);

    return (
        <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
            <div className="w-9/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> 
                    - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    
                </div>
                <p className="text-sm text-gray-500">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                
                <button className="p-2 mx-12 bg-slate-800 text-white shadow-lg absolute m-auto rounded-lg cursor-pointer"
                onClick={() => addItemsToCart(item)}
                
                >ADD +</button>
                <img src={CDN_URL+item.card.info.imageId} className="w-full rounded-lg shadow-md shadow-slate-700"/>
                
            </div>
            </div>

        ))}

        </div>

    )
}
export default ItemLists;