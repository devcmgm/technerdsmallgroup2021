import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

class VRScene extends React.Component {
    render() {
        return (
            <Scene>
                <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
                <Entity particle-system={{preset: 'snow'}}/>
                <Entity light={{type: 'point'}}/>
                <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
                <Entity text={{value: 'Hello, WebVR!'}}/>
            </Scene>
        );
    }
}

function FAQ() {
    const history = useHistory();
    return (<div>
            <VRScene/>
            <Button style={{ marginLeft: "20%"}}  onClick={() => history.push('/')} variant="contained" color="primary" disableElevation>
                Home
            </Button>
        </div>
    )
}

export default FAQ;
