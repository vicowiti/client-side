import { FaBell } from "react-icons/fa"


const DashHeader = () => {
    return (
        <div
            className="bg-white w-full py-8 flex  justify-between">
            <div>
                <h3 className="text-gray-700 font-extrabold my-3 text-4xl">Good Morning Admin 👋🏼</h3>
                <h6 className="text-gray-600 font-bold text-xl">Let's get you going!</h6>
            </div>
            <div>

                <FaBell size={30} color="#777" />

            </div>
        </div>
    )
}

export default DashHeader