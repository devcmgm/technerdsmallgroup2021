
import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { GlobalContext } from "./utils/GlobalContext";
import "./App.css";

function App() {
    const user = useState({})
    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            ;
        } catch (error) {
            if (error !== "not identified") {
                console.log(
                    "There was an error",
                    error
                );
            }
        }
    }

    return (<div >
            <GlobalContext.Provider value={{user}}>
                    <Routes />
                </GlobalContext.Provider>
            </div>
    );
}

export default App;
