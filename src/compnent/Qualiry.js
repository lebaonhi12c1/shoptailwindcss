import { useState } from "react"

export default function Qualiry() {
    const [count,setCount] = useState(1)
    const handlePreCount = function(){
        if(count === 1 ){
            return count
        }
        setCount(count - 1)
    }
    const handleNextCount = function(){
        setCount(count + 1)
    }
    return (
        <div className="flex rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={handlePreCount}>-</div>
        <div className="p-4 text-black">{count}</div>
            <div className="p-4 bg-violet-600 select-none  text-white cursor-pointer active:bg-violet-900" onClick={handleNextCount}>+</div>
        </div>
    )
};
