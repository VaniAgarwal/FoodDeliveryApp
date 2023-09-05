import React, { startTransition } from "react";



class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state  = {
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatarUrl:"http://www.dummy.com"
            }
            

        };
       // console.log("loaded with data");

       // console.log("constructor called");
        
    }

    async componentDidMount(){
        //console.log("componentDidMount");
        const data = await fetch("https://api.github.com/users/VaniAgarwal");
        const json = await data.json();

        

        this.setState({
            userInfo:json
        })
       
        
       // console.log(json);

        

    }
    componentDidUpdate(){
        //console.log("component did update");
    }

    componentWillUnmount(){
        //console.log("componenet will unmount");
    }

    render(){

        //console.log("render called");
        const {name, location,bio,avatar_url} = this.state.userInfo;
        
        return(
            <div className="user-card">  
                <img src={avatar_url} alt="" />            
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>{bio}</h3>
                
               
            </div>
        )
    }

}

export default UserClass;