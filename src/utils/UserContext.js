import { createContext } from "react";

const UserContext = createContext({
    user:{
        name :"dummy name",
        email : "dummymail@mail.com"
    }
})

UserContext.displayName ="user-context"

export default UserContext