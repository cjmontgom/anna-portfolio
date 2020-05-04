import { createGlobalStyle } from 'styled-components';

// @ts-ignore
import FavoritRegular from './favorit-regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Favorit';
        src: local('Favorit'), local('Favorit'),
        url(${FavoritRegular}) format('woff');
    }
`;