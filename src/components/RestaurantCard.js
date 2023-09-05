import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=>{
    const {resData} = props;
    // const{loggedInUser} = useContext(UserContext);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;
    // console.log(resData);
    
    return (
        <div className="m-4 p-4 w-[220px] h-1/6 min-h-full bg-slate-100 rounded-md hover:bg-slate-300 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out " >
        <img className="rounded-md w-52 h-32" 
        src={CDN_URL + cloudinaryImageId}
        alt="res-img" />
         <h4 className="font-bold opacity-70 py-2 text-lg">{name}</h4><br/>
         <h5 className="text-clip overflow-hidden ... my-2">{cuisines.join(",")}</h5>
         <h5 className="">{avgRating} stars</h5>
         <h5>{costForTwo}</h5>
         <h5>{sla.deliveryTime} minutes</h5>
         {/* <h5>{loggedInUser}</h5> */}
        </div>
    );

};

export const withOpenedLabel = (RestaurantCard) =>{
    return(props) =>{
        return(
            <div>
                <label className="absolute bg-green-300 text-black m-2 p-2 rounded-md">Nearest</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }

}

export default RestaurantCard;