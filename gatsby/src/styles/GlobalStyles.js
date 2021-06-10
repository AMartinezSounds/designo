import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Jost', sans-serif;
        color: white;
        overflow-x: hidden;
        font-size: 1rem;
        font-weight: 200;
    }
    ul {
        list-style: none;
    }
    nav {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: black;
        font-size: .95rem;
    }
    h1 {
        font-size: 2rem;
    }
    p {
        font-size: 1rem;
    }
    .button {
        font-size: 1rem;
        text-transform: uppercase;
        padding: 1.6rem 1rem;
        background-color: white;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        font-weight: 500;
    }
    .button:hover{
        background-color: #FFAD9B; 
        color: white;
        
    }
`;

export default GlobalStyles;
