import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import { IObjectAction, } from '../../interfaces'; // IScenarioCondition 

import {Add} from '@material-ui/icons/';

// import { ScenarioCondition } from 'src/components';

interface IScenarioAddState {
    name: string;
    conditions: any[];
    actions: IObjectAction[];
}

interface IScenarioAddProps {
    userToken?: string;
}

class ScenariosAddPage extends React.Component<IScenarioAddProps, IScenarioAddState> {

    constructor(props: IScenarioAddProps) {
        super(props);
        this.state = {
            name: '',
            conditions: [],
            actions: []
        }
    }

    public handleNameChange(name: string) {
        this.setState({ name });
    }

    public handleAddCondition() {
        console.log("new condition");
    }

    public handleAddAction() {
        console.log("new action");
    }

    public render() {
        return (
            <div className="AddScenarioForm">
                <TextField 
                    id="name"
                    value={this.state.name}
                    className="AddScenarioForm-TextField"
                    onChange={(ev)=>this.handleNameChange(ev.target.value)} />

                <div className="AddScenarioForm-Conditions">
                    <span>Conditions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddCondition()}><Add /></IconButton>
                    <div className="AddScenarioForm-ConditionContainer">
                        {(this.state.conditions || []).map((value, index) => {
                            return <div key={index}>{value}</div>;
                        })}
                        {/* <ScenarioCondition /> */}
                    </div>
                </div>
                <div className="AddScenarioForm-Acitons">
                    <span>Actions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddAction()}><Add /></IconButton>
                    <div className="AddScenarioForm-ActionContainer">
                        {(this.state.actions || []).map((value, index) => {
                            return <div key={index}>{value}</div>;
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export { ScenariosAddPage } ;