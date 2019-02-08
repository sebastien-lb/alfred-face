import * as React from 'react';

import { IObjectAction } from '../../interfaces';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Warning } from '@material-ui/icons';


interface IActionCardProps { 
    action: IObjectAction;
}

class ActionCard extends React.Component<IActionCardProps, {}> {

    public render() {
        return (
            <Card>
                <CardContent>
                    <Typography component="title" variant="title">
                        {this.props.action.important ? <Warning /> : null} Name: {this.props.action.name}
                    </Typography>
                    <Typography component="title" variant="title">
                        Command: {this.props.action.command}
                    </Typography>
                    {
                        this.props.action.payload ?
                            <Typography component="title" variant="title">
                                Payload type: { this.props.action.payload.toString()}
                            </Typography>
                        : null
                    }
                </CardContent>
            </Card>
        )
    }
}

export default ActionCard;