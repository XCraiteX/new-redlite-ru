'use client'
import { GlobalStores } from "@/stores/global"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Profile() {
    const { authorized, login, fetch: fetchMe } = GlobalStores.me()
    const router = useRouter()

    useEffect(() => {
        if (authorized == undefined) {
            fetchMe()
        } else if (authorized) {
            router.push(`/profile/${login}`)
        } else {
            router.push('/login')
        }
    }, [authorized])

    return (<></>)
}
