import { useEffect, useState } from "react"
const Profile = (props)=>{
    const [count,setCount] = useState(0)

    useEffect(()=>{
        // const timer = setInterval(()=>{
        //     console.log("FUNC")
        // },1000)

        return()=>{
            clearInterval(timer)
            console.log("end")
        }
    },[])

    return(
        <div>

        <h1>Hello {props.name}, func Profile</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=> {
            setCount(1)
        }}>Count</button>
        </div>
    )
}
export default Profile