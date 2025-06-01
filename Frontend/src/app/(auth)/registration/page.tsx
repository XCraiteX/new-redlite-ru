'use client'
import Link from "next/link";

import { IoMdSwap } from "react-icons/io";

import { FaUserAstronaut } from "react-icons/fa6";
import { IoMailUnread } from "react-icons/io5";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { useState } from "react";

export default function Page() {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <section className="w-full h-screen flex justify-center items-center">
            <form className="w-[260px] flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl">Регистрация</h1>
                    <Link href="/login" className="p-2 border-1 border-white/0 hover:border-white duration-[0.2s] rounded-sm"><IoMdSwap size={30}/></Link>
                </div>
                
                <div>
                    <hr/>
                </div>
                
                <label htmlFor="login" className="flex gap-2 text-2xl py-2 items-center"><FaUserAstronaut/>Логин</label>
                <input className="input_bg p-1 rounded-sm text-xl outline-none" type="text" value={login} onChange={(e) => setLogin(e.target.value)}/>

                <label htmlFor="login" className="flex gap-2 text-2xl py-2 items-center"><IoMailUnread/>Почта</label>
                <input className="input_bg p-1 rounded-sm text-xl outline-none" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
                
                <label htmlFor="login" className="flex gap-2 text-2xl py-2 items-center"><RiShieldKeyholeFill/>Пароль</label>
                <input className="input_bg p-1 rounded-sm text-xl outline-none" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button className="bg-red-400/20 rounded-sm text-2xl py-1 hover:shadow-[0_0_4px_1px] duration-[0.2s] mt-2">Войти</button>
            </form>
        </section>
    )
}