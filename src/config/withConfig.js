/*
 * This is a higher-order component (HOC) used to apply middleware, global styles, etc...
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

import store from '../store';

const withConfig = BaseComponent => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const appStore = createStore(
    store,
    composeEnhancers(applyMiddleware(thunkMiddleware, createLogger()))
  );
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#ffa040',
        main: '#ff6f00',
        dark: '#c43e00',
        contrastText: '#FFF'
      },
      secondary: {
        light: '#534bae',
        main: '#1a237e',
        dark: '#000051',
        contrastText: '#FFF'
      }
    },
    background: {
      default: '#000000'
    },
    typography: {
      useNextVariants: true
    }
  });

  return () => (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={appStore}>
        <BrowserRouter>
          <BaseComponent />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
  );
};

export default withConfig;
