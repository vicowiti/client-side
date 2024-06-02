import { useEffect, useState } from "react"
import { getAllSchools } from "../services/schools/data"
import { School } from "../types/global"
import SchoolsTable from "../components/SchoolsTable"




const Schools = () => {
    const [schools, setSchools] = useState<School[]>([])


    useEffect(() => {

        async function fetchSchools() {
            const mySchools = await getAllSchools()
            setSchools(mySchools)
        }

        fetchSchools()
    }, [])


    return (
        <div className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>
            <SchoolsTable schools={schools} />
        </div>
    )
}

export default Schools