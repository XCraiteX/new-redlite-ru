import { API_URL } from "@/config"
import axios from "axios"

export namespace api{

    export const get = async (endpoint: string) => {
        const response = await axios.get(API_URL + endpoint, { withCredentials: true })
        return response.data
    }

    export const post = async (endpoint: string, data: any) => {
        const response = await axios.post(API_URL + endpoint, data, { withCredentials: true })
        return response.data 
    }
}