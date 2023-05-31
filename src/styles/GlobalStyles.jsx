import { createGlobalStyle } from 'styled-components';
import background from '../assets/noise-bg.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Hepta Slab';
    background: url(${background}), #121214;
    color: #fff;
  }

  #root,
  html,
  body {
    width: 100%;
    height: 100%;
  }

  :root {
    --primary: transparent;
    --secondary: #363a44;
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: var(--primary);
    border-radius: 5px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary);
    border-radius: 14px;
    border: 3px solid var(--primary);
  }

  img {
    aspect-ratio:1/1;
  }
`;
