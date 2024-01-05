import { Outlet } from "react-router-dom"
import ProfileFunc from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props);
        console.log(" parent constructor")
    }

    componentDidMount(){
        console.log(" parent CompDidMount")
    }
    render(){
        console.log(" parent render")
        return(
        <>
        <h1>About Us !!!</h1>
        <p>Hello,Welcome to the About Page!!!!</p>

        <UserContext.Consumer>
            {/* {(value)=> {console.log(value)}} */}
            {({user}) => (
                <h4 className="font-bold text-xl p-10">
                   {user.name}-{user.email} 
                </h4>
            )}
        </UserContext.Consumer>

        {/* <ProfileFunc/> */}
        {/* <ProfileClass name={"first Child"} lastName={"thakur"} /> */}
        </>
            )
    }
}
export default About;