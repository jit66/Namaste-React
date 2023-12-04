import React from "react"

class Profile extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
        this.state = {
            userInfo:{
                name:"",
                location:" "
            }
        }
        console.log(this.state)
        console.log("child constructor " + this.props.name)
    }

    //  async componentDidMount(){
    //     const data = await fetch(" https://api.github.com/users/jit66")
    //     const json = await data.json();
    //     console.log(json)
    //     this.setState({
    //         userInfo:json
    //     })
    //     console.log("child didMount")
    // }

    componentDidMount(){
        this.timer = setInterval(()=>{
            // console.log("hello")
        },1000)
    }

    componentDidUpdate(){
        console.log("didUpdate")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("willUnmount")
    }
    render(){
            console.log(" child render")
            return(
                <div>
                <h1>hello CLass Profile</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>location: {this.state.userInfo.location}</h2>
                <img src={this.state.userInfo.avatar_url}/>
                </div>
            )
    }
}

export default Profile