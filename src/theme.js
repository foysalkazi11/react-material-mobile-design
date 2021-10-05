import { createTheme } from '@mui/material/styles';

const primary = "#005DFF";
// const secondary = "#B3294E";
const backgroundDefault = "#FEFEFE";
const backgroundGrey = "#E9F2FE";
const ligthGrey = "#ccc";


const theme = createTheme({
    palette:{
        primary: { main: primary },
        // secondary: { main: secondary },
        background: { default: backgroundDefault },
        common:{
            backgroundGrey,
            ligthGrey
        }
    }
    
})

export default theme;