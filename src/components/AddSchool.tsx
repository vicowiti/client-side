import { Fragment, useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { FaTimes } from 'react-icons/fa'
import Input from './Input'
import { useFormik } from 'formik'
import { newSchoolSchema } from '../validations/authValidations'
import { Product } from '../types/global'
import { AppDispatch, RootState, useAppDispatch } from '../redux/store/store'
import { addNewSchool } from '../redux/slices/SchoolSlice'
import { getProducts } from '../redux/slices/ProductSlice'
import { useSelector } from 'react-redux'


export default function AddSchool() {
    const [open, setOpen] = useState(false)
    const { products } = useSelector((state: RootState) => state.products)
    const [selectedProducts, setSelectedProducts] = useState<string[]>([])
    const dispatch: AppDispatch = useAppDispatch()

    useEffect(() => {
        async function fetchProducts() {

            dispatch(getProducts())
        }
        fetchProducts()
    }, [dispatch])

    const formik = useFormik({
        initialValues: {

            name: "",
            type: "",
            county: "",
            email: "",
            contact: "",
            address: "",
            balance: 0,
            products: []
        },
        validationSchema: newSchoolSchema,
        onSubmit: async (values, { resetForm }) => {
            try {

                await dispatch(addNewSchool({ ...values, products: selectedProducts }))

                setOpen(false)

            } catch (err) {
                console.log(err)
                resetForm()
            }
        }
    })

    const handleProductSelection = (e: React.ChangeEvent<HTMLInputElement>, product: Product) => {
        if (e.target.checked) {

            setSelectedProducts([...selectedProducts, product.id]);
        } else {

            setSelectedProducts(selectedProducts.filter(p => p !== product.id));
        }
    };
    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#018C79] px-4 py-2 text-sm font-medium text-white shadow-sm hover:scale-95 duration-300 sm:w-auto"
            >
                Add School
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
                                        <form onSubmit={formik.handleSubmit} className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                            <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                                <div className="px-4 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <DialogTitle className="text-xl font-bold text-gray-900">Add New School</DialogTitle>
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
                                                <div className="relative mt-6 flex-1 px-4 flex flex-col gap-3 sm:px-6">
                                                    <Input error={formik.errors.name} touched={formik.touched.name} value={formik.values.name} onChange={formik.handleChange} required={true} label='School Name' placeholder='Enter School Name' type='text' name='name' />
                                                    <Input error={formik.errors.email} touched={formik.touched.email} value={formik.values.email} onChange={formik.handleChange} required={true} label='Email' placeholder='Enter Email' type='text' name='email' />
                                                    <Input error={formik.errors.contact} touched={formik.touched.contact} value={formik.values.contact} onChange={formik.handleChange} required={true} label='Phone Number' placeholder='Enter Phone Number' type='text' name='contact' />
                                                    <Input error={formik.errors.address} touched={formik.touched.address} value={formik.values.address} required={true} label='Address' onChange={formik.handleChange} placeholder='Enter Address' type='text' name='address' />
                                                    <Input error={formik.errors.county} touched={formik.touched.county} value={formik.values.county} onChange={formik.handleChange} required={true} label='County' placeholder='Enter School Name' type='text' name='county' />
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            School Type
                                                        </label>
                                                        <select value={formik.values.type} name='type' onChange={formik.handleChange} className='w-full border p-3 rounded-lg shadow-md'>
                                                            <option value="">Select Type</option>
                                                            <option value="Primary">Primary</option>
                                                            <option value="Secondary">Secondary</option>
                                                            <option value="IGCSE">IGCSE</option>
                                                        </select>
                                                        {formik.touched.type && formik.errors.type && <p className="mt-2 text-sm font-thin text-red-600">{formik.errors.type} </p>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Select Product(s)
                                                        </label>
                                                        <div className='grid grid-cols-2'>

                                                            {products.map(product => <div key={product.id} className='flex items-center gap-2 p-3 shadow'>
                                                                <input value={product.id} type='checkbox' onChange={e => handleProductSelection(e, product)} />
                                                                <label htmlFor={product.name}>{product.name}</label>
                                                            </div>)}

                                                        </div>
                                                        {selectedProducts.length < 1 && <p className="mt-2 text-sm font-thin text-red-600">Select a product</p>}
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                                <button
                                                    type="button"
                                                    className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-[#018C79] py-2 px-4 text-sm font-medium text-white shadow-sm "
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
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
