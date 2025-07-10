interface userHeadProps {
    login_link: string;
    profile_link: string;
    login?: string;
    isAuth: boolean;
    default_icon: React.ReactNode;
    logged_icon: React.ReactNode;
    action: (path: string) => void;
}

export default function UserHead( {  login_link, profile_link, login, isAuth, default_icon, logged_icon, action }: userHeadProps ){
    return (
        <button 
            onClick={() => action(isAuth ? profile_link : login_link)}
            className="border-1 border-white/10 nav-a rounded-full backdrop-blur-[12px] bg-[#ff0000]/10 shadow-[#ff0000]/50 hover:shadow-[0_0_6px_1px] hover:bg-[#ff0000]/16 nav-a gap-2">
            {isAuth ? logged_icon : default_icon}
            <p className="header_login">{isAuth ? login : "Login"}</p>
        </button>
    )
}