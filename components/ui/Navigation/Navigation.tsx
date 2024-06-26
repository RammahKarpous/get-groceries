"use client";

import React from "react";
import UserIcon from "../../icons/UserIcon";
import CartIcon from "@/components/icons/CartIcon";
import ChatIcon from "@/components/icons/ChatIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import Link from "next/link";
import { route } from "@/lib/route";
import { usePathname } from "next/navigation";
import { currentRouteIs } from "@/utils/currentRoute";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { route: route.profile, icon: <UserIcon isActive={currentRouteIs(pathname, route.profile)} />},
        { route: route.shoppingLists, icon: <CartIcon isActive={ currentRouteIs(pathname, route.shoppingLists) || currentRouteIs(pathname, route.createShoppingList) } />},
        { route: route.home, icon: <ChatIcon isActive={currentRouteIs(pathname, route.home)} />},
        { route: route.settings, icon: <SettingsIcon isActive={currentRouteIs(pathname, route.settings)} />}
    ]

    return (
        <nav className="bg-black fixed bottom-0 w-full">
            <ul className="max-w-screen-sm mx-auto">
                {links.map( (link, i) => (
                    <li key={i} className="inline-block h-full w-1/4">
                        <Link href={link.route} className={`flex flex-col gap-1 items-center justify-center w-full ${currentRouteIs(pathname, link.route) ? 'py-2' : "py-4"}`}>
                            {link.icon}

                            {currentRouteIs(pathname, link.route) ? (
                                <span className="w-1 h-1 rounded-full bg-orange"></span>
                            ) : null}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
