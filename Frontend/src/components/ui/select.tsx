"use client"
import { useState } from "react"

type select = {
    placeholder?: string
    options: string[]
    onValueSet: (value: string) => void
}

export default function Select({ placeholder, options, onValueSet }: select){

    const [value, setValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return(
        <div className="w-full">
            <div className="p-2 border-1 border-white/20 rounded-sm text-lg flex justify-between w-full bg-red-700/10 hover:bg-red-600/20"
                onClick={() => setIsOpen(!isOpen)}>
                {value ? value : placeholder}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="relative w-full">
                { isOpen && <div className="absolute bg-black w-full text-lg flex flex-col">
                    { options.map((option) => (
                        <span className="hover:bg-white/10 py-1 px-4 cursor-pointer"
                            onClick={() => {
                                setValue(option); 
                                onValueSet(option); 
                                setIsOpen(!isOpen)
                            }}>{option}</span>
                    ))}
                </div>}
            </div>
        </div>
    )
}