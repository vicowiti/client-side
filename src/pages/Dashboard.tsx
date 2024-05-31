import { BsCollectionFill } from 'react-icons/bs'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { GiNetworkBars } from 'react-icons/gi'
import { TbZoomCancelFilled } from 'react-icons/tb'
import { Pie } from '../components/charting/Pie'
import { Bar } from '../components/charting/Bar'

const Dashboard = () => {

    const cards = [
        {
            id: 1,
            name: "Collections",
            icon: BsCollectionFill,
            amount: 200,
            bg: "#02bd9e",
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
        <div className='text-black bg-[#f0eff4] min-h-screen p-8 rounded-t-2xl'>

            <section className='  rounded-xl w-full flex items-center gap-4  justify-between'>
                {cards.map(item => <article style={{ backgroundColor: item.bg }} key={item.id} className='flex p-5 flex-1 h-[12rem] rounded-xl shadow-md items-center gap-5'>
                    <div className='p-5 hover:scale-110 duration-300 rounded-full shadow-xl bg-[white]'>
                        <item.icon size={25} color={item.bg} />
                    </div>
                    <div>
                        <p className='text-white'>{item.name}</p>
                        <p className='text-white font-bold text-3xl'>{item.amount}</p>
                    </div>
                </article>)}
            </section>

            <div>
                <h4 className="text-2xl font-bold text-gray-700 my-3">Targets Overview</h4>
                <section className='grid grid-cols-2 my-8 gap-10'>
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
                <section className='grid grid-cols-2 my-8 gap-10'>
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
        </div>
    )
}

export default Dashboard