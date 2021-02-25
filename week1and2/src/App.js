<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { GlobalContext } from "./utils/GlobalContext";
import "./App.css";
=======
import React from 'react'
import './App.css'
>>>>>>> 5e66ea68996327059bc60252d933b5feae0b88e6

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

    return (<div className="App">
            <GlobalContext.Provider value={{user}}>
                    <Routes />
                </GlobalContext.Provider>
            </div>
    );
}

export default App;
