import React, { Suspense, lazy, useEffect, useState } from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./reduxToolkit/appStore";
import Cart from "./components/Cart";
import 'font-awesome/css/font-awesome.min.css';


const AboutUs = lazy(() => import("./components/AboutUs"));

const AppLayout = () => {

    
    const[userName,setUserName] = useState();

    //authentication
    useEffect(()=>{
        //make an APi call to send username and password
        const data={
            name:""
        };
        setUserName(data.name);

    },[]);



    return(
        /**providing a store as a prop */ //we can access the username anywhere in the app
        <Provider store={appStore}> 
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    );

};

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading....</h1>}><AboutUs/></Suspense>
        
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restaurants/:resid",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }

        ],

        errorElement:<Error/>
    },
       

]);


const root = reactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);





