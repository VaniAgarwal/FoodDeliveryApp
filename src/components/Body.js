import RestaurantCard, {withOpenedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = ()=>{

   const [listOfRestaurants,setListOfRestaurants] = useState([]);
   const [filteringRestaurant,setFilteringRestaurant] = useState([]);
   const [searchText,setSearchText] = useState("");

   //console.log("list of restaurants" , listOfRestaurants);

   const RestaurantCardOpened = withOpenedLabel(RestaurantCard);
   


    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4148368&lng=78.4851396&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);
        setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteringRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>
                Looks like you are offline. Please check your internet connection.
            </h1>
        )
    };

    const{loggedInUser,setUserName}  = useContext(UserContext);

    //conditional rendering => rendering on the basis of condition
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="flex items-center">
            <div className="search m-4 p-4">
            <input type="text" 
            className="border border-solid border-gray-500 outline-none px-2 py-1 rounded-md"
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className="px-2 py-1 bg-green-100 mx-2 rounded-md" onClick={()=>{
                const filteredRestaurents = listOfRestaurants.filter(
                    (filteres)=> filteres.info.name.toLowerCase().includes(searchText.toLowerCase())

                );
                setFilteringRestaurant(filteredRestaurents);
            }}
            >Search</button>

            </div>
            <div>
            <button className="bg-green-100 px-2 py-1 rounded-md m-4 p-4" 
            onClick={()=>{
                const filteredList = listOfRestaurants.filter(
                    (res)=>res.info.avgRating > 4
                    );
                setFilteringRestaurant(filteredList);
                //console.log("filteres",filteredList);

            }}
            >Top Rated Restaurants</button>
            </div>

            <label className="mx-1">UserName : </label>
            <input className="border border-black px-2" 
                   value={loggedInUser}
                   onChange={(e) => setUserName(e.target.value)}

                   />
            
            </div>
            <div className="res-container flex flex-wrap items-center">
            {
                filteringRestaurant.map(restaurant => (
                    <Link key={restaurant.info.id} 
                    to={"/restaurants/" + restaurant.info.id}
                    >
                    {/**If the restaurant is promoted then add a promoted label to it */}

                    {restaurant.info.sla.deliveryTime < 25 ? (<RestaurantCardOpened resData={restaurant}/>) :
                    ( <RestaurantCard  resData={restaurant}/> )
                    }
                    
                    </Link>
            ))}
            </div>
        </div>
    );
};

export default Body;