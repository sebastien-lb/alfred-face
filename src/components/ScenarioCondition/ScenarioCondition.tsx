import * as React from 'react';

import Selector from '../Selector/Selector';

import { TextField } from '@material-ui/core';

class ScenarioCondition extends React.Component {


    public render(){
        return (
            <div>
                <Selector name="Object" values={[{id: "1", name: "1"},{id: 2, name: "2"}, {id: 3, name: "3"}]} />
                <Selector name="DataSource" values={[{id: "1", name: "1"},{id: 2, name: "2"}, {id: 3, name: "3"}]} />
                <Selector name="Operator" values={[{id: "1", name: "1"},{id: 2, name: "2"}, {id: 3, name: "3"}]} />
                <TextField name="Value" />
            </div>
        );
    }
}

export { ScenarioCondition };