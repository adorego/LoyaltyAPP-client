import React from 'react';
import './App.css';
import { createTheme, ThemeProvider} from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red'
import {TabListApp} from "./components/TabListApp/TabListApp";

const theme = createTheme({
    palette:{
        primary: blue,

        secondary:red
    }

})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div>
          <TabListApp />
        </div>
      </ThemeProvider>
  );
}

export default App;
