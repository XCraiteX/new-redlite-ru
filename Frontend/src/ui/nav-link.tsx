import React from "react"

type navLinkScheme = {
    title: string;
    icon?: React.ReactNode;
    path: string;
    className?: string;
    action: (path: string) => void;
}

export default function NavLink({ title, icon, action, path, className }: navLinkScheme){
    return (
    <button onClick={() => action(path)} className={`flex gap-2 rounded-full shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px]  hover:bg-[#ff0000]/10 nav-a ${className}`}>
        {icon}{title}
    </button>)
}

