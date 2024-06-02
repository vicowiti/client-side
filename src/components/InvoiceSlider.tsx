import { Fragment, useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'
import { Collection, Invoice } from '../types/global'
import { MdMoney, MdOutlineNumbers } from 'react-icons/md'
import { FaClock } from 'react-icons/fa6'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { getInvoiceCollections } from '../services/collections/data'
import CollectionsModal from './CollectionsModal'

interface Props {
    invoice: Invoice
}
export default function InvoiceSlider(props: Props) {
    const [open, setOpen] = useState(false)
    const [collections, setCollections] = useState<Collection[]>([])

    useEffect(() => {


        async function fetchCollections() {
            const response = await getInvoiceCollections(props.invoice.invoiceNumber)
            console.log("responsea", response);


            setCollections(response)
        }

        fetchCollections()
    }, [props.invoice.invoiceNumber])

    return (
        <>
            <button onClick={() => setOpen(true)} className="text-indigo-600 hover:text-indigo-900">
                View
            </button>
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <TransitionChild
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <DialogPanel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                            <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                                <div className="px-4 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <DialogTitle className="text-xl font-bold text-gray-900">View Invoice</DialogTitle>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <span className="sr-only">Close panel</span>
                                                                <FaTimes className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                    <header className='flex flex-col gap-3 p-2 shadow rounded-md'>
                                                        <h2 className='flex gap-2 items-center'><MdOutlineNumbers size={20} /> {props.invoice.invoiceNumber}</h2>
                                                        <h2 className='flex gap-2 items-center'><FaClock size={20} color='green' /> {props.invoice.creationDate}</h2>
                                                        <h2 className='flex gap-2 items-center'><FaClock size={20} color='red' /> {props.invoice.dueDate}</h2>
                                                        <h2 className='flex gap-2 items-center'><MdMoney size={20} />{props.invoice.amount}</h2>
                                                        <h2 className='flex gap-2 items-center'><RiVerifiedBadgeFill color='green' size={20} />{props.invoice.status}</h2>
                                                    </header>

                                                    <main>
                                                        <div className='flex justify-between items-center my-5'>
                                                            <h2 className=' text-xl font-bold text-grey-500'>Collections</h2>
                                                            <CollectionsModal mode='create' invoice={props.invoice} />
                                                        </div>

                                                        {collections.length < 1 && <div>
                                                            <p className='text-[#777] text-center'>You have no Collections yet!</p>
                                                        </div>}

                                                        <div>
                                                            {collections?.map(item => <article className={`${item.status === "Valid" ? "border-t-green-600" : "border-t-red-600"} flex items-center justify-between px-2 py-3 shadow-lg rounded-lg border-t-4`} key={item.id}>
                                                                <div>
                                                                    <p>CollectionId:{item.collectionNo}</p>
                                                                    <p>Amount:{item.amount}</p>
                                                                    <p>Status:{item.status}</p>
                                                                </div>

                                                                <div>
                                                                    <CollectionsModal mode='edit' invoice={props.invoice} collection={item} />
                                                                </div>

                                                            </article>)}
                                                        </div>
                                                    </main>

                                                </div>
                                            </div>
                                            <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
