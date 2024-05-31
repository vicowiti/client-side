import React from "react"
import SideBar from "./SideBar"
import DashHeader from "./DashHeader"

interface Props {
    children: React.ReactNode
}

const DashboardLayout = (props: Props) => {
    return (
        <div className="min-h-screen flex relative bg-white">
            <SideBar />
            <div className="lg:pl-[19rem]  w-full">
                <DashHeader />
                {props.children}
            </div>
        </div>
    )
}

export default DashboardLayout