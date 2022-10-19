import { useState } from "react";
import { createContext } from "react";
const userContext = createContext()
const UserProvider = function({children}){
    const [user,setUser] = useState([
        {
            username: 'lebaonhi',
            userpass: 'lebaonhi'
        },
    ])
    const value = {
        user,
        setUser
    }
    console.log(value)
    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}
export {userContext,UserProvider}