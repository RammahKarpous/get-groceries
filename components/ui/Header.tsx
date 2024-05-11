import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode}) {
    return (
        <div className="bg-orange text-center p-2 mb-4 fixed w-full top-0">
            <h1 className="font-semibold">{children}</h1>
        </div>
    );
}
