'use client'
import Background from "@/components/global/Background";
import { GlobalStores } from "@/stores/global";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { authorized, login, fetch: fetchMe } = GlobalStores.me()
  
  const router = useRouter()

  useEffect(() => {
    if (authorized == undefined) fetchMe()
  }, [authorized, login, fetch])

  if (authorized == true){
      router.push(`/profile/${login}`)
  }
  
  return (
    <>
        <Background link="/videos/background.mp4"/>
        {
          authorized === false ? (children) : (<></>)
        }
    </>
  );
}
