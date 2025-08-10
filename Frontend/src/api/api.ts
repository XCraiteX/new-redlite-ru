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

    export const send_message = async (name: string, reason: string, details: string) => {

        const message = `Жалоба на аккаунт:\n\n👤 Имя: ${name}\n🔖 Причина: ${reason}\n✉️ Описание\n${details}`

        const response = await axios.post('https://redlite.ru/skylite/api/msg', 
            { user: 883790019, message: message }, { withCredentials: true })

        return response.data 
    }
}