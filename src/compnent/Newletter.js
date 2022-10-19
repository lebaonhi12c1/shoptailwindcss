
import Send from "@mui/icons-material/Send"
export default function Newletter() {
    return (
        <div className="my-4 flex bg-fuchsia-600 px-4 py-[200px] mobile:py-28">
            <div className="m-auto">
                <h3 className=" my-8 text-[59px] text-cyan-50">SWEET SHOP</h3>
                <h5 className=" my-4 text-xl text-cyan-50">Receive product notifications by sending us your email</h5>
                <div className="flex items-center bg-white rounded-sm overflow-hidden w-[500px] mobile:w-[300px] mobile:mx-auto">
                    <input type="email" name="email" id="email" placeholder="Your email..." className="p-2 rounded-sm flex-1" />
                    <button className=" h-full  text-center cursor-pointer p-2 w-[50px]  hover:bg-slate-400 hover:text-white active:bg-slate-500"><Send></Send></button>
                </div>
            </div>
        </div>
    )
};
