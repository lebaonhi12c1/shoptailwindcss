import  Clear from "@mui/icons-material/Clear"
import { useState } from "react"
export default function Nofication(params) {
    const [isHidden,setHidden] =useState(false)
    const handleHidden = function(){
        setHidden(!isHidden)
    }
    return (
        <div className={isHidden? 'hidden':'flex items-center justify-center bg-fuchsia-600 text-cyan-50 gap-3 p-1'}>
            <h5 className="">Hurry up it's 40% off now !!</h5>
            <Clear className="cursor-pointer" onClick={handleHidden}></Clear>
        </div>
    )
};
