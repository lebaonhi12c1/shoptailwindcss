import { useState } from "react";
import { createContext} from "react";

const productContext = createContext()
const ProductProvider = function({children}){
    const [product,setProduct] = useState({
        id : 0,
        img : '',
        backimg: '',
        size: 'M',
        bgClass: 'bg-gray-600',
        price: 70,
        count: 1
    })
    return (
        <productContext.Provider value={{product,setProduct}}>
            {children}
        </productContext.Provider>
    )
}
export {productContext,ProductProvider}