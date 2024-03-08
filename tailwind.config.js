/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#ff00ff",
                    "secondary": "#38b6ff",
                    "accent": "#00ffff",
                    "neutral": "#ff00ff",
                    "base-100": "#ff00ff",
                    "info": "#0000ff",
                    "success": "#00ff00",
                    "warning": "#00ff00",
                    "error": "#ff0000",
                },
            },
        ],
    },
};