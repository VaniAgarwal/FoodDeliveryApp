import { useState } from "react";
import ItemLists from "./ItemLists";

const RestaurantCategory = ({data,showItems,setShowIndex,dummyData})=>{

    
    const handleClick = ()=>{
       setShowIndex();
        
    }
    
    return(
        <div>
        {/**accordian Header */}
        <div className="w-6/12 mx-auto my-2 bg-pink-50 shadow-xl">
            <div className="flex justify-between cursor-pointer h-10" onClick={handleClick}>
                <span className="font-bold text-lg text-gray-600">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
        {showItems && <ItemLists items={data.itemCards}
                                 dummyData={dummyData}/>}
        </div>
        
        {/**accordian Body */}

        

        </div>
    )

}
export default RestaurantCategory;