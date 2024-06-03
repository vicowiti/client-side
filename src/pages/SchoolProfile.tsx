import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product, School } from "../types/global"
import { getSchoolById } from "../services/schools/data"
import { IoSchool } from "react-icons/io5"
import { MdLocationOn } from "react-icons/md"
import { FaPhone, FaSchoolCircleCheck } from "react-icons/fa6"
import { getAllProducts } from "../services/products/data"
import { FaDotCircle } from "react-icons/fa"
import { Donut } from "../components/charting/Donut"
import { AppDispatch, RootState, useAppDispatch } from "../redux/store/store"
import { getOneSchoolInvoices } from "../redux/slices/InvoiceSlice"
import { useSelector } from "react-redux"
import SchoolInvoices from "../components/SchoolInvoices"



const SchoolProfile = () => {
    const { id } = useParams()
    const [school, setSchool] = useState<School | null>(null)
    const [products, setProducts] = useState<Product[]>([])
    const dispatch: AppDispatch = useAppDispatch()

    const { schoolInvoices } = useSelector((state: RootState) => state.invoices)

    useEffect(() => {
        async function fetchSchool() {
            if (id) {
                const response = await getSchoolById(id)
                setSchool(response)
                const productResponse = await getAllProducts()
                setProducts(productResponse)
                await dispatch(getOneSchoolInvoices(id))
            }
        }
        fetchSchool()
    }, [id])

    const usedProducts = products?.filter(obj => school?.products.includes(obj.id));

    return (
        <section className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>

            <header className="flex flex-col mb-4 gap-3 justify-between lg:flex-row">
                <div className=" bg-white p-3 rounded-lg shadow flex flex-col flex-1  gap-3">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <IoSchool color="#018C79" size={20} />
                        </div>

                        <p className="text-xl">{school?.name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <MdLocationOn color="#018C79" size={20} />
                        </div>

                        <p className="text-xl">{school?.county}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <FaPhone color="#018C79" size={20} />
                        </div>
                        <p className="text-xl">{school?.contact}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <FaSchoolCircleCheck color="#018C79" size={20} />
                        </div>
                        <p className="text-xl">{school?.type}</p>
                    </div>
                </div>
                <div className="flex-1 p-3 rounded-lg shadow bg-white">
                    <h3 className="font-bold my-3 text-gray-500 text-2xl">Zeraki Products Subscribed</h3>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-1 flex-col gap-2">
                            {usedProducts?.map(product => (
                                <div className="flex items-center gap-2" key={product.id}><FaDotCircle color="#018C79" size={10} />{product.name}</div>
                            ))}

                        </div>
                        <div className="flex-1">
                            <Donut totalProduct={usedProducts.length} />
                        </div>
                    </div>
                </div>
            </header>

            <main >
                <section className="bg-white rounded-lg p-3 my-5">
                    {id && <SchoolInvoices id={id} invoices={schoolInvoices} usedProducts={usedProducts} />}
                </section>

            </main >
        </section >
    )
}

export default SchoolProfile