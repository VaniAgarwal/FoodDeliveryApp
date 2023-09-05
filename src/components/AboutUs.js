
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


const AboutUs = (props)=>{

    return(
        <div>
            
            <UserContext.Consumer>
                {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
            </UserContext.Consumer>
            <UserClass name="Vani Agarwal(Class)" location="Hyderabad" contact="84465565"/>
        </div>
    )
}
export default AboutUs;