/*
  This theme file follows System UI Theme Specification
  https://system-ui.com/theme/
*/

const themeSchema = {
    space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    padding: [0, 1, 3, 5, 10, 15, 20],
    borderWidth: [0, 1, 3, 5],
    radii: [0, 3, 4, 6, 8, 12, 22],
    fontSizes: [8, 10, 14, 16, 18, 20, 24, 28, 32, 36],
    sizes: {
        card: {
            small: {
                width: 200,
                height: 300,
            },
            medium: {
                width: 233,
                height: 360,
            },
        },
        icon: {
            xsmall: 20,
            small: 30,
            medium: 60,
            large: 100,
            xlarge: 180,
        },
    },
    colors: {
        white: '#fff',
        black: '#000',
        red: '#ff0000',
        transparent: 'transparent',
        lightboxBackground: '#00000090',
        grays: {
            100: '#f4f4f4',
            200: '#e1e1e7',
            300: '#ddd',
            400: '#bbb',
            500: '#999',
            600: '#777',
            700: '#666',
            800: '#444',
            900: '#333',
        },
        blues: {
            300: '#5dbdff',
            500: '#008dcf',
            700: '#00609e',
        },
        oranges: {
            500: '#ffca47',
            700: '#ff9900',
            900: '#c66a00',
        },
    },

    // Aliases
    DEFAULT_MARGIN: 50,
    HERO_DOTPAGINATOR_TOP: -50,
};

export default themeSchema;
