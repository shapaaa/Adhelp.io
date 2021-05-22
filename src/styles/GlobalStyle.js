import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    font-size:62.5%;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    padding:0;
    --blue:#1A8FF0;
}
html,body{
    padding: 0;
    margin: 0;
    background-color: #F9F9F9;
}
*{
    box-sizing:border-box;
}`;

export default GlobalStyle;
