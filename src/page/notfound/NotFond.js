import { Link } from "react-router-dom"
export default function NotFond(params) {
    return(
        <div>
            <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="404_img" />
            <button className="p-4 rounded-md bg-violet-600 text-white active:bg-violet-900">
                <Link to='/'>GO TO HOME</Link>
            </button>
        </div>
    )
};
