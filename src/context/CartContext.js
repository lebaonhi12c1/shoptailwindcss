
import { useReducer } from "react";
import { createContext } from "react";
const initState = {
    product: [],
    count: 0,
    total: 0,
}
const cartReducer = function (state = initState, action) {
    switch (action.type) {
        case 'cart/addProduct':
            return {
                ...state,
                product: [...state.product, action.payload],
                count: state.count + 1,
                total: state.total + action.payload.product.price * action.payload.count,
            }
        case 'cart/nextProductCount':
            return {
                ...state,
                product: state.product.map((item, index) => {
                    return action.payload === index ? { ...item, count: item.count + 1 } : item
                }),
            }
        case 'cart/preProductCount':
            return {
                ...state,
                product: state.product.map((item, index) => {
                    return action.payload === index && item.count > 1 ? { ...item, count: item.count - 1 } : item
                }),
            }
        case 'cart/totalCart':
            return {
                ...state,
                total: state.product.reduce(function(sum,item){return sum += item.product.price * item.count},0)
            }
        case 'cart/deleteProduct':
            return {
                ...state,
                product: state.product.filter(function(item,index){
                    return index !== action.payload
                }),
                count: state.count - 1
            }
        default:
            return state
    }
}
const cartContext = createContext()
const CartProvider = function ({ children }) {
    const [carts, dispatch] = useReducer(cartReducer, initState)
    return (
        <cartContext.Provider value={{ carts, dispatch }}>
            {children}
        </cartContext.Provider>
    )
}
export { cartContext, CartProvider }