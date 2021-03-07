import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles'
import {AuthProvider} from "components/AuthProvider/authProvider"
import theme from "themes/theme.js"
import App from './views/.app/App';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <App />          
        </BrowserRouter>
      </AuthProvider>
    </MuiThemeProvider>,
  document.getElementById('root')
);


