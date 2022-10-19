
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react'
import { useContext } from 'react';
import { productContext } from '../../context/ProductContext';
import colors from '../../api/colorApi';
import { cartContext } from '../../context/CartContext';
import { MainContext } from '../../context/Contextapi';
import { Link } from 'react-router-dom';
export default function ProductPage(params) {
    const { isLogin } = useContext(MainContext)
    const {dispatch} = useContext(cartContext)
    const { product, setProduct } = useContext(productContext)
    const [size, setSize] = useState('')
    const [focus, setFocus] = useState(undefined)
    const [count,setCount] = useState(1)
    const [img,setImg] = useState(product.img)
    const [active,setActive] = useState(1)
    const handlePreCount = function(){
        if(count === 1 ){
            return count
        }
        setCount(count - 1)
    }
    const handleNextCount = function(){
        setCount(count + 1)
    }
    const handleChangeSize = function (e) {
        setSize(e.target.value)
        setProduct({ ...product, size: e.target.value })
    }
    const handleAddtoCart = function () {
        if (isLogin) {
            setProduct({ ...product, img: product.img })
            dispatch({type:'cart/addProduct',payload: {product,count}})
        }
    }
    const handleImg = function(action){
        switch (action) {
            case 'img':
                setImg(product.img)
                setActive(1)
                return img
            case 'backimg':
                setImg(product.backimg)
                setActive(2)
                return img
            default:
                return img
        }
    }
    return (
        <>
            <div className='grid grid-cols-2 p-4 gap-4 mobile:grid-cols-1' id='ontop'>
                <div className=''>
                    <img src={img} alt="product-img" className='h-[500px] object-cover w-3/5 m-auto mobile:w-full' />
                    <div className='flex gap-4 justify-center my-2'>
                        <img src={product.img} alt="" className={`h-[100px] w-[80px] cursor-pointer ${active === 1 ? 'border-2 border-violet-600' : ''}`} onClick={()=> handleImg('img')}/>
                        <img src={product.backimg} alt="" className={`h-[100px] w-[80px] cursor-pointer ${active === 2 ? 'border-2 border-violet-600' : ''}`} onClick={()=> handleImg('backimg')}/>
                    </div>
                </div>
                <div className='text-left'>
                    <h2 className='text-2xl'>Name Product</h2>
                    <p className='my-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus vel enim perspiciatis at quasi unde distinctio voluptates, nostrum totam pariatur! Rerum quod qui assumenda reprehenderit aliquam. Eligendi quod expedita ipsum?</p>
                    <ul className='my-4'>
                        <li className='my-4 gap-4 flex items-center'><span>Price</span><span className='text-2xl text-red-500'>{product.price * count}$</span></li>
                        <li className='my-4 gap-4 flex items-center'>
                            <span>Color</span>
                            <div className='flex gap-4'>
                                {colors.map(function (item, index) {
                                    return (
                                        <div className={`w-[35px] h-[35px] rounded-full ${item.bgClass} cursor-pointer border-4 ${focus === index ? 'border-4 border-red-600' : ''}`} onClick={() => {
                                            setProduct({ ...product, bgClass: item.bgClass })
                                            setFocus(index)
                                        }} key={index}></div>
                                    )
                                })}
                            </div>
                        </li>
                        <li className='my-4 gap-4 flex items-center'>
                            <span>Size</span>
                            <FormControl sx={{ width: '199px' }}>
                                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={size}
                                    label="Size"
                                    onChange={handleChangeSize}
                                >
                                    <MenuItem value='none'>None</MenuItem>
                                    <MenuItem value='M'>M</MenuItem>
                                    <MenuItem value='L'>L</MenuItem>
                                    <MenuItem value='XL'>XL</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li className='my-4 gap-4 flex items-center'>
                            <span>Quality</span>
                            <div className="flex rounded-lg overflow-hidden shadow-lg">
                                <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={handlePreCount}>-</div>
                                <div className="p-4 text-black">{count}</div>
                                <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={handleNextCount}>+</div>
                            </div>
                        </li>
                    </ul>
                    <Link className='p-4 bg-violet-600 block w-40 text-center text-white rounded-md active:bg-white' onClick={handleAddtoCart} to={`/${isLogin ? 'product' : 'login'}`}>ADD TO CART</Link>
                </div>
            </div>
        </>
    )
};
