import React from "react";

export default function Header({ children }: { children: React.ReactNode}) {
    return (
        <div className="bg-orange text-center p-2">
            <h1 className="font-semibold">{children}</h1>
        </div>
    );
}
