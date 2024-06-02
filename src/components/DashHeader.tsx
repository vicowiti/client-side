
import React from "react"
import { User } from "../types/global"
import { getGreeting } from "../utils/global"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { navigation } from "./SideBar"
import { LiaTimesSolid } from "react-icons/lia"


const DashHeader = () => {
    const userString = localStorage.getItem("ZERAKI_ADMIN")
    const [open, setOpen] = React.useState(false)

    const admin: User = userString && JSON.parse(userString)
    return (
        <div
            className="bg-white w-full py-3 h-36 z-10 fixed">
            <div className="lg:hidden pt-3   relative pl-1">
                {open ? <LiaTimesSolid onClick={() => setOpen(false)} size={30} color="#018C79" /> : <HiOutlineBars3CenterLeft onClick={() => setOpen(true)} size={30} color="#018C79" />}
                {open && <aside className={`"absolute top-0 left-0 bg-white  right-0 bottom-0 h-screen z-[1000] ${open ? ".aside-visible" : ".aside-hidden"}`}>
                    <nav className="mt-10 px-2">
                        {navigation.map(item => <Link key={item.id} onClick={() => setOpen(false)} style={{ backgroundColor: location.pathname.includes(item.href) ? "#018C79" : "#fff", color: location.pathname.includes(item.href) ? "#fff" : "#777", borderRadius: location.pathname.includes(item.href) ? "24px" : "0px" }} to={item.href} className={location.pathname.includes(item.href) ? `flex mb-2 items-center gap-3 px-5 rounded-3xl text-white shadow-lg py-2 border text-lg` : `flex mb-2 items-center gap-3 px-5 rounded-3xl text-white  py-2  text-lg`}>
                            <div className="p-2  rounded-xl shadow-md bg-white flex justify-center items-center">
                                <item.icon size={17} color="#018C79" />
                            </div>
                            {item.name}
                        </Link>)}
                    </nav>
                </aside>}
            </div>
            <div className="p-2">
                <h3 className="text-gray-700 font-extrabold my-1 text-lg lg:text-3xl">{getGreeting()} {admin?.firstName} 👋🏼</h3>
                <h6 className="text-gray-600 font-bold text-sm lg:text-xl">Let's get you going!</h6>
            </div>

        </div>
    )
}

export default DashHeader