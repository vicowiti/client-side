import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/zeraki.png"
import { BiSolidDashboard } from "react-icons/bi"
import { IoSchool } from "react-icons/io5"

const navigation = [
    {
        id: 1,
        name: "Dashboard",
        href: "/dashboard",
        icon: BiSolidDashboard
    },
    {
        id: 1,
        name: "Schools",
        href: "/schools",
        icon: IoSchool
    }
]

const SideBar = () => {

    const location = useLocation()
    return (
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col  lg:bg-white lg:pt-5 lg:pb-4">
            <div className='px-3'>

                <header>
                    <img className="w-26" src={Logo} alt="Zeraki Logo" />
                </header>

                <nav className="mt-10 px-2">
                    {navigation.map(item => <Link style={{ backgroundColor: location.pathname === item.href ? "#018C79" : "#fff", color: location.pathname === item.href ? "#fff" : "#777", borderRadius: location.pathname === item.href ? "24px" : "0px" }} to={item.href} className={location.pathname === item.href ? `flex mb-2 items-center gap-3 px-5 rounded-3xl text-white shadow-lg py-2 border text-lg` : `flex mb-2 items-center gap-3 px-5 rounded-3xl text-white  py-2  text-lg`}>
                        <div className="p-2 rounded-xl shadow-md bg-white flex justify-center items-center">
                            <item.icon size={17} color="#018C79" />
                        </div>
                        {item.name}
                    </Link>)}
                </nav>

            </div>
        </aside>
    )
}

export default SideBar