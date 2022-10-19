import { Link } from "react-router-dom"
import categorys from "../api/apiCategory"

export default function Category(params) {
    return (
        <div className="grid grid-cols-3 p-4 gap-4 shadow-lg mobile:grid-cols-1">
            {categorys.map(function (item, index) {
                return (
                    <div key={index} className=" w-full h-[460px] mx-auto relative overflow-hidden rounded-md mobile:h-80">
                        <img src={item.src} alt="category-img" className=" object-cover  hover:opacity-80 ease-in-out duration-700" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
                            <h3 className="text-3xl my-3 text-cyan-50">{item.title}</h3>
                            <Link className="py-6 px-10 rounded-md bg-blue-600 text-cyan-50 active:bg-white hover:bg-blue-500 block" to='/category'>Get it</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
