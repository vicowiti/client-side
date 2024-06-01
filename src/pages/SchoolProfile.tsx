import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product, School } from "../types/global"
import { getSchoolById } from "../services/schools/data"
import { IoSchool } from "react-icons/io5"
import { MdLocationOn } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { getAllProducts } from "../services/products/data"
import { FaDotCircle } from "react-icons/fa"


const SchoolProfile = () => {
    const { id } = useParams()
    const [school, setSchool] = useState<School | null>(null)
    const [products, setProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        async function fetchSchool() {
            if (id) {
                const response = await getSchoolById(id)
                setSchool(response)
                const productResponse = await getAllProducts()
                setProducts(productResponse)
            }
        }
        fetchSchool()
    }, [id])

    const usedProducts = products?.filter(obj => school?.products.includes(obj.id));

    return (
        <section className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>

            <header className="flex flex-col justify-between lg:flex-row">
                <div className=" flex flex-col flex-1 gap-3">

                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <IoSchool color="#018C79" size={20} />
                        </div>

                        <p className="text-2xl">{school?.name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <MdLocationOn color="#018C79" size={20} />
                        </div>

                        <p className="text-2xl">{school?.county}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-md bg-white shadow-md">
                            <FaPhone color="#018C79" size={20} />
                        </div>

                        <p className="text-2xl">{school?.contact}</p>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold my-3 text-gray-500 text-2xl">Zeraki Products Subscribed</h3>
                    <div>
                        {usedProducts?.map(product => (
                            <div className="flex items-center gap-2" key={product.id}><FaDotCircle size={10} />{product.name}</div>
                        ))}
                    </div>
                </div>
            </header>

            <main>
                <h3>Invoices</h3>
                <h3>Collections</h3>
            </main>
        </section>
    )
}

export default SchoolProfile