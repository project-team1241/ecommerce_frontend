/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                nav: "0 4px 10px #1A001F",
            },
        },
    },
    plugins: [],
};
