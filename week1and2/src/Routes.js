import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import StartHere from "./components/StartHere";
import FAQ from "./components/FAQ";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import Myhtml from "./components/Myhtml";

export default function Routes() {
    return (
        <Switch>
             <Route exact path="/myhtml">
                <Myhtml />
            </Route>
            <Route exact path="/">
                <Welcome />
            </Route>
            <PublicRoute exact path="/faq">
                <FAQ />
            </PublicRoute>
            <PrivateRoute exact path="/start">
                <StartHere />
            </PrivateRoute>
        </Switch>
            );
}
