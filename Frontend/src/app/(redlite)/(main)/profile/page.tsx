'use client'

// STORES
import { GlobalStores } from "@/stores/global"

// HOOKS
import { useMe } from "@/hooks/useMe";
import { useRouter } from "next/navigation"
import { useEffect } from "react";


export default function Profile() {

    const { authorized, login, setMe } = GlobalStores.me()
    
    const router = useRouter()

    const { data } = useMe()

    // Обновление кэша
    useEffect(() => {
        if(data) setMe(data)
    }, [data])

    
    // Проверка перенаправлений
    useEffect(() => {
        if (authorized) {
            router.push(`/profile/${login}`)
        } else {
            router.push('/login')
        }
    }, [authorized])

    return (<></>)
}
