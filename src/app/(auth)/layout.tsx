"use client"
import Link from "next/link"
import { usePathname } from "next/navigation" //gets the current path
//ACTIVE LINKS
//highlights the link in usage
//Hooks only work on client components
//all react components are server components by default.

import './styles.css'


const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {

    const pathname = usePathname() //all react compoonents 

    return <div>
        <>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)

                return <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
            })}
        </>
        {children}
    </div>

}
