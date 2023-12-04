import { Outlet } from "react-router-dom"
import ProfileFunc from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

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
        {/* <ProfileFunc/> */}
        <ProfileClass name={"first Child"} lastName={"thakur"} />
        </>
            )
    }
}
export default About;