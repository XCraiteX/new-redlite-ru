import { API_URL } from "@/config"
import axios from "axios"

export namespace api{
    export const get = async (endpoint: string) => {
        return await axios.get(API_URL + endpoint, { withCredentials: true })
    }

    export const post = async (endpoint: string, data: any) => {
        return await axios.post(API_URL + endpoint, data, { withCredentials: true })
    }
}