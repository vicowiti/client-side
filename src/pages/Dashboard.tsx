import { BsCollectionFill } from 'react-icons/bs'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GiNetworkBars } from 'react-icons/gi'
import { TbZoomCancelFilled } from 'react-icons/tb'
import { Pie } from '../components/charting/Pie'
import { Bar } from '../components/charting/Bar'
import InvoicesTable from '../components/InvoicesTable'

const Dashboard = () => {

    const cards = [
        {
            id: 1,
            name: "Collections",
            icon: BsCollectionFill,
            amount: 200,
            bg: "#018C79",
            bgLight: "#02bd9e"
        },
        {
            id: 2,
            name: "Sign Ups",
            icon: GiNetworkBars,
            amount: 200,
            bg: "#43ab49",
            bgLight: "#43ab49"
        },
        {
            id: 3,
            name: "Total Revenue",
            icon: FaMoneyBillTrendUp,
            amount: 200,
            bg: "#2fa6de",
            bgLight: "#2fa6de"
        },
        {
            id: 4,
            name: "Bounced Cheques",
            icon: TbZoomCancelFilled,
            amount: 200,
            bg: "#111",
            bgLight: "#111"
        }
    ]
    return (
        <div className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>

            <section className='flex-col lg:flex-row  rounded-xl w-full  grid grid-cols-2 lg:grid-cols-4 items-center gap-4  justify-between'>
                {cards.map(item => <article style={{ backgroundColor: item.bg }} key={item.id} className='flex flex-col lg:flex-row p-3 w-full flex-1 h-[9rem] rounded-xl shadow-md items-center gap-5'>
                    <div className='p-2 lg:p-5 hover:scale-110 duration-300 rounded-full shadow-xl bg-[white]'>
                        <item.icon size={25} color={item.bg} />
                    </div>
                    <div>
                        <p className='text-white text-center'>{item.name}</p>
                        <p className='text-white font-bold text-xl lg:text-3xl text-center'>{item.amount}</p>
                    </div>
                </article>)}
            </section>

            <div>
                <h4 className="text-2xl font-bold text-gray-700 my-3">Targets Overview</h4>
                <section className='grid grid-cols-1 lg:grid-cols-2 my-8 gap-10'>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Pie />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Pie />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Pie />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Pie />
                    </div>

                </section>
            </div>

            <div>
                <h4 className="text-2xl font-bold text-gray-700 my-3">SignUps Overview</h4>
                <section className='grid grid-cols-1 lg:grid-cols-2 my-8 gap-10'>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Bar />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Bar />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Bar />
                    </div>
                    <div className='rounded-lg bg-white p-10 shadow-lg'>
                        <Bar />
                    </div>
                </section>
            </div>

            <div className='p-4'>
                <h4 className="text-2xl font-bold p-[-4]] text-gray-700 my-3">Upcoming Invoices</h4>
                <InvoicesTable />
            </div>
        </div>
    )
}

export default Dashboard