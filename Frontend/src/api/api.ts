import { API_URL } from "@/config"
import { MeScheme } from "@/schemas/response/auth/me.scheme"
import axios from "axios"

export namespace api{

    export const me = async (): Promise<MeScheme> => {
        const data = await api.get('me')
        return data
    }

    export const get = async (endpoint: string) => {
        const response = await axios.get(API_URL + endpoint, { withCredentials: true })
        return response.data
    }

    export const post = async (endpoint: string, data: any) => {
        const response = await axios.post(API_URL + endpoint, data, { withCredentials: true })
        return response.data 
    }
}