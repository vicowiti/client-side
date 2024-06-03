import { useEffect } from "react"

import SchoolsTable from "../components/SchoolsTable"
import { useSelector } from "react-redux"
import { AppDispatch, RootState, useAppDispatch } from "../redux/store/store"
import { getSchools } from "../redux/slices/SchoolSlice"




const Schools = () => {

    const { schools } = useSelector((state: RootState) => state.schools)
    const dispatch: AppDispatch = useAppDispatch()

    useEffect(() => {

        async function fetchSchools() {

            await dispatch(getSchools())
        }

        fetchSchools()
    }, [dispatch])


    return (
        <div className='text-black bg-[#f0eff4] lg:pt-[11rem] pt-[11rem] min-h-screen p-4 lg:p-8 rounded-t-2xl'>
            <SchoolsTable schools={schools} />
        </div>
    )
}

export default Schools