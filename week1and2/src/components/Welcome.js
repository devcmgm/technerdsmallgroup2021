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
               <img alt="prayerguide" style={{ align: "center", width:"75%", height:"75%" }} src={splash}/>
               <hr/>
                <ThemeProvider theme={theme}>
                <Button onClick={() => history.push('/faq')} variant="contained" color="primary" disableElevation>
                    Ready To Play
                </Button> -- <Button   onClick={() => history.push('/myhtml')} variant="contained" color="blue" disableElevation>
                    Aframe HTML Demo
                </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}
