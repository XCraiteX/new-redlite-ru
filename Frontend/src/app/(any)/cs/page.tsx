"use client"
import { api } from "@/api/api";
import Select from "@/components/ui/select";
import { useState } from "react"

const options = ["Читы", "Тим с читом", "Грифинг", "Другое"]
type reasonType = typeof options[number]

export default function Home(){

    const [name, setName] = useState<string>(''); 
    const [reason, setReason] = useState<reasonType | 'Выберите вариант..'>('Выберите вариант..'); // Изначально строка
    const [details, setDetails] = useState<string>('')
    const [status, setStatus] = useState<string>('')

    const sendReport = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await api.send_message(name, reason, details)

        if (response.status == 'OK'){
            setStatus(response.detail)
        }
    }

    return(
        <section className="flex w-full min-h-screen justify-center items-center">
            <form className="glass flex flex-col gap-2" onSubmit={sendReport}>
                <h1 className="text-3xl">Отправить жалобу на аккаунт</h1>
                <hr className="border-white/40"/>

                <label className="text-xl">Имя аккаунта</label>
                <input
                    className="border-1 border-white/20 p-2 rounded-sm bg-red-700/10 outline-none text-lg"
                    placeholder="xcraitex1.."
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="text-xl">На что жалоба</label>
                <Select placeholder="Выберите вариант.." options={options} onValueSet={setReason} />


                <label className="text-xl">Детали</label>
                <textarea
                    placeholder="Любая подробная информация и уточнение"
                    className="w-full min-h-10 max-h-40 text-lg bg-red-700/10 border-1 border-white/20 p-2 rounded-sm outline-none"
                    onChange={(e) => setDetails(e.target.value)} value={details}
                />

                <button type="submit" className="text-xl p-1 bg-red-700/20 border-1 border-white/20 hover:bg-red-600/25 duration-[0.2s] rounded-sm">
                    Отправить
                </button>
                <span className="text-md text-center">{status}</span>

            </form>

        </section>
    )
}