
import * as React from 'react';

import "./ObjectCard.css";

import {ISmartObject} from '../../interfaces';

// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import Typography from '@material-ui/core/Typography';

// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface IObjectCardProps {
    smartObject: ISmartObject;
    category: string;
    onAction: (actionId: string) => void;
}


class ObjectCard extends React.Component<IObjectCardProps, {}>  {

    public handleAction(actionId: string) {
        console.log("clicked amene des crepes");
        this.props.onAction(actionId);
    }

    public render() {
        const smartObject = this.props.smartObject;
        const dataSource: string = smartObject.dataSources && smartObject.dataSources.length ? smartObject.dataSources[0].name : "";
        return (
            <div className="ObjectCardContainer">
                    <div className="ObjectCardItem">
                        <span>{smartObject.name}</span>
                        <span>{dataSource}</span>
                    </div>
                    <div className="ObjectCardItem">
                        <span>{this.props.category}</span>
                        {(this.props.smartObject.actions || []).map(action =>
                            <span onClick={() => this.handleAction(action.id)} key={action.id}>{action.name}</span>
                        )}
                    </div>
                    <div className="ObjectCardItem">
                        <ul>{smartObject.ip}</ul>
                        <ul>{smartObject.port}</ul>
                    </div>

                {/* <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Expansion Panel 1</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel> */}
            </div>
        );
    }
}

export { ObjectCard };
