import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/UserContext";
export default function Register(params) {
    const {user,setUser} = useContext(userContext)

    const [userRegister, setUserRegister] = useState({
        username: '',
        userpass: '',
    })
    const [repass, setRepass] = useState('')

    const handleUsername = function (e) {
        setUserRegister({ ...userRegister, username: e.target.value })
    }
    const handlePassword = function (e) {
        setUserRegister({ ...userRegister, userpass: e.target.value })
    }
    const handleRePassword = function (e) {
        setRepass(e.target.value)
    }

    const handleRegister = function () {
        console.log(userRegister.username)
        if (user.find((item)=> item.username === userRegister.username)) {
            alert('USERNAME IS ALERLY IN SHOP')
        }
        else if (userRegister.userpass === repass) {
            setUser([...user, userRegister])
            console.log(user.user)
            alert('REGISTER SUCCESS !!!')
        }
        else {
            alert('PASSWORD NOT MATCH !!!')
        }
    }
    return (
        <div className=" relative">
            <div className={`relative p-4 h-[754px] bg-black opacity-60 mobile:h-[500px]`}>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid w-1/2 bg-white p-4 rounded-md shadow-xl border-2 gap-4 mobile:w-[350px]">
                <h2 className="text-2xl">REGISTER</h2>
                <input type="text" name="username" id="username" placeholder="Username..." required className="rounded-lg p-2 focus:outline-violet-600 focus:outline" onChange={handleUsername} />
                <input type="password" name="userpass" id="userpass" placeholder="Password..." required className=" focus:outline-violet-600 focus:outline rounded-lg p-2" onChange={handlePassword} />
                <input type="password" name="userrepass" id="userrepass" placeholder="Password..." required className=" focus:outline-violet-600 focus:outline rounded-lg p-2" onChange={handleRePassword} />
                <button className="w-full rounded-md bg-violet-600 text-white p-2 hover:bg-blue-600 duration-500 ease-in-out" onClick={handleRegister}>Register</button>
                <div className="flex gap-4 items-baseline justify-end">
                    <Link to='/login' className="text-violet-600 underline">Login</Link>
                </div>
            </div>
        </div>

    )
};
