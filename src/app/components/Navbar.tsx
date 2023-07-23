import React from 'react';
import Menu from "@/app/components/Menu";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-12 text-orange-500 p-4 flex items-center justify-between border-b-2 border-b-orange-500 uppercase">
            {/* LOGO */}
            <div className="text-xl">
                <Link href="/">adieats</Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu/>
            </div>
        </div>
    )
}
export default Navbar;