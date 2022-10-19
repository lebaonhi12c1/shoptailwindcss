import { useContext } from "react"
import { userInforContex } from "../context/Userinfo"
import { Link } from "react-router-dom"
import { MainContext } from "../context/Contextapi"
import '../sassStyle/userStyle.scss'
export default function User(params) {
    const {setLogin} = useContext(MainContext)
    const {userInfor} = useContext(userInforContex)
    console.log(userInfor)
    return (
        <div className="flex gap-4 items-center w-8 h-8 mr-20 mobile:mr-5 relative userhover cursor-pointer mobile:gap-2 mobile:w-6 mobile:h-6 z-10 select-none">
            <img src="https://icon-library.com/images/icon-user/icon-user-15.jpg" alt="user-img" className=" rounded-full object-cover" />
            <span className="block mobile:hidden">{userInfor}</span>
            <div className=" absolute w-[200px] shadow-lg top-full text-left p-4 bg-slate-200 rounded-md dblock hidden mobile:right-0">
                <ul className="w-full">
                    <span className="hidden text-violet-600 mobile:block border-b border-violet-600">{userInfor}</span>
                    <li><Link className=" hover:text-violet-600 hover:underline" to='/' onClick={()=> setLogin(false)}>Log out</Link></li>
                </ul>
            </div>
        </div>
    )
};
