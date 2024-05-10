import React from "react";

export default function HamburgerMenu() {
    const bars = "bg-black h-[3px] w-full"
    
    return (
        <div className="flex flex-col w-6 h-6 justify-between">
            <div className={bars}></div>
            <div className={bars}></div>
            <div className={bars}></div>
        </div>
    );
}
