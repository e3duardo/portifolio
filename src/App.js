import React from 'react';
import { ToastContainer } from 'react-toastify';
import { HashRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import './config/ReactotronConfig';
import Routes from './routes';
import DefaultLayout from './pages/_layouts/default';

import GlobalStyle from './styles/global';

if (process.env.NODE_ENV !== 'development') {
  ReactGA.initialize('UA-153539086-1', {
    debug: true,
  });
}

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
      <ToastContainer autoClose={3000} />
    </HashRouter>
  );
}

export default App;
