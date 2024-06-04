import { ListProps } from "@/lib/types";
import Link from "next/link";
import React from "react";


export default function List({ name, slug }: ListProps) {
    return (
        <li>
            <Link className="bg-white p-4 block w-full shadow-sm" href={slug}>
                {name}
            </Link>
        </li>
    );
}
