import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import FavoritLight from './favorit-light.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Favorit';
        src: local('Favorit'), local('Favorit'),
        url(${FavoritLight}) format('woff');
    }
`;