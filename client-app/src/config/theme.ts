import { createTheme } from '@mui/material/styles';
/**
 * theme
 */
let primary="#141A20"
let secondary='#EFB90B'


const theme = createTheme({
  palette: {
    primary: {
      main:primary ,
    },
    secondary: {
      main:secondary ,
    },
  },
  
});


export {
    theme
}