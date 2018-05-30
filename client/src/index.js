import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
//import 'materialize-css/dist/css/materialize.min.css'
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


//import {BrowserRouter} from 'react-router-dom';
const theme = createMuiTheme({
    palette: {
      type: 'dark', // Switching the dark mode on is a single property value change.
    },
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
   <CssBaseline>
   <App /> 
   </CssBaseline>
   </MuiThemeProvider>, document.getElementById('root'));
 registerServiceWorker();