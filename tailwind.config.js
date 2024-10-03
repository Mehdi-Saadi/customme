import formsPlugin from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rose: {
                    750: '#a72f3b',
                    950: '#641c23',
                },
            },
            fontSize: {
                '2xs': ['0.625rem', '0.75rem'],
            },
        },
    },
    plugins: [formsPlugin],
};
