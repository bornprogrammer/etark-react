import 'core-js/shim';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store, { sagaMiddleware } from './store';
import saga from './sagas/saga';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

import './index.scss';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Lato'].join(','),
    font: {
      color: '#333940'
    }
  },
  root: {
    color: '#333940'
  },
  palette: {
    tertiary: { main: '#004261' },
    primary: { main: '#245FD3' },
    secondary: { main: '#00B4D2' },
    background: { default: '#fcfcfc' },
    error: { main: '#E10C32' },
    success: { main: '#00AB84' }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#ffffff',
        color: '#333940'
      }
    },
    App: {
      content: {
        padding: '0px'
      }
    },
    MuiFormLabel: {
      root: {
        width: 'max-content'
      },
      asterisk: {
        color: '#db3131',
        '&$error': {
          color: '#db3131'
        }
      }
    }
  }
});

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
