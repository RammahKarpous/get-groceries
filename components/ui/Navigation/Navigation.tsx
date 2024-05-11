"use client";

import React from "react";
import UserIcon from "../../icons/UserIcon";
import CartIcon from "@/components/icons/CartIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import Link from "next/link";
import { route } from "@/lib/route";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { route: route.profile, icon: <UserIcon isActive={pathname == route.profile ? true : false} />},
        { route: route.home, icon: <CartIcon isActive={pathname == route.home ? true : false} />},
        { route: route.home, icon: <ChatIcon isActive={pathname == route.home ? true : false} />},
        { route: route.settings, icon: <SettingsIcon isActive={pathname == route.settings ? true : false} />}
    ]

    return (
        <nav className="bg-black py-2 fixed bottom-0 w-full">
            <ul className="flex justify-around">
                {links.map( (link, i) => (
                    <li key={i}>
                        <Link href={link.route} className="flex flex-col gap-1 items-center">
                            {link.icon}

                            {pathname === link.route ? (
                                <span className="w-1 h-1 rounded-full bg-orange"></span>
                            ) : null}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
