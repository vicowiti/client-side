import { Fragment, useRef, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { FaFileInvoice } from 'react-icons/fa'
import Input from './Input'
import { Product } from '../types/global'
import { toast } from 'sonner'
import { generateUUID } from '../utils/global'
import { AppDispatch, useAppDispatch } from '../redux/store/store'
import { createNewInvoice } from '../redux/slices/InvoiceSlice'

interface Props {
    id: string
    usedProducts: Product[]
}

export default function AddInvoice(props: Props) {

    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState("")
    const [created, setCreated] = useState(formattedToday)
    const [due, setDue] = useState("")
    const [product, setProduct] = useState("")
    const dispatch: AppDispatch = useAppDispatch()


    const cancelButtonRef = useRef(null)

    const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await dispatch(createNewInvoice({
                amount: Number(amount),
                creationDate: created,
                dueDate: due,
                product: props.usedProducts.find(pr => pr.id === product) as Product,
                dueAmount: Number(amount),
                invoiceNumber: generateUUID(),
                school_id: props.id,
                status: "Pending",
                paidAmount: 0
            }))
            setOpen(false)
        } catch (error) {
            toast.error("Invoice ws not created")
        }

    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#018C79] px-4 py-2 text-sm font-medium text-white shadow-sm  hover:scale-95 duration-300 sm:w-auto"
            >
                Add Invoice
            </button>
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                    <form onSubmit={e => handleCreate(e)}>
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto p-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <FaFileInvoice className="h-6 w-6 text-[#018C79]" aria-hidden="true" />
                                            </div>
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <DialogTitle as="h3" className="text-xl font-bold leading-6 text-gray-900">
                                                    Create New Invoice
                                                </DialogTitle>

                                                <div className='grid grid-cols-2 gap-3'>
                                                    <Input name='amount' type='text' placeholder='Enter Invoice Amount' value={amount} onChange={(e) => setAmount(e.target.value)} required={true} label='Amount' />
                                                    <div>
                                                        <label>
                                                            Date Created
                                                        </label>
                                                        <input disabled type="date" value={created} onChange={(e) => setCreated(e.target.value)} className='w-full rounded-md border border-gray-300 px-3 py-3 sha placeholder-gray-400 shadow-md focus:border-[#2fa6de] focus:outline-none  sm:text-sm' />
                                                    </div>
                                                    <div>
                                                        <label>
                                                            Date Due
                                                        </label>
                                                        <input type="date" value={due} onChange={(e) => setDue(e.target.value)} className='w-full rounded-md border border-gray-300 px-3 py-3 sha placeholder-gray-400 shadow-md focus:border-[#2fa6de] focus:outline-none  sm:text-sm' />
                                                    </div>


                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Select Product
                                                        </label>
                                                        <select value={product} onChange={(e) => setProduct(e.target.value)} className=' className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 sha placeholder-gray-400 shadow-md focus:border-[#2fa6de] focus:outline-none  sm:text-sm"'>
                                                            <option value={``}>Select Product</option>
                                                            {props.usedProducts.map((product) => (
                                                                <option key={product.id} value={product.id}>{product.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#018C79] px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)}
                                            >
                                                Create
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}


// {
//
//         "school_id": "1",
//             "invoiceNumber": "1f95dd17-66da-41ee-b3d3-ee5a7e4f689a",
//                 "product": {
//         "id": "1",
//             "name": "Zeraki Analytics"
//     },
//     "amount": 2100,
//         "creationDate": "2023-04-01",
//             "dueDate": "2023-04-15",
//                 "status": "Pending"
// }