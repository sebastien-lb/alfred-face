import * as React from 'react';

import { IScenario, IScenarioCondition } from '../../interfaces';

import { Style } from './ScenarioCard.style';

import {default as ConditionCard } from '../ConditionCard/ConditionCard';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


interface IScenarioCardProps {
    scenario: IScenario;
}

class ScenarioCard extends React.Component<IScenarioCardProps, {}> {

    public render() {
        return (
            <Card>
                <CardContent>
                    <Typography component="h3" variant="h3">
                        {this.props.scenario.name}
                    </Typography>
                    <Style.ScenarioActionsAndConditionContainer>
                        <Style.ScenarioConditionsContainer>
                            {(this.props.scenario.conditions || []).map((condition: IScenarioCondition) => {
                                return <ConditionCard />;
                            })}
                        </Style.ScenarioConditionsContainer>
                        <Style.ScenarioActionsContainer>
                            {(this.props.scenario.objectActions || [].map((key) => {
                                if (this.props.scenario.objectActions) {
                                    return <div>{this.props.scenario.objectActions.find(key)}</div>;
                                } else {
                                    return null;
                                }
                            }))}
                        </Style.ScenarioActionsContainer>
                    </Style.ScenarioActionsAndConditionContainer>
                </CardContent>
            </Card>
        );
    }
}


export default ScenarioCard;