import React from "react";

// Import types
import { IconProps } from "@/types/types";

export default function ChatIcon({ color = "white", width = 24, height = 24, isActive, classes }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
        >
            <path
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.2L4 17.2V4H20V16ZM17 11H15V9H17V11ZM13 11H11V9H13V11ZM9 11H7V9H9"
                fill={`${isActive ? 'orange' : `${color}`}`}
            />
        </svg>
    );
}
