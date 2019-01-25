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
                    <Typography component="h5" variant="h5">{"Name"}</Typography>
                    <Typography component="h5" variant="h5">{this.props.condition.operator}</Typography>
                    <Typography component="h5" variant="h5">{this.props.condition.value}</Typography>
                    <Typography component="h5" variant="h5">{this.props.condition.value}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default ConditionCard;