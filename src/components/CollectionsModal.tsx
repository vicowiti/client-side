import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { FcMoneyTransfer } from 'react-icons/fc'
import { CiEdit } from 'react-icons/ci'
import Input from './Input'
import { generateUUID } from '../utils/global'
import { Collection, Invoice } from '../types/global'
import { toast } from 'sonner'
import { AppDispatch, useAppDispatch } from '../redux/store/store'
import { createNewCollection, editExistingCollection, getCurrentInvoiceCollections } from '../redux/slices/CollectionSlice'
import { getOneSchoolInvoices } from '../redux/slices/InvoiceSlice'
import { useParams } from 'react-router-dom'

interface Props {
    mode: "create" | "edit"
    invoice: Invoice
    collection?: Collection
    close: string

}
export default function CollectionsModal(props: Props) {
    const [open, setOpen] = useState(false)
    const [amount, setAmount] = useState("")
    const [status, setStatus] = useState<"Valid" | "Bounced">("Valid")
    const [date, setDate] = useState("")
    const dispatch: AppDispatch = useAppDispatch()

    const { id } = useParams()



    const handleCollection = async () => {

        console.log("params", {
            amount: Number(amount),
            creationDate: date,
            dueDate: props.invoice.dueDate,
            product: props.invoice.product,
            dueAmount: Number(amount),
            invoiceNumber: generateUUID(),
            school_id: props.invoice.school_id,
            status: status,
            invoice_id: props.invoice.id
        });

        if (props.mode === "create") {
            try {
                await dispatch(createNewCollection({
                    amount: Number(amount),
                    collectionDate: date,
                    invoiceNumber: props.invoice.invoiceNumber,
                    status: status,
                    collectionNo: generateUUID(),
                }))

                await dispatch(getCurrentInvoiceCollections(props.close))
                { id && await dispatch(getOneSchoolInvoices(id)) }

                toast.success("Collection created")
                setOpen(false)

            } catch (error) {
                toast.error("Collection not created")
                setOpen(false)


                { id && await dispatch(getOneSchoolInvoices(id)) }
            }

        } else {
            if (props.collection) {


                await editExistingCollection({
                    data: {
                        ...props.collection,
                        status: status,
                    },
                    id: props.collection?.id
                })
            }
        }

    }


    return (
        <>
            {props.mode === "create" ? <button onClick={() => setOpen(true)} className='bg-green-600 text-white px-5 py-2 rounded-lg hover:scale-95 duration-300'>Add</button> : <CiEdit size={30} color="teal" onClick={() => setOpen(true)} />}
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                            <FcMoneyTransfer className="h-6 w-6 text-green-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3  sm:mt-5">
                                            <DialogTitle as="h3" className="text-xl text-center font-bold leading-6 text-gray-900">
                                                {props.mode === "create" ? "Create Collection" : "Edit Collection"}
                                            </DialogTitle>
                                            <p className='py-3 bg-black/20 p-2 rounded-md'>Invoice: {props.invoice?.invoiceNumber}</p>
                                            <div className="mt-3 grid grid-cols-1 gap-3">

                                                <div className='flex flex-col gap-1 w-full'>
                                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Collection Date</label>
                                                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} className='p-3 border shadow-sm rounded-md' />
                                                </div>

                                                <Input type='text' placeholder='Enter Amount' disabled={props.mode === "edit"} required={true} value={(props.mode === "create") ? amount : String(props.collection?.amount)} name='amount' onChange={(e) => setAmount(e.target.value)} label='Collection Amount' />

                                                <div className='flex flex-col gap-2 w-full'>
                                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Select Status</label>
                                                    <select value={props.mode === "create" ? status : props.collection?.status} onChange={(e) => setStatus(e.target.value as "Valid" | "Bounced")} id="status" name="status" className='border p-3 shadow-sm'>
                                                        <option value="Valid">Valid</option>
                                                        <option value="Bounced">Bounced</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <button

                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#018C79] px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
                                            onClick={handleCollection}
                                        >
                                            {props.mode === "create" ? "Create" : "Edit"}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
