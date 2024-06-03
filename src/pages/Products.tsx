import { useEffect } from "react"
import { FaCheck } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import AddProduct from "../components/AddProducts"
import { AppDispatch, RootState, useAppDispatch } from "../redux/store/store"
import { useSelector } from "react-redux"
import { getProducts } from "../redux/slices/ProductSlice"


const Products = () => {
    return <section className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>
        <ProductsTable />
    </section>
}
export default Products

function ProductsTable() {

    const { products } = useSelector((state: RootState) => state.products)
    const dispatch: AppDispatch = useAppDispatch()

    useEffect(() => {
        async function fetchProducts() {
            await dispatch(getProducts())
        }
        fetchProducts()
    }, [dispatch])
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-2xl font-bold text-gray-500">Zeraki Products</h1>

                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <AddProduct />
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
                                            Id
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Target
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Description
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Active
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {product.id}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.name}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.target}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.description.substring(0, 20)}...</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.active ? <FaCheck color="green" /> : <FaTimes color="red" />}</td>

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
