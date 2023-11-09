/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
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
                popper: 'rgba(0, 0, 0, 0.12) 0px 2px 12px',
            },
            backgroundImage: {
                linear: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55',
            },
            maxHeight: {
                128: 'min((100vh - 96px) - 60px, 760px)',
            },
        },
    },
    plugins: [],
};
