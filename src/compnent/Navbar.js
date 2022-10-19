
import Search from "@mui/icons-material/Search"
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined"
import Badge from '@mui/material/Badge'
import User from "./User";
import { Link } from "react-router-dom";
import { MainContext } from "../context/Contextapi";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
export default function Navbar() {
    const {carts} = useContext(cartContext)
    const { isLogin } = useContext(MainContext)
    const badgeStyle = {
        "& .MuiBadge-badge": {
          color: '#fff',
          backgroundColor: '#c026d3',
        }
      }
    return (
        <div className="grid grid-cols-3 p-4 shadow-md mobile:flex mobile:justify-between mobile:p-4 mobile:relative">
            <div className="flex items-center gap-2">
                <div className="language cursor-pointer text-lg font-bold text-gray-400">EN</div>
                <div className="flex p-2 border rounded-md focus-within:border-violet-600">
                    <input type="text" placeholder="Search..." className=" mobile:w-[50px] mobile:text-sm"/>
                    <Search className="cursor-pointer active:text-violet-600"></Search>
                </div>
            </div>
            <Link to='/' className="w-[100px] m-auto mobile:w-20 mobile:m-0 mobile:absolute mobile:top-1/2 mobile:left-1/2 mobile:-translate-x-1/2 mobile:-translate-y-1/2">
                <img src="https://thumbs.dreamstime.com/b/sweet-shop-logo-vector-custom-hand-lettering-drawn-cake-cherry-top-monochrome-sign-fresh-pastry-bakery-113433375.jpg" alt="logo" className="w-full object-cover" />
            </Link >
            <div className="flex items-center ml-auto gap-8 mobile:gap-1 mobile:m-0">
                {isLogin ? (<User></User>) : (<div className="flex items-center gap-8 mobile:gap-2 mobile:text-sm">
                    <Link className="cursor-pointer hover:text-violet-600 active:text-yellow-600" to='/register'>Register</Link>
                    <div className="border-l-2 h-4 border-gray-400"></div>
                    <Link className="cursor-pointer hover:text-violet-600 active:text-yellow-600 mobile:w-11 mobile:hidden" to='/login'>Sign in</Link>
                </div>)}
                <Link to='/cart' className="z-50">
                    <Badge badgeContent={carts.count} sx={badgeStyle}>
                        <ShoppingCartOutlined  sx={{ fontSize: '30px' }}  className='cursor-pointer'></ShoppingCartOutlined>
                    </Badge>
                </Link>
            </div>
        </div>
    )
};
