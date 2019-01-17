import * as React from 'react';
import {Redirect} from 'react-router-dom';

import Button from '@material-ui/core/Button';

interface IScenariosPageState {
    shouldRedirect: boolean;
}
class ScenariosPage extends React.Component<{}, IScenariosPageState> {

    constructor(props: any){
        super(props);
        this.state = {
            shouldRedirect: false,
        };
    }

    public handleAddScenario() {
        this.setState({
            shouldRedirect: true,
        });
    }

    public render() {
        return (
            <div id="Scenarios">
                {
                    this.state.shouldRedirect ?
                        <Redirect to="/addScenarios" push={true} />:
                        <Button color="primary" onClick={() => this.handleAddScenario()} >Add New Scenario</Button>
                }
            </div>
        )
    }
}

export  {ScenariosPage} ;