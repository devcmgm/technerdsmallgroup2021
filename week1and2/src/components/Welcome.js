import React from "react";
import splash from "../splashimg.png"
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import "../App.css";

export default function Welcome() {
    const history = useHistory();
    const theme = createMuiTheme({
        palette: {
            primary: yellow,
        },
    });

    return(
        <div className="Welcome">
           <div>
               <img alt="prayerguide" style={{ align: "center", width:"100%", height:"100%" }} src={splash}/>
                <ThemeProvider theme={theme}>
                <Button style={{ marginLeft: "20%"}}  onClick={() => history.push('/faq')} variant="contained" color="primary" disableElevation>
                    Ready To Play
                </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}
