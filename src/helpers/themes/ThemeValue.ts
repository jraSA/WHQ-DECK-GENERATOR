import get from 'lodash/get';

import defaultTheme from '../../theme/defaultTheme';

export interface Theme {
    theme: object;
}

/**
 * Get a value from 'props.theme', defaulting to the corresponding value from the default theme
 * @param {object} props Description.
 * @param {string} valPath Description.
 */
const themeValue = (theme: Theme, valPath: string) => {
    return get(theme, valPath) || get(defaultTheme, valPath);
};

export default themeValue;
