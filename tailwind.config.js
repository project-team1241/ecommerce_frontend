/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                "nav-shadow": "0 4px 20px #1A001F", // Customize offset, blur, and spread
            },
        },
    },
    plugins: [],
};
