
import * as React from 'react';

import "./ObjectCard.css";

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
                <div className="ObjectCardContainer">
                    <div className="ObjectCardItem">
                        <span className="ObjectCardItem-Title">{smartObject.name}</span>
                        <span>{dataSource}</span>
                    </div>
                    <div className="ObjectCardItem">
                        <span className="ObjectCardItem-Title">{this.props.category}</span>
                        {(this.props.smartObject.actions || []).map(action =>
                            <Button color="primary" size={"small"} onClick={() => this.handleAction(action.id)} key={action.id}>
                                {action.name}
                            </Button>
                        )}
                    </div>
                    <div className="ObjectCardItem LastItem">
                        <ul>{smartObject.ip}</ul>
                        <ul>{smartObject.port}</ul>
                    </div>
                </div>
            </Card>
        );
    }
}

export { ObjectCard };
