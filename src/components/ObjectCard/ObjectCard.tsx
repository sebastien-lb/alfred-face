
import * as React from 'react';

import { Style } from './ObjectCard.style';

import { ISmartObject } from '../../interfaces';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

interface IObjectCardProps {
    smartObject: ISmartObject;
    category: string;
    onAction: (actionId: string) => void;
}


class ObjectCard extends React.Component<IObjectCardProps, {}>  {

    public handleAction(actionId: string) {
        this.props.onAction(actionId);
    }

    public render() {
        const smartObject = this.props.smartObject;
        const dataSource: string = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0].name : "";
        return (
            <Card >
                <Style.ObjectCardContainer>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{smartObject.name}</Style.ObjectCardItemTitle>
                        <span>{dataSource}</span>
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItem>
                        <Style.ObjectCardItemTitle>{this.props.category}</Style.ObjectCardItemTitle>
                        {(this.props.smartObject.actions || []).map(action =>
                            <Button color="primary" size={"small"} onClick={() => this.handleAction(action.id)} key={action.id}>
                                {action.name}
                            </Button>
                        )}
                    </Style.ObjectCardItem>
                    <Style.ObjectCardItemLastItem>
                        <ul>{smartObject.ip}</ul>
                        <ul>{smartObject.port}</ul>
                    </Style.ObjectCardItemLastItem>
                </Style.ObjectCardContainer>
            </Card>
        );
    }
}

export { ObjectCard };
