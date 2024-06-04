import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
			colors: {
				body: "#FBFBFB",
                black: "#1A1818",
                orange: "#FFA500",
                green: "#339A33",
                gray: {
                    light: "#F0F0F0"
                }
			},
        },
    },
    plugins: [],
};
export default config;
