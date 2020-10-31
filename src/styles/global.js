import { createGlobalStyle } from "styled-components";

import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;

    font-family: 'Fira Code', monospace;

    @media print {
      font-family: 'Roboto', sans-serif;
    }
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
    line-height: 1.4rem;
    text-align: justify;

    @media print {
      background: none;
    }
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
  h3.mt-3{
    margin-top: 30px;
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

  h1,h2{
    line-height: 1.4em;
  }


  @media print {
   .mylivechat_inline {
     display: none;
   }
  }
`;
