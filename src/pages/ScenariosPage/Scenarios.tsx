import * as React from 'react';
import {Redirect} from 'react-router-dom';

import { Style } from './Scenarios.style';

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

    public loadScenarios(){
        console.log("load scenarios here");
    }

    public handleAddScenario() {
        this.setState({
            shouldRedirect: true,
        });
    }

    public render() {
        return (
            <Style.ScenarioPageContainer id="Scenarios">
                <Style.ScenarioListContainer>
                    <p>Hello!</p>
                </Style.ScenarioListContainer>
                {
                    this.state.shouldRedirect ?
                        <Redirect to="/addScenarios" push={true} />:
                        <Button color="primary" onClick={() => this.handleAddScenario()} >Add New Scenario</Button>
                }
            </Style.ScenarioPageContainer>
        )
    }
}

export  {ScenariosPage} ;