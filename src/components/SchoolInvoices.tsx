import { Invoice, Product } from "../types/global"
import { daysToPay } from "../utils/global"
import AddInvoice from "./AddInvoice"
import InvoiceSlider from "./InvoiceSlider"



interface Props {
    invoices: Invoice[]
    id: string
    usedProducts: Product[]
}

export default function SchoolInvoices(props: Props) {
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    return (
        <div >
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Invoices</h1>

                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <AddInvoice usedProducts={props.usedProducts} id={props.id} />
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Invoice No
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Product
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Created
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Due
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Value
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Paid
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Balance
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Days To
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {props.invoices.map((invoice) => (
                                        <tr key={invoice.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {invoice.invoiceNumber.substring(0, 5)}...
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.product.name}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.creationDate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.dueDate}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{invoice.amount}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-green-500">{invoice.paidAmount}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-red-500">{invoice.amount - invoice.paidAmount}</td>
                                            <td className={`whitespace-nowrap px-3 py-4 text-sm ${invoice.status === "Completed" ? "text-green-600" : "text-yellow-500"}`}>{invoice.status}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{daysToPay(invoice.dueDate, formattedToday)}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <InvoiceSlider invoice={invoice} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
