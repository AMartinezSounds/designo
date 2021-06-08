import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    body {
        font-family: 'Jost', sans-serif;
        color: white;
        overflow-x: hidden;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
    }
    h1 {
        font-size: 4.5rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: 200;
    }
    .button {
        font-size: 1.6rem;
        text-transform: uppercase;
        height: 56px;
        width: 152px;
        background-color: white;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }
    .button:hover{
        background-color: #FFAD9B; 
        color: white;
        
    }
`;

export default GlobalStyles;
