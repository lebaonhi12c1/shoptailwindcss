import { useState } from "react";
import { createContext } from "react";

const MainContext = createContext()
const MainProvider = function({children}){
    const [isLogin,setIslogin] = useState(false)
    const [totalPrice,setTotalPrice] = useState(1)
    return <MainContext.Provider value={{isLogin,setIslogin,totalPrice,setTotalPrice}}>
        {children}
    </MainContext.Provider>
}
export {MainProvider,MainContext}