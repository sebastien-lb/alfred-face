import * as React from 'react';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import {Add} from '@material-ui/icons/';

interface IScenarioAddState {
    name: string;
}

interface IScenarioAddProps {
    userToken?: string;
}

class ScenariosAddPage extends React.Component<IScenarioAddProps, IScenarioAddState> {

    constructor(props: IScenarioAddProps) {
        super(props);
        this.state = {
            name: ''
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
                </div>
                <div className="AddScenarioForm-Acitons">
                    <span>Actions</span>
                    <IconButton color="primary" onClick={()=>this.handleAddAction()}><Add /></IconButton>
                </div>
            </div>
        )
    }
}

export { ScenariosAddPage } ;