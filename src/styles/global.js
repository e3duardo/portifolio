import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', monospace;
  }

  *:focus{
    outline: 100%
  }

  html, body, #root{
    height: 100%;

    background: #929292;
  }

  body: {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  ul: {
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  h3{
    color: rgba(255, 102, 51,.3);
    font-weight: 400;
    span{
      color: #ff6633;

    }
  }
  p{
    margin: 5px 0 15px;
    color: #666;
  }
`;
