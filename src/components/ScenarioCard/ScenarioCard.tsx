import * as React from 'react';

import { IObjectAction, IScenario, IScenarioCondition } from '../../interfaces';

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
        let actions: IObjectAction[] = [];
        if (this.props.scenario.objectActions) {
            for (const key of Object.keys(this.props.scenario.objectActions) ){
                this.props.scenario.objectActions[key]!.map((value: IObjectAction) => {
                    actions = [...actions, value];
                });
            }
        }
        return (
            <Card>
                <CardContent>
                    <Typography component="h3" variant="h3">
                        {this.props.scenario.name}
                    </Typography>
                    <Style.ScenarioActionsAndConditionContainer>
                        <Style.ScenarioConditionsContainer>
                            {(this.props.scenario.conditions || []).map((condition: IScenarioCondition, index: number) => {
                                return <ConditionCard key={index} condition={condition}/>;
                            })}
                        </Style.ScenarioConditionsContainer>
                        <Style.ScenarioActionsContainer>
                            {
                                (actions.map((action: IObjectAction, index: number) => {
                                    return <div key={index}>{action.name}</div>
                                }))
                            }
                        </Style.ScenarioActionsContainer>
                    </Style.ScenarioActionsAndConditionContainer>
                </CardContent>
            </Card>
        );
    }
}


export default ScenarioCard;