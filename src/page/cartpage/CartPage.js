
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
export default function CartPage(params) {

    const { carts, dispatch } = useContext(cartContext)
    const nextCount = function (index) {
        dispatch({ type: 'cart/nextProductCount', payload: index })
        dispatch({ type: 'cart/totalCart' })
    }
    const preCount = function (index) {
        dispatch({ type: 'cart/preProductCount', payload: index })
        dispatch({ type: 'cart/totalCart' })
    }
    const handleDelete = function (index) {
        dispatch({ type: 'cart/deleteProduct', payload: index })
        dispatch({ type: 'cart/totalCart' })
    }
    return (
        <div>
            <div className='p-4'>
                <h2 className='text-3xl my-4'>CART</h2>
                <div className='flex justify-between items-center gap-1 mobile:flex-col'>
                    <Link to='/category' className='p-4 rounded-md text-violet-600 border border-violet-600 active:bg-violet-600 active:text-white min-w-[200px]'>Continue Shopping</Link>
                    <div className='flex gap-4 mobile:gap-2'>
                        <span className='flex gap-2 underline mobile:items-baseline'><span>Item in your cart:</span><span className=''>{carts.count}</span></span>
                        <span className='flex gap-2 underline mobile:items-baseline'><span>Whishlist item:</span><span className=''>{carts.count}</span></span>
                    </div>
                    <button className='p-4 rounded-md text-white bg-violet-600 active:bg-violet-900 min-w-[200px]'>Checkout Now</button>
                </div>
                <div className='flex justify-between gap-4 my-4 mobile:flex-col-reverse'>
                    <div className='flex-1 mobile:flex mobile:flex-col-reverse'>
                        {carts.product.map(function (item, index) {
                            return (
                                <div className='flex justify-between items-center py-4 border-b border-gray-400  relative mobile:flex-col' key={index}>
                                    <div className=' absolute top-4 right-0 p-2 bg-violet-600 rounded-md text-white cursor-pointer active:bg-violet-900 select-none' onClick={() => handleDelete(index)}>Delete</div>
                                    <div className='flex gap-4 text-left flex-1 mobile:flex-col'>
                                        <img src={item.product.img} alt="" className=' object-cover w-[300px] mobile:mx-auto mobile:w-full mobile:h-[300px]' />
                                        <ul>
                                            <li className='my-2 flex gap-2 items-baseline'><span className='text-lg font-bold'>ID:</span><span>{item.product.id}</span></li>
                                            <li className='my-2 flex gap-2 items-baseline'><span className='text-lg font-bold'>Name:</span>Name Product</li>
                                            <li className='my-2 flex gap-2 items-center'><span className='text-lg font-bold'>Color:</span><div className={` ${item.product.bgClass} rounded-full w-[40px] h-[40px]`}></div></li>
                                            <li className='my-2 flex gap-2 items-baseline'><span className='text-lg font-bold'>Size:</span><span>{item.product.size}</span></li>
                                            <div className='my-2 flex gap-2 items-baseline'><span className='text-lg font-bold'>Price:</span><span className='text-3xl font-bold text-red-500'>{item.product.price * item.count}$</span></div>
                                            <div className='hidden items-center gap-4 mobile:flex'>
                                                <span className='text-lg font-bold'>Quality:</span>
                                                <div className="flex rounded-lg overflow-hidden shadow-lg">
                                                    <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={() => { preCount(index) }}>-</div>
                                                    <div className="p-4 text-black">{item.count}</div>
                                                    <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={() => { nextCount(index) }}>+</div>
                                                </div>
                                            </div>
                                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nulla dignissimos voluptates eum sunt, nisi impedit exercitationem sed iure possimus, voluptatibus consequatur dolore consectetur. Odio ad illum dicta reprehenderit eaque?</li>
                                        </ul>
                                    </div>
                                    <div className='text-left mobile:hidden'>
                                        <div className='flex items-center gap-4'>
                                            <span className='text-lg font-bold'>Quality:</span>
                                            <div className="flex rounded-lg overflow-hidden shadow-lg">
                                                <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={() => { preCount(index) }}>-</div>
                                                <div className="p-4 text-black">{item.count}</div>
                                                <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={() => { nextCount(index) }}>+</div>
                                            </div>
                                        </div>
                                        <span className='text-3xl font-bold text-red-500'>{item.product.price * item.count}$</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[400px] h-[400px] border rounded-sm border-violet-600 shadow-2xl text-left grid p-4 mobile:w-[340px] mobile:h-[340px]'>
                        <h3 className='m-auto text-2xl'>SUMMARY</h3>
                        <ul className='border p-4 border-violet-900'>
                            <li className='flex justify-between items-baseline'><span>Subtotal:</span><span>{carts.total}$</span></li>
                            <li className='flex justify-between items-baseline'><span>Shipping:</span><span>{carts.count === 0 ? '0$' : '30$'}</span></li>
                            <li className='flex justify-between items-baseline'><span>ShippingDiscount:</span><span>{carts.count === 0 ? '0$' : '-10$'}</span></li>
                        </ul>
                        <div className='flex justify-between items-baseline text-2xl font-bold text-red-500'><span>TOTAL:</span><span>{carts.count === 0 ? 0 : carts.total + 20}$</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
};
