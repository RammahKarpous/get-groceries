import Link from "next/link";
import React from "react";

type PlusButtonProps = {
    href: string
}

export default function PlusButton({ href }: PlusButtonProps) {
    return (
        <Link href={href} className="bg-orange w-10 h-10 rounded-full flex items-center justify-center shadow-orange">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                    fill="black"
                />
            </svg>
        </Link>
    );
}
