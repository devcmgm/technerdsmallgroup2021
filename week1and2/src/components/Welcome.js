import React from "react";
import splash from "../splashimg.png"
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export default function Welcome() {
    const theme = createMuiTheme({
        palette: {
            primary: yellow,
        },
    });

    return(
        <div>
           <div>
               <img alt="prayerguide" style={{ align: "center", width:"100%", height:"100%" }} src={splash}/>
           </div>
            <div>
                <ThemeProvider theme={theme}>
                <Button style={{ marginLeft: "100px"}}  onClick={() => alert("Ready to Begin")} variant="contained" color="primary" disableElevation>
                    Ready To Play
                </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}
