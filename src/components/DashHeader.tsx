import { FaBell } from "react-icons/fa"
import { User } from "../types/global"


const DashHeader = () => {
    const userString = localStorage.getItem("ZERAKI_ADMIN")

    const admin: User = userString && JSON.parse(userString)
    return (
        <div
            className="bg-white w-full py-3 flex h-36 z-10 fixed justify-between">
            <div className="p-5">
                <h3 className="text-gray-700 font-extrabold my-3 text-lg lg:text-4xl">Good Morning {admin?.firstName} 👋🏼</h3>
                <h6 className="text-gray-600 font-bold text-sm lg:text-xl">Let's get you going!</h6>
            </div>
            <div>

                <FaBell className="text-20" size={25} color="#777" />

            </div>
        </div>
    )
}

export default DashHeader