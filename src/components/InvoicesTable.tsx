import { useEffect, useState } from "react"
import { Invoice } from "../types/global"
import { getAllInvoices } from '../services/invoices/data';
import { daysToPay } from "../utils/global";
import { Link } from "react-router-dom";



export default function InvoicesTable() {

    const [invoices, setInvoices] = useState<Invoice[]>([])

    useEffect(() => {

        const getInvoices = async () => {
            const response: Invoice[] = await getAllInvoices()


            response.sort((a, b) => {
                const dateA = new Date(a.dueDate);
                const dateB = new Date(b.dueDate);
                return dateA.getTime() - dateB.getTime();
            });



            setInvoices(response.slice(0, 5))
        }

        getInvoices()



    }, [])

    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];

    return (
        <section>
            <div className="sm:flex sm:items-center">
                <Link to={`/schools`} className="text-[#018C79]">See More</Link>

            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            School Id
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Amount Due
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Due Date
                                        </th>

                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Days to
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {invoices.map((invoice) => (
                                        <tr key={invoice.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {invoice.school_id}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.dueAmount}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.dueDate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{daysToPay(invoice.dueDate, formattedToday)}</td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
