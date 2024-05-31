import axios from "axios"
import { useState } from "react"
import { toast } from "sonner"
import { User } from "../types/global"


export const useFetch = (url: string) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState<[object] | User[]>([])


    const fetchData = async () => {

        try {
            setLoading(true)
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data)

        } catch (error) {

            toast.error("An Error occurred.")
            setLoading(false)
            setError(true)
        }
    }

    const fetchOneItem = async (id: string) => {

        try {
            setLoading(true)
            const response = await axios.get(`${url}/${id}`)
            setLoading(false)
            setData(response.data)

        } catch (error) {

            toast.error("An Error occurred.")
            setLoading(false)
            setError(true)
        }
    }











    return { data, loading, error, fetchData, fetchOneItem }

}

