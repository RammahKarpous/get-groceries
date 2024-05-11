import React from "react";
import UserIcon from "../../icons/UserIcon";
import CartIcon from "@/components/icons/CartIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import Link from "next/link";
import { route } from "@/lib/route";

export default function Navigation() {

    const links = [
        { route: route.profile, icon: <UserIcon />},
        { route: route.home, icon: <CartIcon />},
        { route: route.home, icon: <ChatIcon />},
        { route: route.home, icon: <SettingsIcon />}
    ]

    return (
        <nav className="bg-black py-2 fixed bottom-0 w-full">
            <ul className="flex justify-around">
                {links.map( (link, i) => (
                    <li key={i}>
                        <Link href={link.route} className="flex flex-col gap-1 items-center">
                            {link.icon}
                            <span className="w-1 h-1 rounded-full bg-orange"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
