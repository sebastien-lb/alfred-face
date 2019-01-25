import * as React from 'react';
import {Redirect} from 'react-router-dom';

import { IScenario } from '../../interfaces';

import { ScenarioCard } from '../../components';

import { Style } from './Scenarios.style';

import Button from '@material-ui/core/Button';

interface IScenarioPageProps {
    token: string;
    scenarios?: IScenario[];
    fetchScenarios: (token: string) => void;
}
interface IScenariosPageState {
    shouldRedirect: boolean;
}

class ScenariosPage extends React.Component<IScenarioPageProps, IScenariosPageState> {

    constructor(props: any){
        super(props);
        this.state = {
            shouldRedirect: false,
        };
    }

    public componentWillMount() {
        this.props.fetchScenarios(this.props.token);
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
                    {(this.props.scenarios || []).map((scenario: IScenario, index: number) => {
                        return <ScenarioCard key={index} scenario={scenario} />
                    })}
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