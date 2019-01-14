import * as React from 'react';

import TextField from '@material-ui/core/TextField';

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
    public render() {
        return (
            <div className="AddScenarioForm">
                <TextField 
                    id="name"
                    value={this.state.name}
                    className="AddScenarioForm-TextField"
                    onChange={(ev)=>this.handleNameChange(ev.target.value)} />
            </div>
        )
    }
}

export { ScenariosAddPage } ;