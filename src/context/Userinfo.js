import { useState } from "react"
import { createContext } from "react"

const userInforContex = createContext()
const UserinfoProvider = function({children}){
    const [userInfor,setUserinfor] = useState('Username')
    return(
        <userInforContex.Provider value={{userInfor,setUserinfor}}>
            {children}
        </userInforContex.Provider>
    )
}
export {userInforContex,UserinfoProvider}
