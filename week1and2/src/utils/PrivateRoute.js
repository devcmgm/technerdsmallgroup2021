import React, {useEffect} from "react";
import { Route , useHistory } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

export default function PrivateRoute({ children, ...rest }) {
    const { myState } = useGlobalContext();
    const history = useHistory();

    useEffect(() => {
        if (myState) {
            history.push("/");
        }
    });

    console.log("work" + myState)
    return (
        <Route {...rest}>
                children
        </Route>
    );
}
