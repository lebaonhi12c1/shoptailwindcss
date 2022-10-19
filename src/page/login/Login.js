import {  useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MainContext } from "../../context/Contextapi"
import { userContext } from "../../context/UserContext"
import { userInforContex } from "../../context/Userinfo"
export default function Login(params) {
    const {setIslogin} = useContext(MainContext)
    const {setUserinfor} = useContext(userInforContex)
    const {user} = useContext(userContext)
    const [height,setHeight] = useState(`h-[${window.innerHeight}px]`)
    window.onresize = function(){
        setHeight(`h-[${window.innerHeight}px]`)
    }
    const [userLogin,setUserLogin] = useState({
        username: '',
        userpass: ''
    })
    const handleUsername = function(e){
        setUserLogin({...userLogin,username : e.target.value})
    }
    const handleUserpassword = function(e){
        setUserLogin({...userLogin,userpass : e.target.value})
    }
    const handleSubmit = function(e){
        if(user.find((item) => item.username === userLogin.username && item.userpass === userLogin.userpass)){
            alert('LOGIN SUCCESS !!!')
            setUserinfor(userLogin.username)
            setIslogin(true)
        }
        else{
            e.preventDefault()
            alert('USERNAM OR PASSWORD IS NOT CORRECT !!!')
        }
    }

    return (
        <div className='relative'>
            <div className={`relative p-4 h-[754px] bg-black opacity-60 mobile:h-[500px]`}>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid w-1/2 bg-white p-4 rounded-md shadow-xl border-2 gap-4 mobile:w-[350px]">
                <h2 className="text-2xl">LOGIN</h2>
                <input type="text" name="username" id="username" placeholder="Username..." required  className="rounded-lg p-2 focus:outline-violet-600 focus:outline" onChange={handleUsername}/>
                <input type="password" name="userpass" id="userpass" placeholder="Password..." required  className=" focus:outline-violet-600 focus:outline rounded-lg p-2" onChange={handleUserpassword}/>
                <Link className="w-full rounded-md bg-violet-600 text-white p-2 text-center" to={`/category`} onClick={handleSubmit}>Login Now</Link>
                <div className="flex gap-4 items-baseline justify-end">
                    <Link to='/forgotpassword' className="text-violet-600 underline">Forgot your password ?</Link>
                    <Link to='/register' className="text-violet-600 underline">Rerister</Link>
                </div>
            </div>
        </div>
    )
};
