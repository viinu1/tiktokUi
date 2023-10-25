/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        fontSize: {
            14: '1.4rem',
            16: '1.6rem',
            20: '2rem',
            32: '3.2rem',
            48: '4.8rem',
        },
        extend: {
            colors: {
                primary: '#243c5a',
                seconde: '#fe4d70',
                text: '#575860',
                blackColor: '#161823',
                textSecond: '#1618231f',
                hoverColor: 'rgba(22,24,35,0.12)',
                linear: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55',
            },
            boxShadow: {
                sm: '0px 1px 1px rgba(0, 0, 0, 0.12)',
            },
            backgroundImage: {
                linear: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55',
            },
        },
    },
    plugins: [],
};
