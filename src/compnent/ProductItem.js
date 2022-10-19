import { useContext, useState } from "react"
import '../sassStyle/productStyle.scss'
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import Favorite from "@mui/icons-material/Favorite"
import IconButton from '@mui/material/IconButton'
import { Link } from 'react-router-dom'
import { productContext } from "../context/ProductContext"
import { MainContext } from "../context/Contextapi"
import { cartContext } from "../context/CartContext"
export default function ProductItem(props) {
    const item = props.item
    const { index } = props
    const { product, setProduct } = useContext(productContext)
    const [background, setBackground] = useState(item.img)
    const [ishidden, sethidden] = useState('hidden')
    const [isOpen, setOpen] = useState(false)
    const { isLogin } = useContext(MainContext)
    const {dispatch} = useContext(cartContext)
    const handleEnter = function (e) {
        setBackground(item.backimg)
        sethidden('')
    }
    const handleLeave = function () {
        setBackground(item.img)
        sethidden('hidden')
    }
    const handle = function (e) {
        setOpen(true)
        console.log(isOpen)
    }
    const handleclose = function () {
        setOpen(false)
    }
    const handleSetProduct = function (e) {
        setProduct({
            ...product,
            id: index,
            img: item.img,
            backimg: item.backimg,
            price: item.price
        })
    }
    const handleAddProduct = function (e) {
        if(isLogin){
            e.preventDefault()
            dispatch({type: 'cart/addProduct',payload:{product: {...product,
                id: index,
                img: item.img,
                backimg: item.backimg,
                price: item.price},count: 1}})
        }
    }
    return (
        <Link to='/product' onClick={handleSetProduct}>
            <div className=" relative w-full h-[400px] overflow-hidden cursor-pointer rounded-md ease-in-out duration-700 mobile:h-[200px]" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <img src={background} alt="product-img" className=" object-cover transition-all ease-in-out duration-1000" />
                <div className={`flex items-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${ishidden} animationBoxicon z-10`} onMouseEnter={handle} onMouseLeave={handleclose}>
                    <IconButton sx={{ backgroundColor: 'primary.main', color: '#fff', ":hover": { backgroundColor: 'yellow', color: 'black' } }}><Favorite></Favorite></IconButton>
                    <Link onClick={handleAddProduct} to='/login'>
                        <IconButton sx={{ backgroundColor: 'primary.main', color: '#fff', ":hover": { backgroundColor: 'yellow', color: 'black' } }}><ShoppingCartOutlined></ShoppingCartOutlined></IconButton>
                    </Link>
                </div>
                {isOpen ? (<div className=" absolute top-0 bottom-0 left-0 right-0 bg-black opacity-20 ease-in-out duration-700 transition-all"></div>) : ''}
            </div>
        </Link>
    )
};
