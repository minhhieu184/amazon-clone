module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                popup: {
                    '0%': {
                        transform: 'scale(1)'
                    },
                    '30%': {
                        transform: 'scale(1.2)'
                    },
                    '80%': {
                        transform: 'scale(0.9)'
                    },
                    '100%': {
                        transform: 'scale(1)'
                    }
                }
            }
        },

    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}