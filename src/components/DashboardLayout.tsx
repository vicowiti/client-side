import React from 'react'

interface Props {
    children: React.ReactNode
}
const DashboardLayout = (props: Props) => {
    return (

        <div>
            <SideBar />
            <div>
                <DashboardHeader />
                {props.children}
            </div>

        </div>
    )
}

export default DashboardLayout


const SideBar = () => {
    return (
        <div>
            <h1>SideBar</h1>
        </div>
    )
}

const DashboardHeader = () => {
    return (
        <div>
            <h1>DashboardHeader</h1>
        </div>
    )
}