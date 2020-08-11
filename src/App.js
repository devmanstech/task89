import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from "./LandingPage";
import {createMuiTheme,ThemeProvider} from "@material-ui/core/styles";
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 490,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})


function App() {
  return (
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
  );
}

export default App;
