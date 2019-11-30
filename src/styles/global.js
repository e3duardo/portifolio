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

    font-family: 'Fira Code', monospace;
    text-transform: lowercase;
  }
  *,*:before,*:after{
    box-sizing: border-box;
  }

  *:focus{
    outline: 100%
  }

  html, body, #root{
    height: 100%;

    background: #929292;
    line-height: 1.3rem;
    text-align: justify;
  }

  #root{
    padding: 10px;
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
    font-weight: 400;
    color: #ff6633;
    margin-bottom:10px;
    margin-top:20px;
  }
  p{
    margin: 5px 0 15px;
    color: #666;
  }
  progress{
    appearance: none;
    width: 100%;
    background: transparent;
    color: #ff6633;
    [value]{
      background: #ff6633;
    }
  }
`;
