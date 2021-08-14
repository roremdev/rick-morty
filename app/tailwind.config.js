module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    darkMode: false,
    theme: {
        fontFamily: {
            rubik: ['Rubik', 'sans-serif'],
        },
        fontSize: {
            base: '1rem',
            lg: '1.5rem',
            '2xl': '2.25rem',
        },
        textColor: {
            primary: '#3B4252',
            white: '#FFF',
        },
        color: {
            nord: {
                0: '#2E3440',
                2: '#4C566A',
                7: '#F2F4F8',
                8: '#F8F9FB',
            },
            aurora: {
                red: '#BF616A',
                green: '#A3BE8C',
            },
            frost: {
                jade: '#8FBCBB',
                'blue-gray': '#5E81AC',
            },
        },
    },
};
