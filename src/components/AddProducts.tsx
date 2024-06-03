import { Fragment, useRef, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { AiOutlineProduct } from 'react-icons/ai'
import Input from './Input'
import { toast } from 'sonner'
import { AppDispatch, useAppDispatch } from '../redux/store/store'
import { addNewProduct } from '../redux/slices/ProductSlice'

export default function AddProduct() {
    const [open, setOpen] = useState(false)
    const [productName, setProductName] = useState('')
    const [productTarget, setProductTarget] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productActive, setProductActive] = useState<'active' | 'inactive'>('active')
    const dispatch: AppDispatch = useAppDispatch()

    const cancelButtonRef = useRef(null)

    const handleCreate = async () => {

        if (productName === '' || productTarget === '' || productDescription === '') {
            alert('Please fill all the fields')
            return
        }

        await dispatch(addNewProduct({
            name: productName,
            target: Number(productTarget),
            description: productDescription,
            active: productActive === "active" ? true : false,
        }))

        toast.success("Product created")
        setOpen(false)

    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent hover:scale-95 duration-300 bg-[#018C79] px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto"
            >
                Add Product
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
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#aae8e0] sm:mx-0 sm:h-10 sm:w-10">
                                            <AiOutlineProduct className="h-6 w-6 text-[#018C79]" aria-hidden="true" />
                                        </div>

                                        <DialogTitle className={`ml-3 text-xl font-bold text-gray-600`}>
                                            Add New Product
                                        </DialogTitle>

                                    </div>
                                    <div>
                                        <Input name='name' placeholder='Enter product name' type='text' value={productName} onChange={(e) => setProductName(e.target.value)} required={true} label='Product Name' />
                                        <Input placeholder='Enter Description' required={true} name='description' value={productDescription} onChange={e => setProductDescription(e.target.value)} type='text' label='Product Descriprion' />
                                        <Input required={true} type='number' value={productTarget} onChange={e => setProductTarget(e.target.value)} name='target' placeholder='Enter target' label='Product Target' />

                                        <div className='flex w-full flex-col'>
                                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Product Status</label>
                                            <select value={productActive} onChange={e => setProductActive(e.target.value as "active" | "inactive")} name="status" id="status" className='p-3 w-full shadow-sm border rounded-md'>
                                                <option value={`active`}>Active</option>
                                                <option value={`inactive`}>Inactive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-[#018C79] px-4 py-2 text-base font-medium text-white shadow-sm   sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={handleCreate}
                                        >
                                            Create
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50  sm:mt-0 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
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
