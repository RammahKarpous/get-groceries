import React from "react";
import { IconProps } from "@/lib/types";

export default function SettingsIcon({color = "white", width = 24, height = 24, isActive, classes}: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
        >
            <path
                d="M12 15.5C11.0717 15.5 10.1815 15.1313 9.52509 14.4749C8.86871 13.8185 8.49996 12.9283 8.49996 12C8.49996 11.0717 8.86871 10.1815 9.52509 9.52513C10.1815 8.86875 11.0717 8.5 12 8.5C12.9282 8.5 13.8185 8.86875 14.4748 9.52513C15.1312 10.1815 15.5 11.0717 15.5 12C15.5 12.9283 15.1312 13.8185 14.4748 14.4749C13.8185 15.1313 12.9282 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12C19.5 11.67 19.47 11.34 19.43 11L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.66 15.5 5.32 14.87 5.07L14.5 2.42C14.4796 2.30222 14.4183 2.19543 14.3268 2.11855C14.2353 2.04168 14.1195 1.99968 14 2H9.99996C9.74996 2 9.53996 2.18 9.49996 2.42L9.12996 5.07C8.49996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.72996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.65 4.56996 12.97L2.45996 14.63C2.26996 14.78 2.20996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.94C7.95996 18.34 8.49996 18.68 9.12996 18.93L9.49996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.5 18.67 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z"
                fill={`${isActive ? 'orange' : `${color}`}`}
            />
        </svg>
    );
}
