import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import './config/ReactotronConfig';
import Routes from './routes';

import GlobalStyle from './styles/global';

if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize('UA-153539086-1', {
    debug: true,
  });
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}

export default App;
