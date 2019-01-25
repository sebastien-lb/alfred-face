import * as React from 'react';

import { IScenarioCondition } from '../../interfaces';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface IConditionCardProps {
    condition: IScenarioCondition;
}
class ConditionCard extends React.Component<IConditionCardProps, {}> {
    public render() {
        return (
            <Card>
                <CardContent>
                    <Typography component="h6" variant="h6">{this.props.condition.dataSource!.name}</Typography>
                    <Typography component="h6" variant="h6">{this.props.condition.operator}</Typography>
                    <Typography component="h6" variant="h6">{this.props.condition.value}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default ConditionCard;